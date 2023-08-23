
<script setup>
import { useFreeCoursesStore } from '../../store/FreeCourses.js';
import Try from './Try.vue';

let url = ref('http://localhost:3000/course/free/only10')
const store = useFreeCoursesStore()
const fourCourse = ref([]);

await store.getFreeCourses(url.value)
console.log("free courses data", store.freeCourse);

const status = ref(true);
const btnShow = ref("Show More");
const courseLen = ref(0);

let a = store.freeCourse && store.freeCourse.length
let b = store.freeCourse && store.freeCourse.slice(0, 4).length
courseLen.value = a - b;

console.log("length", a - b);

watchEffect(() => {
    if (status.value == true) {
        fourCourse.value = store.freeCourse && store.freeCourse.slice(0, 4)
        btnShow.value = "Show More"
        courseLen.value = a - b;
    }
    else {
        fourCourse.value = store.freeCourse && store.freeCourse.slice(0, 10)
        btnShow.value = "Show Less"
        courseLen.value = ""
    }
})


function handleMore() {
    status.value = !status.value
    console.log("gfdsg", fourCourse.value);

}


</script>

<template>
    <div>



        <div class="w-[100%] mb-[100px] max-w-[1300px] mx-auto mt-3">

            <div
                class="gap-3 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4  cursor-pointer">

                <div v-for="m in fourCourse" :key="m"
                    class="relative w-[100%] mb-[20px] max-w-[1200px] border border-2  shadow-lg  rounded-lg transition duration-150 ease-in-out hover:scale-105">


             <NuxtLink :to="`/courses-home/${m.slug}`">               
                        <Try :m="m"></Try>         
                </NuxtLink>


                </div>
            </div>

            <div class="mx-8">

                <button type="button"
                    class="bg-white text-blue-700 border-2 border-blue-700 text-[1rem] font-bold hover:bg-blue-900 rounded-lg px-5 py-2 mb-2 hover:text-white"
                    @click="handleMore">{{ btnShow }} {{ courseLen }}</button>

            </div>
        </div>




    </div>




</template>
