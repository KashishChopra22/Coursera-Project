
<script setup>
definePageMeta({
  layout: "custom"
})
import axios from 'axios';
import { useCourseraStore } from '../../store/fetch.js';
import { getTopics } from '../../composable/editData.js';
import { getCoursesData } from '../../composable/editData.js';
import { DeleteTopics } from '../../composable/editData.js';


const { createNewTopic, topicsData } = getTopics();
const { getAllcourses, allCourses } = getCoursesData();
const { deleteNewTopic, delResponse } = DeleteTopics();

const store = useCourseraStore();
let fakeSearch = ref([])
const listStatus = ref(false);
const searchUrl = ref('')


// export function getTopics() {
//   const topicsData = ref("");

//   const createNewTopic = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/topic", {
//         topic: data.topic,
//         course: data.course,
//       });
//       console.log("res", res);
//       topicsData.value = res;

//       getAllcourses(allCoursesurl);
//     }

//     catch (error) {
//       console.log("error: ", error);
//       // throw new Error("Failed to create main category");
//     }
//   };
//   return { createNewTopic, topicsData };
// }

function searchCourse(event) {
  searchUrl.value = (`http://localhost:3000/course/search/${event.target.value}`)

  if (event.target.value === '') {
    listStatus.value = false;
    return []
  }

  getAllcourses(searchUrl.value);
  fakeSearch.value = allCourses.value
  listStatus.value = true;

  allCourses.value = "";
  // return fakeSearch.value;

};

const topicList = ref(false)
const courseData = ref({});
const searchData = ref([])
const topicUrl = ref();

async function handleSearchMove(m) {

  courseData.value = m;
  console.log("m", courseData.value.id);
  listStatus.value = false;
  topicUrl.value = (`http://localhost:3000/topic/${m.slug}`)


  await getAllcourses(topicUrl.value);
  searchData.value = allCourses.value;
  topicList.value = true;
  // return [] ;
}

const formStatus = ref(false);
async function handleFormOpen() {
  formStatus.value = true;
}

// topic,course
let topicArr = reactive([]);
console.log("courseData", courseData.value);





const data = reactive({ topic_name: "", topic_description: "" })


async function handleAdd() {
  topicArr = [];
  topicArr.push({ topic_name: data.topic_name, topic_description: data.topic_description });

  const course = reactive({ courseId: courseData.value.id, courseSlug: courseData.value.slug });

  const sendData = reactive({ topic: topicArr, course: course })
  await createNewTopic(sendData)
  console.log("new added", topicsData.value);


  await getAllcourses(`http://localhost:3000/topic/${courseData.value.slug}`);
  searchData.value = allCourses.value;


  console.log("searchData.value", searchData.value);
  data.topic_name = "";
  data.topic_description = "";
  // formStatus.value = false;

}


async function handleDelete(id) {

await deleteNewTopic(`http://localhost:3000/topic/${id}`);
await getTopicsAfterDel();
  searchData.value = allCourses.value;

}

async function getTopicsAfterDel() {
  await getAllcourses(`http://localhost:3000/topic/${courseData.value.slug}`);

}
</script>


<template>
  <div class="w-[1200px] mx-auto">
    <form class="w-[40%] mx-auto mt-7" autocomplete="off">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search"
          class="block w-full p-3 pl-10 text-gray-900 rounded bg-gray-50 focus:outline-none border border-black "
          placeholder="Search by Course Name" @input="searchCourse">

      </div>
    </form>


  </div>

  <div class="mx-auto w-[30%]">
    <ul v-if="listStatus" class="w-[25%] rounded shadow-lg bg-red-300 h-[60%] overflow-auto z-50 absolute">

      <li v-for="m in fakeSearch" @click="handleSearchMove(m)"
        class="px-4 py-2 text-[1.2rem] text-black hover:cursor-pointer hover:text-gray-800">
        <i class="fa-solid fa-magnifying-glass px-3"></i> {{ m.title }}
      </li>




    </ul>

  </div>

  <div v-if="topicList">
    <div class="grid grid-cols-3">
      <div v-for="m in searchData">

        <div class="my-8 shadow-lg rounded w-[50%] mx-auto py-6 hover:shadow-xl text-center bg-stone-200">
          <i class="fa-solid fa-xmark cursor-pointer flex justify-end	mx-2" @click="handleDelete(m.id)"></i>
          <p>{{ m.topic_name }}</p>


          <p>{{ m.topic_description }}</p>

        </div>
      </div>


      <div v-if="formStatus">

        <form>
          <div className="flex my-8 mx-5">
            <div className="w-[100px] text-[1.2rem] mt-2">
              <label> Title </label>
            </div>
            <div class="mb-4">
              <input type="text" placeholder="type here..."
                class="border-2 focus:border-primary border-gray-300 rounded-lg  w-[400px] py-[0.75rem] text-base font-normal px-4"
                v-model="data.topic_name" />
            </div>
          </div>

          <div className="flex my-8 ">
            <div className="w-[100px] text-[1.2rem] mt-2">
              <label> Description </label>
            </div>
            <div class="mb-4">
              <input type="text" placeholder="type here..."
                class="border-2 focus:border-primary border-gray-300 rounded-lg  w-[400px] py-[0.75rem] text-base font-normal px-4"
                v-model="data.topic_description" />
            </div>
          </div>

          <div class="mx-5"><button type="button" class="rounded-lg shadow-lg bg-gray-400 px-2 py-2"
              @click="handleAdd()">Add Topic </button></div>
        </form>
      </div>



    </div>

    <div class="flex justify-end mr-[60px]">
      <button class="bg-gray-600 px-2 py-2 rounded-lg text-white" @click="handleFormOpen()">Create Topic</button>
    </div>

  </div>
</template>