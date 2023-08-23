<template>
   
    <div class="w-[100%] max-w-[1300px] mx-auto mt-3 mb-7  lg:max-w-[1200px] lg:mx-[40px] xl:max-w-[1300px] xl:mx-auto">
        <div class="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-7">
            <div v-for="m in allCourses" :key="m.id" class="mt-6 border border-2 rounded-lg bg-white shadow-lg cursor-pointer hover:shadow-xl">

    <NuxtLink :to="`/courses-home/${m.slug}/Category`">

                <div class="flex">
                    <div>
    
                        <img :src="allCourseImage[inc]" class="h-[100px] w-[100px] min-w-[80px] mr-[10px] cover rounded-lg"/>
                     <p class="hidden">  {{ inc++ }}</p> 
                       
                    </div>

                    <div>
                        <p class="text-black text-[1.1rem] mx-4 mt-8 font-['Source-Sans-Pro',Arial,sans-serif]">{{ m.name }}</p>

</div>

</div>
</NuxtLink>

            </div>
        </div>

    </div>
</template>


<script setup>

import { getCoursesData } from '../../composable/editData.js';
const { allCourses, error, getAllcourses } = getCoursesData();

const allCoursesurl = ref("http://localhost:3000/category/sub-category")
const allCourseImage = ref([]);
let inc = 2;

async function getAll() {
    await getAllcourses(allCoursesurl.value);
    allCourses.value
}
getAll();

const { data } = await useFetch('/api/AllImages')
allCourseImage.value = data.value.allImages;


</script>