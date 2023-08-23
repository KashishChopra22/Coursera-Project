
<script setup>

import { useFreeCoursesStore } from '../../../../store/FreeCourses.js';

const route = useRoute();
const store = useFreeCoursesStore();
const grid2 = ref(false);

let a = route.params.CourseVideo;
console.log("gfdsg", a);

let url = ref(`http://localhost:3000/course/category/${route.params.CourseVideo}`)
console.log("url", url.value);
await store.getFreeCourses(url.value)
console.log("store.freeCourse", store.freeCourse);


const partiId = ref();
function handlevideo(id, index) {
    console.log("id", id);

    grid2.value = true;

    let d = store.freeCourse.Topic.map((e) =>
        e.Files.filter((f) => {
            console.log("topic id", f.topicId);
            return f.topicId === id


        })
    )
    console.log("d", typeof d[index]);
    let r = d.find((e) => e !== [])
    console.log(r, "rrr");

    partiId.value = d[index];
    console.log("parti", partiId.value);




}
function getCapital(title) {
    let CapitalTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return CapitalTitle;
}

</script>

<template>
    <!-- {{ partiId.length }} -->




    <div class="max-w-[800px] border relative border-2 p-5 min-[1000px]:max-w-[1800px] mx-auto px-4 gap-4">
        <div class="grid grid-cols-5">

            <div class="col-span-1 shadow-xl border-2 bg-gradient-to-r from-stone-300 to-slate-300 px-8 rounded-lg">
                <p class="text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-500 to-indigo-600">Topic Names:-</p>
                <div v-for="(m, index) in store.freeCourse.Topic ">
                    <p class="text-[1.3rem] my-4 cursor-pointer hover:text-blue-400 focus:text-blue-800 text-black"
                        @click="handlevideo(m.id, index)">
                        <i class="fa-solid fa-check px-4"></i>
                        {{ m.topic_name }}

                    </p>



                </div>





            </div>

            <div class="col-span-4 bg-gradient-to-r from-stone-300 to-slate-500">


                <div class="grid grid-cols-3">
                    <div v-for="m in partiId">

                        <div class="bg-white mx-5 mt-5 shadow-lg rounded-lg">
                            <video width="450" height="340" controls class="rounded-lg">
                                <source :src="m.filepath" type="video/mp4">
                            </video>

                            <p class="text-black text-[1.5rem] px-4"> {{ getCapital(m.filename) }}</p>
                            <p class="text-gray text-[1.1rem] px-4">Created at {{ m.created_at }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
