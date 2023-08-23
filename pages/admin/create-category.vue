
<script setup>
import axios from 'axios';
axios.defaults.withCredentials = true;
definePageMeta({
  layout: "custom"
})
import { getCoursesData } from '../../composable/editData.js';
import { getParent } from '../../composable/editData.js';


import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'


const { getAllcourses, allCourses } = getCoursesData();
const { createParentCategory, categoryExist, createSubCategory, SubcategoryExist } = getParent();

// To get title in sub category
await getAllcourses('http://localhost:3000/category/all-category');
console.log("object", allCourses.value);




const categoryData = reactive({ category: "" });
const radioEvent = ref("")
const parentStatus = ref(false);
const subStatus = ref(false);
const statusData = ref("");

function onChange(event) {
  radioEvent.value = event.target.value;

  if (event.target.value === 'ParentCategory') {
    parentStatus.value = true;
    subStatus.value = false;
  }
  if (event.target.value === 'SubCategory') {
    subStatus.value = true;
    parentStatus.value = false;
  }
  console.log("event: " + radioEvent.value);
}
const errorStatus = ref(false);
function handleStatus(event) {
  console.log("event: " + event.target.value);
  statusData.value = event.target.value;
}

const data = reactive({ course_title: "", status: statusData })
const alreadyExist = ref(false);


// Validation

const rules = computed(() => {
  return {
    course_title: { required: helpers.withMessage('Please enter the category title', required), },
    status: { required: helpers.withMessage('Please select the category status', required) },
  };
});
const v$ = useVuelidate(rules, data);

async function handleCreate() {
  const result = await v$.value.$validate();
  if (result) {

    await createParentCategory(data);
    console.log("categoryExist.value", categoryExist.value);

    if (categoryExist.value?.includes("category already exists")) {
      alreadyExist.value = true;

    }
    else {
      await createParentCategory(data);
      alreadyExist.value = false;
      data.course_title = "";
      data.status = "";
    }
  }
}

// Sub
const secondStatus = ref("");
function handleSecondStatus(event) {
  secondStatus.value = event.target.value;
}

const titleVal = ref("");
function handleTitle(event) {
  console.log("event: ", event.target.value);
  // titleVal.value = event.target.value;
  titleVal.value = Number(event.target.value)
}
const subCategory = reactive({ course_title: "", status: secondStatus, parentId: titleVal })
const setFormError = reactive({ course_title:"" })
// Validations
function validate()
{
      const err = {};
  let flag = 0;

     if (!subCategory.course_title) {
    err.course_title = 'Please enter the category title';
    setFormError.course_title = 'Please enter the category title';
    flag = 1;
  }

    if (!subCategory.status) {
    err.course_title = 'Please select the category status';
    setFormError(err);
    flag = 1;
  }
    if (!subCategory.parentId) {
    err.course_title = 'Please enter the parent category';
    setFormError(err);
    flag = 1;
  }

   if (flag == 1) {
    return true;
  } else {
    return false;
  }

}

async function handleCreateSub() {
  if(!validate)
  {
    createSubCategory(subCategory);

  }

}

</script>
<template>
  <div class=" shadow-lg w-[800px] mx-auto mt-7 font-['Source-Sans-Pro',Arial,sans-serif]">

    <div class="flex text-[1.2rem] bg-blue-700 rounded-lg text-white">
      <div class="flex items-center my-2 mx-9">
        <input id="radio1" type="radio" value="ParentCategory" name="Category"
          class="w-4 h-4 text-blue-600 focus:ring-blue-500" v-model="categoryData.category" @change="onChange($event)">
        <label for="radio1" class="ml-2">Parent Category</label>
      </div>

      <div class="flex items-center my-2">
        <input id="radio2" type="radio" value="SubCategory" name="Category"
          class="w-4 h-4 text-blue-600 focus:ring-blue-500" v-model="categoryData.category" @change="onChange($event)">
        <label for="radio2" class="ml-2">Sub Category</label>
      </div>

    </div>

    <div v-if="parentStatus" class=" py-4 mt-9 rounded-lg shadow-lg ">

      <div className="flex mt-8 mx-9 font-['Source-Sans-Pro',Arial,sans-serif]">
        <div className="w-[100px] text-[1rem] mt-2">
          <label class="required"> Title </label>
        </div>
        <div class="mb-4 mx-7">
          <div>
            <input type="text" placeholder="type here..."
              class=" rounded-lg  w-[400px] py-[0.75rem] text-base font-normal px-4 border border-gray-400 focus:border-blue-700 focus:outline-0"
              v-model="data.course_title" />
          </div>
          <div class="m-2"> <span class="text-red-600 " v-for="e in v$.course_title.$errors" :key="e">{{
            e.$message
          }}</span></div>
        </div>


      </div>



      <div className="flex mx-9 pb-[40px] mt-5">
        <div className="w-[100px] text-[1rem]">
          <label for="status" class="required">Status </label>
        </div>
        <div>




          <select id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-0 focus:border-blue-500 block  w-[400px] p-2.5 mx-7"
            @change="handleStatus($event)">
            <option selected hidden>Select Status</option>
            <option value="active">ACTIVE</option>
            <option value="inActive">INACTIVE</option>
          </select>

          <div class="m-2 my-2"> 
            <span class="text-red-600 mx-6" v-for="e in v$.status.$errors" :key="e">{{e.$message}}</span>
          </div>

        </div>
      </div>

      <p v-if="alreadyExist" class="text-red-600">Category already exist</p>


      <div className="mx-9 pb-[40px]">
        <button @click="handleCreate()" type="button" className="bg-blue-700 text-white px-4 py-1 rounded text-[1.3rem]">
          Create
        </button>
      </div>
    </div>

    <!-- Sub Category -->

    <div v-if="subStatus" class="py-4 mt-9 rounded-lg shadow-lg ">

      <div className="flex mt-8 mx-9">
        <div className="w-[100px] text-[1rem] mt-2">
          <label class="required"> Title </label>
        </div>
        <div class="mb-4 mx-7">

          <div>
          <input type="text" placeholder="type here..."
            class="border border-gray-400 focus:border-blue-700 focus:outline-0 rounded-lg  w-[400px] py-[0.75rem] text-base font-normal px-4"
            v-model="subCategory.course_title" />

           
       </div>

         
           
      </div>
      </div>


      <div className="flex mx-9 pb-[40px] mt-8">
        <div className="w-[100px] text-[1rem]">
          <label for="status" class="required">Status </label>
        </div>
        <div>




          <select id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-0 focus:border-blue-700 block  w-[400px] p-2.5 mx-7"
            @change="handleSecondStatus($event)">
            <option selected hidden>Select Status</option>
            <option value="active">ACTIVE</option>
            <option value="inActive">INACTIVE</option>
          </select>

     

 </div>
       
      </div>

      <div className="flex mx-9 pb-[40px] mt-4">
       <div className="w-[100px] text-[1rem]">
            <label for="status" class="required">Parent Category </label>
          </div>


        <div>
          <select id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-0 focus:border-blue-700  block  w-[400px] p-2.5 mx-7"
            @change="handleTitle($event)">

            <option selected hidden>Select Parent Category</option>
            <option v-for="m in allCourses" :value="m.id">{{ m.name }}</option>

          </select>
 
        </div>
      </div>



      <div className="mx-8 pb-[40px] mt-2">
        <button @click="handleCreateSub()" type="button"
          className="bg-blue-700 text-white px-4 py-1 rounded text-[1.3rem]">
          Create
        </button>
      </div>

    </div>

  </div>
</template>

<style scoped>
.required:after {
  content: " *";
  color: red;
  margin-top: 20px;
}
</style>