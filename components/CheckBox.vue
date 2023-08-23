
<script setup>

const props = defineProps(["m"])
function handleChange(id)
{
    console.log("id", id);
}

</script>
<template>
    <div class="py-2">

      
            <span class="text-[1.2rem] text-black">
            <input type="checkbox" :value="m.id" class="mx-2 h-[20px] w-[30px]" @change="handleChange(m.id)"/>
                {{ m.name }}
            </span>
 
            
      

    </div>
</template>