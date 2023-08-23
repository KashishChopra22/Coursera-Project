
<script setup>
import { useCourseraStore } from '../store/fetch.js';
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, email, minLength, maxLength } from '@vuelidate/validators'


definePageMeta({
  layout: false
})
const router = useRouter();
const store = useCourseraStore();
const status = ref(false);
const errorMessage = ref(false);
const passError = ref(false);
const nameError = ref(false);
const pswdMessage = ref("Password must be match")
const passRegex = ref("Password must be combination of special case, numbers and letters")
const nameRegex = ref("Username cannot contain numbers")

const userData = reactive({
  fullname: "", email: "", password: "", confirmPassword: ""
})

const rules = computed(() => {
  return {

    fullname: { required: helpers.withMessage('Username field cannot be empty', required), minLength: minLength(5), maxLength: maxLength(15) },

    email: { required: helpers.withMessage('Email field cannot be empty', required), email },

    password: { required: helpers.withMessage('Password is required', required), minLength: minLength(8) },
    confirmPassword: { required: helpers.withMessage('Value must be equal to the password field', required) }

  };
});
const v$ = useVuelidate(rules, userData);


function passChange() {
  const passregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

  if (!userData.password.match(passregex)) {
    passError.value = true;
  }
  else {
    passError.value = false;
  }
}

function nameChange() {
  const nameregex = /^[a-zA-Z ]{2,30}$/;
  if (!userData.fullname.match(nameregex)) {
    nameError.value = true;
  }
  else {
    nameError.value = false;
  }

}


async function handleSignup() {

  const result = await v$.value.$validate();
  if (result && userData.password === userData.confirmPassword) {
    console.log("object");
    await store.SignUp(userData)
    status.value = true;
    pswdMessage.value = ""
    router.push('/courses-home');
  }


  if (userData.password != userData.confirmPassword) {
    errorMessage.value = true;
  }

}
console.log("userData", userData);
</script>

<template>
  <section class="vh-100 ">
    <p>vdsfdsfd@gmail.com</p>
    <div class="grid grid-cols-1 container mx-auto w-[50%] border-2 shadow-lg mt-6 py-9">
      <p class="text-center text-[1.8rem] text-black font-bold">SIGNUP</p>
      <form class="w-[50%] mx-auto py-8">




        <div class="mb-6">
          <label class="text-[15px] font-bold leading-[18px] text-black">FULLNAME</label>
          <input type="email" aria-label="First name"
            class="rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 mt-[10px] mb-[15px]"
            placeholder="Type here..." v-model="userData.fullname" @change="nameChange()" />

        </div>
        <span class="text-red-600" v-for="e in v$.fullname.$errors" :key="e">{{
          e.$message
        }}</span>

        <span class="text-red-600" v-if="nameError">{{ nameRegex }}</span>



        <div class="mb-6">
          <label class="text-[15px] font-bold leading-[18px] text-black">EMAIL</label>
          <input type="email" aria-label="First name"
            class="rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 mt-[10px] mb-[15px]"
            placeholder="name@email.com" v-model="userData.email" />

        </div>
        <span class="text-red-600" v-for="e in v$.email.$errors" :key="e">{{
          e.$message
        }}</span>
        <div class="mb-6">
          <label class="text-[15px] font-bold leading-[18px] text-black">PASSWORD</label>
          <div class="relative">
            <input type="password" autocomplete="on"
              class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
              placeholder="Enter your password" v-model="userData.password" @change="passChange()" />



          </div>
        </div>
        <span class="text-red-600" v-for="e in v$.password.$errors" :key="e">{{
          e.$message
        }}</span>



        <span class="text-red-600" v-if="passError">{{ passRegex }}</span>


        <div class="mb-6">
          <label class="text-[15px] font-bold leading-[18px] text-black">CONFIRM PASSWORD</label>
          <div class="relative">
            <input type="password" autocomplete="on"
              class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
              placeholder="Enter your password" v-model="userData.confirmPassword" />




          </div>
        </div>

        <span class="text-red-600" v-for="e in v$.confirmPassword.$errors" :key="e">{{
          e.$message
        }}</span>


        <span class="text-red-600" v-if="errorMessage">{{ pswdMessage }}</span>

        <div class="mb-6">
          <p v-if="status" class="text-red-600">{{ store.signupError }}</p>
        </div>
        <div class="mb-6">

          <button type="button"
            class="bg-blue-700 text-white font-bold w-[100%] hover:bg-blue-800 p-[12px] rounded-md mt-[30px] text-[17px]"
            @click="handleSignup">Sign Up</button>
        </div>

        <div class="flex justify-center mt-5 mb-6 text-[1.1rem] font-['Source-Sans-Pro',Arial,sans-serif] ">
          <p class="text-center">Already have an account ? </p>


          <NuxtLink to="/">
            <p class="text-[#2a73cc] underline mx-2 cursor-pointer"> Login here </p>
          </NuxtLink>








        </div>

      </form>
    </div>

  </section>
</template>