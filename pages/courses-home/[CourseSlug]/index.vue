

<template>

    <CourseSection1 />
    <CourseSection2 :slug="r"></CourseSection2>
    
</template>


<script setup>
import CourseSection1 from '../../../components/Courses/CourseSection1.vue';
import CourseSection2 from '../../../components/Courses/CourseSection2.vue';

const route = useRoute();
const r = route.params.CourseSlug
console.log("route:", route.params.CourseSlug);
</script>