
<script setup>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { stdEditData } from '../../composable/editData.js';

const props= defineProps(['m'])
const videoLen= ref("");
const { handleSearch, search } = stdEditData();
console.log("m", props.m.Course.slug);

function getStr(str) {
    const a = str.split(' ').slice(0, 3).join(' ');
    return a
}

// get the number of videos in topics
let url = ref(`http://localhost:3000/course/category/${props.m.Course.slug}`)

async function getVideos() {
    await handleSearch(url.value)
    
    const Files= search.value.Topic.map((e)=> e.Files)
    videoLen.value= Files.length

}
await getVideos();

function getprogress(p)
{
    let a= p + "%";
    return p;
}
</script>

<template>

       <div class="px-8 my-4 min-[1024px]:px-1 min-[1024px]:mt-4">
                    <p v-if="m.progress == 100" class="bg-white min-[1024px]:mx-2 min-[1024px]:px-4 min-[1024px]:mt-[10px] min-[1024px]:absolute min-[1024px]:rounded-lg">Free</p>

                    <div class="flex justify-between mt-2 min-[1024px]:grid grid-cols-1">

                        <div>
                        <div class="flex">


                        <div class="w-[34px] h-[34px] min-[1024px]:hidden">
                        <img v-if="m.Course.Category.name == 'Toys'" src="https://cdn.pixabay.com/photo/2015/10/25/14/43/bucket-1005891_640.jpg" alt="Network error">
                        <img v-if="m.Course.Category.name == 'Clothing'" src="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg" alt="Network error">
           
                        </div>
                        <p class="mx-2 min-[1024px]:mx-0 min-[1024px]:hidden">{{ m.status }}</p>
                        </div>
            <div class="min-[1024px]:mt-[160px]">
      <div v-if="m.progress < 100">     
<p  class="my-2 min-[1024px]:text-[1.2rem]  font-['Source-Sans-Pro',Arial,sans-serif] min-[1024px]: text-center font-bold"><strong>Title:</strong>{{ getStr(m.Course.title) }}</p>

<p class="text-center  font-['Source-Sans-Pro',Arial,sans-serif] text-blue-700 font-bold">{{ videoLen }} videos</p>
</div>
<div v-if="m.progress == 100"  class="min-[1024px]:mt-[200px]">

    <p  class="my-2 min-[1024px]:text-[1.2rem] font-['Playfair-Display', serif] "><strong>Title:</strong>{{ getStr(m.Course.title) }}</p>

<p class="my-2 min-[1024px]:text-[1.2rem] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black"><strong>Level: {{ m.Course.level }}</strong></p>

<p class="text-gray-700 font-bold"> {{ m.Course.description }}</p>
 </div>           
             </div>

                        </div>
<div class=" w-[74px] h-[44px] min-[1024px]:order-first min-[1024px]:w-[300px] min-[1024px]:mx-0 ">
                        <div v-if="m.progress == 100" >

            <img :src="m.Course.CourseThumbnail.filepath" alt="Network error" class="min-[1024px]:rounded-lg">
                        </div>

                  <div v-else class="mx-auto">
                        
           <circle-progress v-if="m.progress >= 50 " :show-percent="true" :percent="getprogress(m.progress)" empty-color="#D3D3D3"  fill-color="#009E60" transition="300" class="mx-auto text-green-700 font-bold text-[1.5rem]"/>
                            
    
            <circle-progress v-else :show-percent="true" :percent="getprogress(m.progress)" empty-color="#D3D3D3"  fill-color="#0000FF" transition="300" class="mx-auto text-blue-700 font-bold text-[1.5rem]"/>
                    </div>
                    
                    </div>

                        <div v-if="m.progress == 100" class="flex mt-3">
                        <img src="https://img.icons8.com/?size=512&id=tpmC7Hkigo3v&format=png" class="w-[30px]">

                    <p class="text-[1.2rem] text-blue-700 font-bold mx-3"> Completed</p>
                        </div>

                  

                    </div>
                </div>
                
</template>