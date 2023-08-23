
<script setup>
import LoginSection2 from '../../components/After_Login/LoginSection2.vue';
const icon= "https://img.icons8.com/?size=1x&id=9480&format=png"
const freeCourseHeading = "Explore All Courses"
</script>


<template>
     
      <LoginSection2 :icon="icon" :freeCourseHeading="freeCourseHeading"></LoginSection2>
      <CoursesList></CoursesList>
</template>
