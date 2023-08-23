
<script setup>
definePageMeta({
    layout: "custom",
})
import AdminSeeCategory from '../../components/Admin/AdminSeeCategory.vue'
import { getCoursesData } from '../../composable/editData.js'
const { getAllcourses, allCourses } = getCoursesData();

const mainData = ref([])

async function getAll() {
    await getAllcourses('http://localhost:3000/category/all/sub-category');
    mainData.value = allCourses.value;
}

getAll();

</script>

<template>
    <div class="grid grid-cols-4">
        <div v-for="m in mainData">


            <div class="my-8 shadow-lg rounded w-[70%] mx-auto py-6 hover:shadow-xl text-center bg-stone-200">
                <AdminSeeCategory :mainData="m"></AdminSeeCategory>

            </div>
        </div>
    </div>
</template>

