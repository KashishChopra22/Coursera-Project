
<script setup>
const props = defineProps(["title", 'svg']);
</script>

<template>
  <div>

    <button
      class="relative leading-[25px] text-center py-[12px] px-[16px] w-[100%] border border-black text-black text-[16px] font-bold mt-[20px] rounded rounded-md">
  
    
      <img class="absolute h-[20px] w-[20px] top-[15px]" svg-inline="" :src="svg" />
  
    
     {{title}}
    </button>

  </div>
</template>
