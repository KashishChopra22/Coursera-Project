


<script setup>

definePageMeta({
    layout: "custom"
})


import AdminTable from '../../components/Admin/AdminTable.vue'
import axios from 'axios';


const adminView = ref([])
const pageSize = 4;
const active = ref(1);
const tabFilter = ref("inActive");
const countPage = ref(0);


const getAllCoursePage = async (allData) => {
    const test = { allData };
    const { data } = await axios.get(
        `http://localhost:3000/course?page=${allData.page}&pageSize=${allData.pageSize}&status=${allData.status}`,
        test
    );

    console.log("pagination data", data);
    adminView.value = data.courses;
    countPage.value = await data.count
}

async function getAll() {
    await getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value })


}
onMounted(() => getAll())


function handleNext() {
    if (active.value < Math.ceil(countPage.value / pageSize)) {
        active.value = active.value + 1;
        watchEffect(() =>
            getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value }));
        return active.value;

    }
}


function handlePrevious() {

    if (active.value > 1) {
        active.value = active.value - 1;

        watchEffect(() => getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value }));

    }
};


</script>

<template>
    <AdminTable :adminView="adminView"></AdminTable>

    Inactive courses : {{ countPage }}
    <div class="flex mx-4 justify-end w-[80%] mx-auto mt-7">
       
                <button type="button"
                    class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem]"
                    @click="handlePrevious()"
                    :class="active == 1 ? 'cursor-not-allowed' : 'bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 '">Previous</button>

                 <p class="mt-0 mx-3">Page {{ active }} of {{ Math.ceil(countPage / pageSize) }} </p>

        <button v-if="active > Math.ceil(countPage / pageSize)" type="button"
                        class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem] cursor-not-allowed"
                        @click="handleNext()">Next</button>

                <button v-else type="button"
                    class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem]"
                    @click="handleNext()">Next</button>


       
        </div>
</template>