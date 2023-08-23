

<script setup>
import {useSection3Store} from '../store/section3.js'

const store= useSection3Store();

const ProjectStatus=()=>{ store.handleProject()}
const dataStatus=()=>{ store.dataAnalyst() }
const UxStatus=()=> { store.handleUx() }
const ItStatus=()=> { store.handleIt() }
const DigitalStatus=()=> { store.handleDigital() }
const DataScienceStatus=()=> { store.handleDatascientist() }
const FrontStatus=()=> { store.handleFrontend() }
const BookStatus=()=> { store.handleBook() }

</script>


<template>

    <section class="mb-9 mx-2 ">
    <div class="font-['Source-Sans-Pro',Arial,sans-serif] min-[769px]:bg-white min-[769px]:flex min-[1024px]:mx-4 xl:mx-[3%] min-[1600px]:mx-[10%] py-8 ">


        <p class=" text-[1.8rem] tracking-[-0.1px] mr-[10px]  leading-[33px]  xl:text-[2.8rem] min-[1600px]:text-[2rem] font-semibold min-[769px]:text-[1.6rem]">Launch a new career in as little as 6 months</p>

        <a class="pt-3 text-[18px] flex text-[#323232] min-[769px]:pt-1 min-[769px]:pl-6 xl:text-[23px] xl:pt-0  min-[1600px]:text-[18px]  min-[1600px]:pt-1.5 cursor-pointer hover:underline">
            View all roles
        <span class="mt-1 mx-2 xl:mt-2  min-[1600px]:mt-1">
            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-2" class="css-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor" ></path></svg>
        </span>
    </a>
    </div>


<div class="w-[100%] text-[#323232] overflow-x-auto flex whitespace-nowrap text-[17px] font-bold pt-5 min-[1024px]:ml-2 xl:pl-[2%] xl:w-[100%] min-[1600px]:px-[10%] cursor-pointer font-['Source-Sans-Pro',Arial,sans-serif] ">

  <div class=" border-b-4  min-[1600px]:w-[100%] pb-2">  

<a class="pr-5 hover:text-blue-700 text-black" @click="ProjectStatus" :class="[store.project ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Project Manager</a>

<a class="px-5 hover:text-blue-700 h-[10%] " @click="dataStatus" :class="[store.dataa ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Data Analyst</a>

<a class="px-5 hover:text-blue-700" @click="UxStatus" :class="[store.ux ? 'border-b-4 border-blue-700': null]">
    
    UX Designer


</a>
<a class="px-5 hover:text-blue-700" @click="ItStatus" :class="[store.it ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">IT Support Specialist</a>

<a class="px-5 hover:text-blue-700" @click="DigitalStatus" :class="[store.digital ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Digital Marketer</a>

<a class="px-5 hover:text-blue-700" @click="DataScienceStatus" :class="[store.datascientist ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Data Scientist</a>

<a class="px-5 hover:text-blue-700" @click="FrontStatus" :class="[store.frontend ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Front-End Developer</a>

<a class="px-5 hover:text-blue-700" @click="BookStatus" :class="[store.book ? 'border-b-4 border-blue-700 border-spacing-y-[20px] || text-blue-700': null]">Book Keeper</a>

</div>
</div>


    </section>
</template>