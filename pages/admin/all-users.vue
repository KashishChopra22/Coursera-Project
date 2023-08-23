<script setup>

definePageMeta({
    layout: "custom"
})
import axios from 'axios';
import { RoleChange } from '../../composable/editData.js';


const pageSize = 6;
const active = ref(1);
const tabFilter = ref("ADMIN");
const countPage = ref(0);
const adminView = ref([])


const getAdminPagination = async (allData) => {
    const test = { allData };
    const { data } = await axios.get(
        // `http://localhost:3000/user/user/all-user?page=${allData.page}&pageSize=${allData.pageSize}&role=${allData.role}`,
        `http://localhost:3000/user/user/all-user?page=${allData.page}&pageSize=${allData.pageSize}`,
        test
    );

    console.log("pagination data", data);
    adminView.value = data;
    countPage.value = await data.count
};

async function getAll() {
    await getAdminPagination({ page: active.value, pageSize: pageSize, role: tabFilter.value })

}
onMounted(() => getAll());

console.log("numberPages", countPage.value);
function handleNext() {

    if (active.value < Math.ceil(countPage.value / pageSize)) {
        active.value = active.value + 1;
        getAdminPagination({ page: active.value, pageSize: pageSize, role: tabFilter.value })

    }

}
function handlePrevious() {

    if (active.value > 1) {
        active.value = active.value - 1;


        getAdminPagination({ page: active.value, pageSize: pageSize, role: tabFilter.value })


    }
};





</script>

<template>
    <div class="relative overflow-x-auto w-[90%] mx-auto mt-9 font-['Source-Sans-Pro',Arial,sans-serif]">

        <p class="text-[1.2rem] font-bold">User List</p>
        <p class="text-[1.1rem]">See information about Users</p>
        <table class="w-full text-sm text-left text-gray-500  rounded-lg mt-4 bg-gradient-to-r from-slate-200 to-gray-50">
            <thead class="text-[0.9rem] text-black uppercase border-b-2 border-gray-00">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Avatar
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fullname
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Verified
                    </th>

                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>


                </tr>
            </thead>
            <tbody>
              
    <AdminRow v-for="m in adminView.users" :m="m"></AdminRow>
                   
              
            </tbody>
        </table>
    </div>

    <div class="flex mt-9 justify-between">
        <div class="mx-[90px]">
            Total users {{ countPage }}
        </div>
        <div class="flex mx-4 justify-end">


            <i class="fa-solid fa-circle-arrow-left fa-2x mx-6" @click="handlePrevious()"
                :class="active == 1 ? 'cursor-not-allowed' : 'fa-solid fa-circle-arrow-left fa-2x mx-6'"></i>


            <p class="mt-0 mx-3">Page {{ active }} of {{ Math.ceil(countPage / pageSize) }} </p>

            <i v-if="active > Math.ceil(countPage / pageSize)"
                class="fa-solid fa-circle-arrow-right fa-2x mx-6 cursor-not-allowed" @click="handleNext()"></i>

            <i v-else class="fa-solid fa-circle-arrow-right fa-2x mx-6" @click="handleNext()"></i>

        </div>
    </div>
</template>