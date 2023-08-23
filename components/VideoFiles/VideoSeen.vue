<script setup>
import axios from 'axios';
import ExploreNoCourse from '../../components/Courses/ExploreNoCourse.vue'

const props = defineProps(["grid2", "vid", "courseSlug"])
const uId = ref("")
let Id = localStorage.getItem("UserId")
uId.value = Number(Id);
const progressPercent= ref({})

function getCapital(title) {
    let CapitalTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return CapitalTitle;
}

const progressData= async(dataa)=>{
try {
    const result= await axios.post('http://localhost:3000/progress',{
            userId: dataa.userId,
            fileId: dataa.fileId , 
            courseSlug: dataa.courseSlug
    })
    console.log("progress data", result);
        progressPercent.value = result
}
catch (e) {
    console.log(e, "error");
}
}

onMounted(()=> {
    
})

async function postVideoProgress() {

    const progressObj = reactive({ userId: uId, fileId: props.vid.id, courseSlug: props.courseSlug })

    console.log("objefdsfsct");
       await progressData(progressObj)
}

function getVideo(v)
{
    console.log("video", v);
    return v;
}
</script>
<template>
    <div class="col-span-4 ">
        <div class="grid grid-cols-3">
            <div v-if="grid2">

                <div class="bg-gray-100 mx-5 mt-8 shadow-lg rounded-lg w-[250%] mx-[180px] h-[65vh]">
                    <video :key="vid.filepath" controls class="rounded-lg w-[100%]" @ended="postVideoProgress()" >

                        
                        <source :src="getVideo(vid.filepath)" type="video/mp4">
                    </video>

                    <p class="text-black text-[1.5rem] px-4"> {{ vid.id }}</p>
                    <p class="text-black text-[1.5rem] px-4"> {{ getCapital(vid.filename) }}</p>
                    <p class="text-gray text-[1.1rem] px-4">Created at {{ vid.created_at }}</p>
                </div>
            </div>

            <div v-else>

                <ExploreNoCourse title="You will Find your Topic wise videos here..."></ExploreNoCourse>

            </div>

        </div>


    </div>
</template>