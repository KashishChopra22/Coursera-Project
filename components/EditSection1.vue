<template>
    <div class="col-span-1">

                <div class="bg-gradient-to-r from-zinc-100 to-zinc-300 h-[80vh] w-[100%] px-8">
 
    <div class="bg-gradient-to-r from-zinc-300 to-gray-400 rounded mx-auto text-[1.4rem] cursor-pointer" @click="profileToggle()"><i class="fa-solid fa-user px-6"></i>Profile</div>

    <div v-if="profileStatus">
 
      <div class="bg-stone-400 rounded mt-4 w-[80%] text-center  text-[1.3rem] cursor-pointer mx-9">
        <NuxtLink to="/EditProfile">
        <i class="fa-solid fa-pencil pr-4"></i>Edit Profile 
    </NuxtLink>
    
    </div>

    </div>

      <div class="bg-gradient-to-r from-zinc-300 to-gray-400 mt-8 rounded mx-auto text-[1.4rem] cursor-pointer" @click="imageToggle()">   <i class="fa-solid fa-image px-6"></i>Image</div>

      <div v-if="imageStatus">


        <div class="bg-stone-400 rounded mt-4 w-[80%] text-center  text-[1.3rem] cursor-pointer mx-9">
            <NuxtLink to="/EditProfile/ImageUpload">
            <i class="fa-solid fa-upload pr-4"></i>Upload Image 
        
        </NuxtLink>
        
        </div>
      </div>

    </div>
              </div>
</template>

<script setup>
const profileStatus = ref(false);
const imageStatus = ref(false);

function profileToggle() {
    profileStatus.value = !profileStatus.value;
}
function imageToggle() {
    imageStatus.value = !imageStatus.value;
}
</script>