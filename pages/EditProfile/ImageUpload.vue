<template>
    <section class="vh-100 ">
        <div class="grid grid-cols-4 gap-[120px] w-[80%] container mx-auto mt-6 py-9">


            <EditSection1></EditSection1>

            <div class="col-span-3 bg-white px-auto w-[60%] shadow-lg rounded border border-2">

<div class="text-center">

      <input id="image" type="file" accept="image/*" ref="file" @change="onFileChanged()"/>

                  
</div>
<div class="mt-5 text-center ">
      <button type="button" class="bg-blue-700 px-4 py-1 rounded text-white text-[1.5rem]" @click="handleUpload()">Upload</button>
</div>
              
            </div>


        </div>

    </section>
</template>

<script setup>
import { useCourseraStore } from '../../store/fetch.js';
const emailToken = ref("")
const store= useCourseraStore();

emailToken.value = localStorage.getItem('coursera project user');

const file = ref(null)
const imgurl= ref(`http://192.168.102.93:3000/user/${emailToken.value}/profile`)
const imageLink = ref("")

async function onFileChanged(){
    // const target =event.target.value;
    console.log("target: " , file.value.files[0]);


imageLink.value= file.value.files[0];
    await store.imageUpdate(imgurl.value, imageLink.value)

}
async function handleUpload(){
  await store.imageUpdate(imgurl.value, imageLink.value)

}


</script>