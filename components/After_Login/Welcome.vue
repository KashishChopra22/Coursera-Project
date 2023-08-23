

<script setup>
const route = useRoute()
const emailToken=ref("");
emailToken.value= localStorage.getItem("coursera project user")

let getName= emailToken.value.split("@")[0]
let getCapitalName= getName.charAt(0).toUpperCase()+ getName.slice(1);
</script>
<template>
    <div>
       

<div class="bg-[#ebf3ff] h-[300px] relative shadow-lg">

<div class="absolute  left-[20%] xl:max-w-[1110px] xl:w-[100%]">

<p class="text-[#382d8b] text-[2.5rem] font-bold mt-[20px] xl:mt-[200px]">Welcome  {{ getCapitalName }} !</p>
</div>
</div>


<div class="bg-gray-200 w-[100%] max-w-[1300px] mx-auto mt-3 mb-9 xl:max-w-[1300px] xl:w-[100%] text-[1.2rem] lg:text-[1.5rem] grid grid-cols-3 text-center">
 <NuxtLink to="/courses-home" active-class="active-link" class=" px-6 py-[12px] border-r-2 border-black hover:text-green-600"><i class="fa-solid fa-house pr-2"></i>Home</NuxtLink>

 
 <NuxtLink to="/in-progress" active-class="active-link" class=" px-4 py-[12px] border-r-2 border-black hover:text-green-600"><i class="fa-solid fa-bars-progress pr-2"></i>In Progress</NuxtLink>
 
 <NuxtLink to="/completed" active-class="active-link" class="px-4 py-[12px] hover:text-green-600"><i class="fa fa-check-square" aria-hidden="true"></i>
    Completed</NuxtLink>
 </div>
 
 
 </div>

 </template>


<style>
.active-link {
    color: blue;
}
</style>
