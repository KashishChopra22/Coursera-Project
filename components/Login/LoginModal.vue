
<script setup>
import axios from "axios";
import { useCourseraStore } from '../../store/fetch'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email, minLength } from '@vuelidate/validators'

const router = useRouter()

const store = useCourseraStore();
const status = ref(false);
const loginuser = ref([]);


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.102.15:3000'

const showPsswd = ref(true);
function handleShow() {
  showPsswd.value = !showPsswd.value
}

const rules = computed(() => {
  return {
    loginemail: { required: helpers.withMessage('Email field cannot be empty', required), email },

    loginpswd: { required: helpers.withMessage('Password is required', required), minLength: minLength(8) },
  };
});
const v$ = useVuelidate(rules, store.userObj);


async function handleLogin() {
  const admin = ref("")
  const result = await v$.value.$validate();
  const url = ref('http://localhost:3000/login')

  if (result) {
    watchEffect(() => store.postUsers(url.value, store.userObj, status.value))
    console.log(status.value, "asd");

    if (store.loginuser.length > 0) {
      status.value = true;
      console.log("status.value", status.value);
      router.push('/courses-home')
    }

    if (store.wrongUser.length > 0) {
      status.value = false;

    }


    admin.value = store.adminUser
    console.log("fdsf", admin.value);
    if (admin.value === 'ADMIN') {
      router.push('/admin')
    }

    console.log("status false", status.value);
  }


}


</script>

<template>
  <div>
    <!-- Modal -->

    <div data-te-modal-init
      class="fixed left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[#000000b3] top-0"
      id="login" data-te-backdrop="static" data-te-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
        <div
          class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(0, 0, 0, 0.83)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none mt-[120px]">
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
            <!--Modal title-->
            <h5
              class="text-xl font-medium leading-normal text-black mx-auto mt-[15px] text-[1.9rem] leading-[2.25rem] font-[OpenSans]"
              id="exampleModalLabel">
              Welcome Back
            </h5>

            charu@gmail.com
            charu@2002
            <!--Close button-->
            <button type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!--Modal body-->
          <div data-te-modal-body-ref class="relative p-4">



            <div class="bg-white mx-12 px-2">

              <label class="text-[15px] font-bold leading-[18px] ">EMAIL</label>
              <input type="email" aria-label="First name"
                class="rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 mt-[10px] mb-[15px]"
                placeholder="name@email.com" v-model="store.userObj.loginemail" />

              <span class="text-red-600" v-for="e in v$.loginemail.$errors" :key="e">{{
                e.$message
              }}</span>
              <div>
                <label class="text-[15px] font-bold leading-[18px] mt-5">PASSWORD</label>
                <div class="relative">
                  <input v-if="showPsswd" type="password" aria-label="password"
                    class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
                    placeholder="Enter your password" v-model="store.userObj.loginpswd" />


                  <input v-else type="text" aria-label="password"
                    class=" relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
                    placeholder="Enter your password" v-model="store.userObj.loginpswd" />

                  <span @click="handleShow" class="absolute top-[12px] right-[15px]">
                    <i v-if="showPsswd" class="fa-solid fa-eye " style="font-size:20px"></i>
                    <i v-else class="fa-solid fa-eye-slash" style="font-size:20px"></i>

                  </span>
                </div>
              </div>
              <span class="text-red-600" v-for="e in v$.loginpswd.$errors" :key="e">{{
                e.$message
              }}</span>

              <p v-if="status === false" class="text-danger h-[10px]">{{ store.wrongUser }} </p>
              <div class="mt-6">

                <!-- data-te-modal-dismiss -->
                <div v-if="status"><button
                    class="bg-blue-700 text-white font-bold w-[100%] hover:bg-blue-800 p-[12px] rounded-md mt-[20px] text-[17px]"
                    @click="handleLogin" data-te-modal-dismiss> Login</button>
                </div>

                <div v-else>
                  <button
                    class="bg-blue-700 text-white font-bold w-[100%] hover:bg-blue-800 p-[12px] rounded-md mt-[20px] text-[17px]"
                    @click="handleLogin"> Login</button>
                </div>
              </div>






              <div class="flex mt-[15px] items-center justify-between	">

                <hr class="h-[1px] mx-[20px] w-[40%]" style="border:1px solid #0000002e">
                <div>or</div>
                <hr class="h-[1px] mx-[20px] w-[40%]" style="border:1px solid #0000002e">
              </div>

              <div>






                <LoginBtns
                  :svg="'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'"
                  :title="'Continue with Google'" />
                <LoginBtns :svg="'https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png'"
                  :title="'Continue with Facebook'" />
                <LoginBtns
                  :svg="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'"
                  :title="'Continue with Apple'" />
              </div>

              <div class="flex justify-center mt-5 mb-6 text-[1.1rem] font-['Source-Sans-Pro',Arial,sans-serif] ">
                <p class="text-center">New to Coursera ? </p>


                <NuxtLink to="/Signup">
                  <p class="text-[#2a73cc] underline mx-2 cursor-pointer" data-te-modal-dismiss> SignUp </p>

                </NuxtLink>







              </div>

              <div class="mt-5 ">
                <hr class="h-[1px] w-[100%]" style="border:1px solid #0000002e">
              </div>

              <div
                class="text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] text-[#2a73cc] text-center mt-1 hover:underline">
                Log In with your organiztaion
              </div>

              <div class="mb-9">
                <p class="text-center text-[0.9rem] mt-5">Having trouble Logging in ?<NuxtLink
                    to="https://www.coursera.support/s/article/209818553-Troubleshooting-login-and-account-issues?language=en_US"
                    target="_blank" class="underline"> Learner Help Center </NuxtLink>
                </p>
              </div>
            </div>

          </div>}

        </div>
      </div>
    </div>


  </div>
</template>

