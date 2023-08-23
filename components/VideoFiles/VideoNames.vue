<template>

     <button type="button"
                            class="text-[1.3rem] my-4 cursor-pointer hover:text-blue-600 focus:text-blue-800 text-black py-2 relative flex w-full"
                            @click="handlevideo(m.id, index)" data-te-collapse-init data-te-collapse-collapsed :data-te-target=getId(m.id)>

                            {{ m.topic_name }}
                            <span
                                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>

    <div v-for="k in partiId" :key="k" :id="'abc' + m.id" class="!visible" data-te-collapse-item data-te-collapse-show >
    
       <p @click="SeeVideo(k)" class="cursor-pointer hover:text-blue-800"> {{ k.filename }} </p>
       <p> {{ k.id }} </p>
    </div>

   
    

</template>


<script setup>

import { stdEditData } from '../../composable/editData.js';


const props= defineProps(["m", "index", "dummy"])
const { handleSearch, search } = stdEditData();
const route = useRoute();
const grid2 = ref(false);
const status = ref(true);
const btnShow = ref("Expand");
const courseLen = ref(0);
const sixCourse = ref([]);

let a = route.params.CourseVideo;
console.log("gfdsg", a);

let url = ref(`http://localhost:3000/course/category/${route.params.CourseVideo}`)
console.log("url", url.value);
const getId = (m) => {
    return "#abc" + m;
}
async function getVideos() {
    await handleSearch(url.value)
    console.log("store.freeCourse", search.value);
}
await getVideos();
const partiId = ref();

const grid2Status = ref(false);

function handlevideo(id, index) {
    grid2.value = true;
    let d = search.value.Topic.map((e) =>
        e.Files.filter((f) => {
            console.log("topic id", f.topicId);
            return f.topicId === id


        })
    )
    console.log("d", d);
    partiId.value = d[index];
    console.log("parti", partiId.value);
  
}

function SeeVideo(k)
{
     
    grid2Status.value = true;
    props.dummy(k);
}

</script>