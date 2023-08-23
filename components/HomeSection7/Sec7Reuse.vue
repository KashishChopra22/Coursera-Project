
<script setup>
const { data:sec7Data } = await useFetch('/api/sec7')

console.log("Section 7 ",sec7Data.value.section7 );

</script>

<template>
    <section class=" min-[1040px]:flex">
    <section class="min-[1040px]:mx-auto">
        <div class="flex overflow-x-auto min-[1040px]:flex ">



        <div v-for="m in sec7Data.section7" :key="m" class=" min-[1040px]:w-[300px] bg-white-300 py-5 mx-3 xl:mx-12 xl:w-[350px] px-12 mx-auto " >

<div class="mx-auto min-[1040px]:max-w-[270px]">
<div class="min-[1040px]:max-w-[270px] h-[210px]">
<div class="relative min-[1040px]:w-[200px] pb-[100%] min-[1040px]:mx-auto">
    
    <img :src="m.img" alt="Network Problem" style="max-width: 202px; max-height: 202px;">
</div>
</div>
</div>

<div class="text-center font-['Source-Sans-Pro',Arial,sans-serif]">
    <p  class="font-[600] text-[#382d8b] leading-[36px] text-[20px] min-[1040px]:text-[26px]">{{m.name}}</p>
<p class="min-[1040px]:text-[1.4rem] xl:text-[1rem]">{{m.country}}</p>
</div>

<div class="w-[70px] mt-[15px] min-[1040px]:mt-[20px] mb-[20px] h-[3px] bg-[#2a73cc] mx-auto"></div>

<div class="min-[1040px]:text-[20px] leading-[25px] text-black font-['Source-Sans-Pro',Arial,sans-serif] text-center min-[1040px]:mx-2 xl:w-[260px] xl:mx-auto xl:text-[18px] min-[1600px]:text-[20px] min-[1600px]:leading-[30px]">
   {{m.desc}}
</div>


        </div>
        </div>
    </section>
    </section>
</template>