
<script setup>

import { stdEditData } from '../../composable/editData.js';
import VideoNames from '../../components/VideoFiles/VideoNames'
import VideoSeen from '../../components/VideoFiles/VideoSeen'

const { handleSearch, search } = stdEditData();
const route = useRoute();
const grid2 = ref(false);
const status = ref(true);
const btnShow = ref("Expand");
const courseLen = ref(0);
const sixCourse = ref([]);

const courseSlug = route.params.CourseVideo;
console.log("gfdsg", courseSlug);

let url = ref(`http://localhost:3000/course/category/${route.params.CourseVideo}`)
console.log("url", url.value);

async function getVideos() {
    await handleSearch(url.value)
    console.log("store.freeCourse", search.value);
}
await getVideos();
const partiId = ref();
const vidStatus = ref(false);

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
    vidStatus.value = true;
    let a = partiId.value.length;
    let b = partiId.value.slice(0, 6).length
    courseLen.value = a - b;
    console.log("r", courseLen.value);

    watchEffect(() => {
        if (status.value == true) {
            sixCourse.value = partiId.value.slice(0, 6)
            btnShow.value = "Show More"
            courseLen.value = a - b;
        }
        else {
            sixCourse.value = partiId.value.slice(0, 13)
            btnShow.value = "Show Less"
            courseLen.value = ""
        }
    })

}








const vid = ref({});
function dummy(e) {
    console.log("e", e);
    grid2.value = true;
    vid.value = e;

}

</script>

<template>
    <div class="max-w-[800px] border relative border-2 p-5 min-[1000px]:max-w-[1800px] mx-auto px-4 gap-4">
        <div class="grid grid-cols-5">

            <div class="col-span-1 shadow-xl border-2 bg-white px-8 rounded-lg h-[80vh]">
                <p class="text-[1.8rem] bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600"><i
                        class="fa-solid fa-list px-4 my-3 py-7"></i>Topic Names:-</p>
                <div v-for="(m, index) in search.Topic ">


                    <VideoNames :m="m" :index="index" :dummy="dummy"></VideoNames>
                </div>





            </div>

          <VideoSeen :grid2="grid2" :vid="vid" :courseSlug="courseSlug"></VideoSeen>


        </div>
    </div>
</template>
