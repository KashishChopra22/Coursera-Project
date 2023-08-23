<template>
   <div>
      <div class="flex w-[100%] max-w-[1320px] mx-auto mt-[80px] mb-7 min-[1024px]:mx-auto">
         
         <img :src="icon" class="w-[50px] h-[40px] mt-2 mr-5">
         <p class="text-[2rem]">{{ freeCourseHeading }}</p>

      </div>

   </div>
</template>


<script setup>
const props= defineProps(["freeCourseHeading", "icon"])
</script>