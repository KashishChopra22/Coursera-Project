<script setup>
import Welcome from "../components/After_Login/Welcome.vue";
import { progress } from "../composable/editData.js";
import ProgressCourses from "../components/Courses/ProgressCourses.vue";
import ProgressNoCourse from "../components/Courses/ProgressNoCourse.vue";
import Footer from "../components/Footer.vue";

const { getProgressCourse, progressCourse } = progress();
const emailToken = ref("");

const progressCourseData = ref([]);
emailToken.value = localStorage.getItem("coursera project user");

let progressUrl = ref(`http://localhost:3000/user/enroll/in-progress`);
const dataa = reactive({ email: emailToken });

let a = ref("");
const progressShown= ref(false);
async function getData() {
 await getProgressCourse(progressUrl.value, dataa);
    
    progressCourseData.value = progressCourse.value;
    console.log("object", progressCourseData.value);

    if (progressCourse.value.length > 0) {
       
        progressShown.value = true;
        
    }
}

onMounted(() => {
    getData();
});

definePageMeta({
    middleware: "auth",
});
</script>
<template>
    <div>
        <!-- transition duration-150 ease-in-out hover:scale-105 -->
        <Welcome />

        <div v-if="progressShown" class="w-[100%] mb-[100px] max-w-[1200px] mx-auto mt-3 grid grid-cols-4">
            <div
                class="gap-3 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-3 min-[600px]:px-9 cursor-pointer min-[1024px]:mx-[-80px] min-[1024px]:col-span-3  ">
                <div v-for="m in progressCourseData" :key="m"
                    class="relative w-[100%] mb-[20px] max-w-[1200px] border border-2 shadow-lg rounded-lg " :class="m.progress >= 50 ? 'bg-gradient-to-r from-green-200 to-green-200' : 'bg-gradient-to-r from-cyan-200 to-cyan-200'">
            
                    <ProgressCourses :m="m"></ProgressCourses>
                </div>
            </div>
          
        </div>

        <div v-if="progressCourseData.length === 0">
            <div class="grid grid-cols-1 lg:grid-cols-3 w-[60%] mx-auto">
                <ProgressNoCourse title="You will find your in -progress
                         Courses here"></ProgressNoCourse>
            </div>
        </div>
    </div>

    <div class="mt-[140px]">
        <Footer></Footer>
    </div>
</template>
