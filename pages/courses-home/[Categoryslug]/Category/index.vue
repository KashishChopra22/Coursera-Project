
<script setup>
const route = useRoute();
let a= route.params.slug
console.log("a",a);
import Try from '../../../../components/After_Login/Try'
import { getCoursesData } from '../../../../composable/editData.js';
const { allCourses, error, getAllcourses } = getCoursesData();

const allCoursesurl = ref(`http://localhost:3000/course/${route.params.Categoryslug}`)

async function getAll() {
    await getAllcourses(allCoursesurl.value);
   console.log("fedsrg", allCourses.value);
}
getAll();
</script>

<template>


            <div class="w-[100%] mb-[100px] max-w-[1200px] mx-auto mt-3 xl:max-w-[1500px] ">

    <div class="gap-3 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[600px]:px-9 cursor-pointer">

    <div v-for="m in allCourses" :key="m" class="relative w-[100%] mb-[20px]  max-w-[1200px] border border-2  shadow-lg  rounded-lg transition duration-150 ease-in-out hover:scale-105">

      <Try :m="m"></Try>
    

    </div>
    </div>
    </div>



</template>
