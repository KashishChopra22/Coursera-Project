
<script setup>
import { useFreeCoursesStore } from '../store/FreeCourses.js';
import BrowseCards from '../components/BrowseCards.vue';
import CheckBox from '../components/CheckBox.vue';
import axios from 'axios';

const store = useFreeCoursesStore();
const allCourses = ref([])

const pageSize =8;
const active = ref(1);
const tabFilter = ref("active");
const heading1 = ref([])
const heading2 = ref([])
const heading3 = ref([])
const countPage = ref(0);

const filterId = ref();
const idArr = ref([]);
const dataArr = ref([]);
const emptyArr = ref([]);
const eventVal = ref();
const checkId = ref(0);

const getAdminPagination = async (allData) => {
    const test = { allData };
    const { data } = await axios.get(
        `http://localhost:3000/course?page=${allData.page}&pageSize=${allData.pageSize}&status=${allData.status}`,
        test
    );

    console.log("pagination data", data);
     allCourses.value = data.courses;
     emptyArr.value =  data.courses;
    countPage.value = await data.count

};

async function getAll() {
    await getAdminPagination({ page: active.value, pageSize: pageSize, status: tabFilter.value })

}
onMounted(() => getAll());

countPage.value = store.allCoursesEnrolled.count

function handleChange(id, event) {
    allCourses.value = [];
    dataArr.value = []

    eventVal.value = event.target.checked
    checkId.value = id;

    if (event.target.checked) {
        idArr.value.push(id);
        console.log("idArr", idArr.value);
    }

    else {
        idArr.value = idArr.value.filter((e) => e != id)
        console.log("54", idArr.value);
    }


    emptyArr.value.filter((e) => {
        if (idArr.value.includes(e.Category.id)) {
            allCourses.value.push(e);

        }
    })



    if (idArr.value.length == 0) {
        allCourses.value = emptyArr.value;
    }

}

async function handleNext() {



    if (active.value < Math.ceil(countPage.value / pageSize)) {

        active.value = active.value + 1;
       await  getAdminPagination({ page: active.value, pageSize: pageSize, role: tabFilter.value });
    }

    allCourses.value = [];

    emptyArr.value.filter((e) => {
       
        if (idArr.value.includes(e.Category.id)) {
            console.log("hello");
            allCourses.value.push(e);
           

        }

    })
    console.log("all", allCourses.value);

    if (idArr.value.length == 0) {
        allCourses.value = emptyArr.value;
    }


}


async function handlePrevious() {

 
    if (active.value > 1) {
        active.value = active.value - 1;

       await getAdminPagination({ page: active.value, pageSize: pageSize, status: tabFilter.value });
    }

        allCourses.value = [];

    emptyArr.value.filter((e) => {

        if (idArr.value.includes(e.Category.id)) {
            console.log("hello");
            allCourses.value.push(e);


        }

    })
    console.log("all", allCourses.value);

    if (idArr.value.length == 0) {
        allCourses.value = emptyArr.value;
    }
};

// grid1
await store.getEnrolledCourses('http://localhost:3000/category/main-category');
heading1.value = store.allCoursesEnrolled


await store.getEnrolledCourses('http://localhost:3000/category/sub-category');
heading2.value = store.allCoursesEnrolled;

let names = heading2.value.map((e) => e.name)
console.log(names);


var size = 6;
let onlyThreeName = heading2.value.slice(0, size).map(i => {
    return i;
});

await store.getEnrolledCourses('http://localhost:3000/course/courses/levels');
heading3.value = store.allCoursesEnrolled;







function levelChange(level, event)
{
    console.log("id", level);
    allCourses.value = [];
    dataArr.value = [];

// if(allCourses.value.length > 0)
// {

        if (event.target.checked) {
            idArr.value.push(level);
        }

        else {
            idArr.value = idArr.value.filter((e) => e != level)
            console.log("54", idArr.value);
        }
        emptyArr.value.filter((e) => {
            if (idArr.value.includes(e.level)) {
                allCourses.value.push(e);

            }
        })



        if (idArr.value.length == 0) {
            allCourses.value = emptyArr.value;
        }

    // }


}


</script>

<template>
 
    <div>

        <div class="grid lg:grid-cols-5 grid-cols-1">
            <div class="bg-gradient-to-r from-zinc-100 to-gray-400 mt-5 md:w-[50%] md:mx-auto py-6 border-2 shadow-lg lg:col-span-2 lg:w-[80%] xl:col-span-1">
<!-- <p>Main Category</p>
                <div v-for="m in heading1">
                    <CheckBox :m="m"></CheckBox>
                </div>
                <div class="bg-gray-300 w-[80%] mx-7 h-[2px] mt-5 mb-9"></div> -->
<p class="text-[1.2rem] mx-2 my-4 font-bold">Sub Category</p>
                <div v-for="m in heading2">

                    <!-- <CheckBox :m="m"></CheckBox> -->

<input type="checkbox" :value="m.id" class="mx-2 h-[20px] w-[30px]" @change="handleChange(m.id, $event)"/> {{ m.name }}



                </div>
                <div class="bg-gray-300 w-[80%] mx-7 h-[2px] mt-6 mb-9"></div>
    <p class="text-[1.2rem] mx-2 my-4 font-bold">Level</p>
                <div v-for="m in heading3">
                    <div class="py-2">
                        <span class="text-[1.2rem] text-black">
                            <input type="checkbox" :value="m.id" class="mx-2  h-[20px] w-[30px]" @change="levelChange(m.level, $event)"/>
                            {{ m.level }}
                        </span>
                    </div>
                </div>

            </div>


            <!-- <div class=" col-span-4 "> -->
            <div class="lg:col-span-3 xl:col-span-4 xl:ml-[-90px]">


                <div class="w-[100%] mb-[100px] max-w-[1200px] mx-auto mt-3">

                    <div
                        class="gap-5 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[600px]:px-9 cursor-pointer min-[1024px]:mx-[-80px] ">

                        <div v-for="m in allCourses" :key="m"
                            class="relative w-[100%] mb-[20px]  max-w-[1200px] border border-2  shadow-lg  rounded-lg">

                            <BrowseCards :m="m"></BrowseCards>


                                   


                        </div>


                    </div>

                </div>

                <div class="flex mx-4 justify-end my-8">


                    <i class="fa-solid fa-circle-arrow-left fa-2x mx-6" @click="handlePrevious()"
                        :class="active < 2 ? 'cursor-not-allowed	' : 'fa-solid fa-circle-arrow-left fa-2x mx-6'"></i>


            <p class="mt-0 mx-3">Page {{ active }} of {{ Math.ceil(countPage / pageSize) }} </p>


                
                <i v-if="active > Math.ceil(countPage / pageSize)"
                    class="fa-solid fa-circle-arrow-right fa-2x mx-6 cursor-not-allowed" @click="handleNext()"></i>

                <i v-else class="fa-solid fa-circle-arrow-right fa-2x mx-6" @click="handleNext()"></i>

    <p> Total Courses {{store.allCoursesEnrolled.count}}</p>
                </div>
            </div>
        </div>


    </div>
</template>

