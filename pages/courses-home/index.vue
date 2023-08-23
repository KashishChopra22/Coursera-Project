<script setup>
import AllCourses from '../../components/Courses/AllCourses.vue';
import PaidCourses from '../../components/Courses/PaidCourses.vue';
import Welcome from '../../components/After_Login/Welcome';
import LoginSection2 from '../../components/After_Login/LoginSection2.vue';
import FreeCourse from '../../components/After_Login/FreeCourse.vue';
import Footer from '../../components/Footer.vue';


const freeCourseHeading= "Get Started With These Free Courses"
const icon ="https://img.icons8.com/?size=1x&id=XVdLRePLrKeo&format=png"
definePageMeta({
    middleware:"auth"
})
</script>

<template>
    <div>
        <Welcome />
        <LoginSection2 :freeCourseHeading="freeCourseHeading" :icon="icon"></LoginSection2>
        <FreeCourse />
        <AllCourses></AllCourses>
        <PaidCourses></PaidCourses>
        <div class="mt-[140px]">

        <Footer></Footer>
    </div>
    
    </div>
</template>

        //    <!-- data-te-target=#acc1 -->
        //  id="acc1"
// 