<style scoped>

  .required:after {
    content:" *";
    color: red;
  }
</style>


<template>

  <!-- style="background-image: url('https://cdn.pixabay.com/photo/2015/04/28/12/29/white-743495_640.jpg'); background-repeat: no-repeat; background-size: cover;" -->

  <div className="bg-gradient-to-r from-slate-300 to-gray-200 shadow-2xl w-[900px] container mx-auto px-[200px] py-[50px] mt-6 rounded-xl" >
    <form>
    

    
 

    <div class="relative">
      <input type="text" id="title" class="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="courseData.course_title" />

      <label for="title" class="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 required">Course Title</label>
  </div>

    <span class="text-red-600" v-for="e in v$.course_title.$errors" :key="e">{{
      e.$message
    }}</span>

      <div class="relative mt-6" >
        <textarea id="desc" class="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900  rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="courseData.description" />

        <label for="desc" class="absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 required">Course Description</label>
    </div>

      <span class="text-red-600" v-for="e in v$.description.$errors" :key="e">{{
        e.$message
      }}</span>


   <div className="flex mt-6">
          <!-- <div className="w-[100px] text-[1.2rem]">
          <label for="category">Category </label>
        </div> -->
          <div class="w-full">


            <select id="category" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[120%] outline-blue-500 required" @change="handleCategory($event)">
              <option selected hidden value="Select Category" class="rounded-lg text-gray-500"> Select Category <p class="asterisk_required_field"> </p></option>
              <option v-for="m in categories" :value="m.slug" class="rounded-lg">{{ m.name }}</option>
            </select>

          </div>
        </div>

       <div class="mt-4">
     <span class="text-red-600" v-for="e in v$.category.$errors" :key="e">{{
       e.$message
     }}</span>
    </div>

      <div className="flex mt-9">
        <!-- <div className="w-[100px] text-[1.2rem]">
          <label>Status </label>
        </div> -->
        <div class="w-full ">
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[120%] p-2.5 outline-blue-500"
            @change="handleStatus($event)">
            <option selected hidden class="font-['Source-Sans-Pro',Arial,sans-serif]">Select Status</option>
            <!-- <option :value="selectStatus" selected hidden>{{
              selectStatus }}</option> -->
            <option value="active">Active</option>
            <option value="inActive">Inactive</option>
          </select>

        </div>
      </div>
       <div class="mt-4">
   <span class="text-red-600" v-for="e in v$.status.$errors" :key="e">{{
     e.$message
   }}</span>
  </div>
      <div className="flex mt-9 ">
        <!-- <div className="w-[100px] text-[1.2rem]">
          <label for="level">Level </label>
        </div> -->
        <div class="w-full">




          <select id="level"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[120%] p-2.5 outline-blue-500"
            @change="handleLevel($event)">
            <option selected hidden>Select Level</option>
            <!-- <option :value="selectLevel" selected hidden>{{
              selectLevel }}</option> -->
            <option v-for="m in levelData" :value="m.level">{{ m.level }}</option>
          </select>


        </div>
      </div>

      <div class="mt-4">
  <span class="text-red-600" v-for="e in v$.level.$errors" :key="e">{{
    e.$message
  }}</span>
</div>
  
      <div className="flex mt-9 ">
          <div class="flex mt-3 mr-5">
        

          <input  type="checkbox" class="w-[30px] h-[20px]" @change="handleFree($event)" :input-value="isFreeStatus" />
    <label class="text-[1.1rem] mt-[-3px]">Free</label>
  

        </div>
    


     <div class="relative w-full">
        <input v-if="freeCheck" type="number" id="price" class="block px-2.5 pb-2.5 pt-4 w-full text-md text-gray-900  rounded-lg border-2 border-gray-300 bg-blue-100" v-model="priceVal" disabled min="200" @change="checkPrice($event)"/>

   <input type="number" v-else id="price" class="block px-2 pb-2 pt-4 w-full text-md text-gray-900  rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " v-model="courseData.price"  min="200" @input="checkPrice($event)"/>

  <label for="price" class="absolute text-md text-gray-500 -translate-y-4 scale-75 top-2 z-10 bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  ">Price</label>

    </div>
    </div>
    <span class="text-red-600" v-for="e in v$.price.$errors" :key="e">{{
      e.$message
    }}</span>


<p class="text-red-600" >{{ priceErr }}</p>

        <div className="flex mt-9 ">
          <!-- <div className="w-[100px] text-[1.2rem] mt-4">
            <label>Course Thumbnail </label>
          </div> -->
          <div class="w-full">
            <input id="image" type="file" accept="image/*" ref="file"
              class="border focus:border-primary border-gray-400 rounded-lg h-[150%]  w-full py-[0.75rem] text-base font-normal px-4  file:mr-5 file:py-1 file:px-3 file:border-[1px]
              hover:file:cursor-pointer hover:file:bg-blue-50
              hover:file:text-blue-700"
              @change="onFileChanged()"/>
          </div>
        </div>

           <div class="mt-9">
     <span class="text-red-600" v-for="e in v$.thumbnail.$errors" :key="e">{{
       e.$message
     }}</span>
    </div>

      <div className="text-center mt-9">
        <button @click="handleCreate()" type="button" className="bg-blue-800 text-white px-4 rounded text-[1.3rem] py-1 mt-8">
          Create
        </button>
      </div>
    </form>
  </div>

  <div v-if="errorMsg" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p class="font-bold">Our privacy policy has changed</p>
        <p class="text-sm">Make sure you know how these changes affect you.</p>
      </div>
    </div>
  </div>

</template>



<script setup>

definePageMeta({
  layout: "custom"
})

import { useVuelidate } from '@vuelidate/core'
import { required, helpers, minLength } from '@vuelidate/validators'



import { useFreeCoursesStore } from '../../store/FreeCourses.js';
import { AdminCreate } from '../../composable/editData.js';
const store = useFreeCoursesStore();
const { createCourse } = AdminCreate();

const errorMsg= ref(false);

const categories = ref([])
const levelData = ref([])

await store.getEnrolledCourses('http://localhost:3000/category/sub-category');
console.log("listing", store.allCoursesEnrolled);
categories.value = store.allCoursesEnrolled

await store.getEnrolledCourses('http://localhost:3000/course/courses/levels');
levelData.value = store.allCoursesEnrolled;

const selectedCategory = ref('')
const selectStatus = ref('');
const selectLevel = ref('');
let err= "";
const errorStatus= ref(false);

function handleCategory(event) {
  console.log("event", event.target.value);

if(event.target.value === ""){
errorStatus.value = true;
err= "Please Select Course Category"
}
else{

  selectedCategory.value = event.target.value;
}
}
function handleStatus(event) {
  selectStatus.value = event.target.value;
  console.log("selected", selectStatus.value);
}
function handleLevel(event) {
  selectLevel.value = event.target.value;
}
const url = ref('http://localhost:3000/course');
const file = ref(null)
const imageLink = ref("")

async function onFileChanged() {
  console.log("target: ", file.value.files[0]);
  imageLink.value = file.value.files[0];

}

const freeCheck = ref(false);
const priceVal = ref();
const isFreeStatus = ref("");

function handleFree(event) {
  console.log("event: " + event.target.checked);
  if (event.target.checked) {
    freeCheck.value = true;
    priceVal.value = 0;
    isFreeStatus.value = "true";
    console.log("4234", isFreeStatus.value);
  }
  else {
    priceVal.value= " ";
    freeCheck.value = false;
    isFreeStatus.value = "false";
    console.log("error", isFreeStatus.value);
  }
}

const courseData = reactive({ category: selectedCategory, course_title: "", description: "", level: selectLevel, status: selectStatus, thumbnail: imageLink, price: priceVal, is_free: isFreeStatus })

const rules = computed(() => {
  return {

    category: { required: helpers.withMessage('Please select the course category', required), },

   course_title: { required: helpers.withMessage('Please enter the course title', required), },

    description: { required: helpers.withMessage('Please Provide some information about the course', required), minLength: minLength(8) },

    level: { required: helpers.withMessage('Please select the course level', required) },

    status: { required: helpers.withMessage('Please select the course status', required) },

    thumbnail: { required: helpers.withMessage('Please upload the course thumbnail image', required) },

    price: { required: helpers.withMessage('Please enter the valid subscription fee of the course', required) },


  };
});
const v$ = useVuelidate(rules, courseData);
const priceNum= ref();

function checkPrice(event)
{
  
  priceNum.value = event.target.value;
}

const priceErr= ref("");

async function handleCreate() {
  console.log("p", priceNum.value);
  const result = await v$.value.$validate();
      if(result)
      {
        if(priceNum.value == 100 )
        {
priceErr.value = "Please provide the purchase fee atleast 100Rs"
        }
        else{
          priceErr.value = ""
          await createCourse(url.value, courseData);

        }
      }

     
}

</script>