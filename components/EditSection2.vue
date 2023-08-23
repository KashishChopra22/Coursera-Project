


<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email,helpers,minLength } from '@vuelidate/validators'
import { stdEditData } from '../composable/editData.js';

import { useCourseraStore } from '../store/fetch.js';
const store = useCourseraStore();
const { handleSearch, search } = stdEditData();


const emailToken = ref("");
const editUser = ref("");


emailToken.value = localStorage.getItem('coursera project user');
const getAllData = ref(`http://localhost:3000/user/${emailToken.value}`);


async function getData() {
    watchEffect(() => 
        handleSearch(getAllData.value)

    )
    // await store.handleSearch(getAllData.value);
    // console.log("edit value", store.search);
    // editUser.value= store.search
}

getData();
console.log("edituser", search);

const userData = reactive({ fullname: search.fullname, email: search.email, cpassword: "", password: "" })
const rules = computed(() => {
  return {

    fullname: { required: helpers.withMessage('Username field cannot be empty', required), minLength: minLength(5) },

    password: { required: helpers.withMessage('Password is required', required), minLength: minLength(8) },
    cpassword: { required: helpers.withMessage('Value must be equal to the password field', required) }

  };
});
const v$ = useVuelidate(rules, userData);
async function handleEdit() {
  const result = await v$.value.$validate();
if(result){
    console.log("userData: ", userData);
    store.updateUser(`http://localhost:3000/user/${emailToken.value}`, userData)
    // status.value= true;
}
   
}


</script>


<template>
       <div class="col-span-3 bg-white px-auto w-[60%] shadow-lg rounded border border-2">
            <p class="text-center text-[1.8rem] text-black font-bold">Edit Profile</p>
            <form class="w-[100%] py-8 mx-auto">




              <div class="mb-6 w-[60%] mx-auto">
                <label class="text-[15px] font-bold leading-[18px] text-black">FULLNAME</label>
                <input type="email" aria-label="First name"
                  class="rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 mt-[10px] mb-[15px]"
                  placeholder="Type here..." v-model="search.fullname" />

              </div>
      <span class="text-red-600 mx-[120px]" v-for="e in v$.fullname.$errors" :key="e">{{
        e.$message
      }}</span>
              <div class="mb-6 w-[60%] mx-auto">
                <label class="text-[15px] font-bold leading-[18px] text-black">EMAIL</label>
                <input type="email" aria-label="First name"
                  class="rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-blue-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700 mt-[10px] mb-[15px]"
                  placeholder="name@email.com" v-model="search.email" disabled />

              </div>

              <div class="mb-6 w-[60%] mx-auto">
                <label class="text-[15px] font-bold leading-[18px] text-black">CURRENT PASSWORD</label>
                <div class="relative">
                  <input type="password" autocomplete="on"
                    class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
                    placeholder="Enter your password" v-model="userData.cpassword" />



                </div>
              </div>

              <div class="mb-6 w-[60%] mx-auto">
                <label class="text-[15px] font-bold leading-[18px] text-black">NEW PASSWORD</label>
                <div class="relative">
                  <input type="password" autocomplete="on"
                    class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
                    placeholder="Enter your password" v-model="userData.password" />




                </div>
              </div>

              <div class="mb-6 w-[60%] mx-auto">
                <label class="text-[15px] font-bold leading-[18px] text-black">RETYPE PASSWORD</label>
                <div class="relative">
                  <input type="password" autocomplete="on"
                    class="relative rounded-sm relative m-0 block w-[100%] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[35px] text-neutral-700 outline-none focus:border-primary focus:text-neutral-700  mt-[10px] mb-[10px]"
                    placeholder="Enter your password" required/>




                </div>
              </div>

              <div class="mb-6 w-[60%] mx-auto">
                <p v-if="status === false">{{ store.editPassError }}</p>
              </div>

              <div class="mb-6 w-[60%] mx-auto">

                <button type="button"
                  class="bg-blue-700 text-white font-bold w-[100%] hover:bg-blue-800 p-[12px] rounded-md mt-[30px] text-[17px]"
                  @click="handleEdit()">Edit</button>
              </div>



            </form>
          </div>

</template>