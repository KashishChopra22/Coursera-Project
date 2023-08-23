<script setup>
import Welcome from '../components/After_Login/Welcome.vue'

import ProgressCourses from '../components/Courses/ProgressCourses.vue'
import Footer from '../components/Footer.vue';
import { progress } from '../composable/editData.js'

const { getProgressCourse, progressCourse } = progress();

const emailToken = ref("")
const completed=ref([])
const status = ref(false);

let completedUrl= ref('http://localhost:3000/user/enroll/completed')
emailToken.value = localStorage.getItem('coursera project user');

const dataa=reactive({email: emailToken })

async function Completed(){
await getProgressCourse(completedUrl.value, dataa)
  completed.value = progressCourse.value
  console.log("store.progressCourse", progressCourse.value);
}

Completed();
if (completed.value.length === 0) {
    status.value = true;
}
</script>
<template>
    <div>
        <Welcome />
     <div class="w-[100%] mb-[100px] max-w-[1200px] mx-auto mt-3">

      <div class="gap-3 grid grid-cols-1 min-[600px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[600px]:px-9 cursor-pointer min-[1024px]:mx-[-80px] ">

      <div v-for="m in completed" :key="m" class="relative w-[100%] mb-[20px]  max-w-[1200px] border border-2  shadow-lg  rounded-lg transition duration-150 ease-in-out hover:scale-105">

  <ProgressCourses :m="m"></ProgressCourses>
      </div>
    </div>
    </div>

    <!-- No completed course -->

   <div v-if="status" class="grid grid-cols-1 lg:grid-cols-3 w-[60%] mx-auto  mt-0">
            <div class="flex col-span-2">
                <p>
                    <svg class="_ufjrdd" viewBox="0 0 121 127" role="img"
                        aria-labelledby="Globed83641b4-f447-4ee5-a4c1-71febb4026a6 Globed83641b4-f447-4ee5-a4c1-71febb4026a6Desc"
                        xmlns="http://www.w3.org/2000/svg" style="fill: rgb(54, 59, 66); height: 140px; width: 140px;">
                        <title id="Globed83641b4-f447-4ee5-a4c1-71febb4026a6">Globe</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" role="presentation">
                            <g transform="translate(-94.000000, -73.000000)">
                                <g transform="translate(55.000000, 55.000000)">
                                    <g>
                                        <path
                                            d="M159.92634,35.1424688 C159.404687,29.6488209 156.014954,24.9539805 146.922892,21.7084053 C144.326803,20.782057 141.89039,20.2725655 139.55479,20.0846108 C130.920105,19.3905209 123.688675,23.0979277 115.074964,26.4045882 C110.428797,28.1881442 105.679788,29.6025035 100.892214,30.8557587 C91.8136835,33.2333859 82.5964517,35.0337236 73.6728614,37.6825426 C71.5882772,38.3021219 69.5192546,38.9673474 67.4725595,39.6963432 C53.254626,44.7657504 45.0150716,51.7972707 41.333727,59.8068268 C38.2998822,66.4094076 38.3614522,73.6752 40.7241163,81.0564503 C42.3174938,86.0352366 44.9575612,91.0663817 48.400745,95.9807263 C54.2099759,104.272886 62.3054158,112.232768 71.5131753,119.04814 C84.8637161,128.928517 100.55324,136.405087 115.010688,139.004233 C124.872713,140.776377 134.163017,140.280311 141.746276,136.729981 C149.19151,133.243421 155.016979,126.420664 157.396558,118.593693 C160.411458,108.672369 156.182072,97.2279401 153.46758,85.6015982 C151.692875,78.0008436 150.564994,70.3215508 152.531851,62.9396292 C155.090051,53.3364856 160.706453,43.3487061 159.92634,35.1424688"
                                            fill="#D7EEF7"></path>
                                        <g stroke-width="1" transform="translate(44.542600, 20.000000)" stroke="#333333"
                                            stroke-linejoin="round">
                                            <path
                                                d="M93.4372,42.134 C93.4372,65.404 74.5732,84.268 51.3032,84.268 C28.0332,84.268 9.1682,65.404 9.1682,42.134 C9.1682,18.863 28.0332,0 51.3032,0 C74.5732,0 93.4372,18.863 93.4372,42.134 Z"
                                                stroke-width="3"></path>
                                            <path
                                                d="M93.634,3.4733 C116.259,26.0983 116.259,62.7803 93.634,85.4053 C71.009,108.0303 34.327,108.0303 11.702,85.4053 L7.10542736e-15,97.1073"
                                            stroke-width="3"></path>
                                        <path d="M52.6677,102.3737 L52.6677,123.4407" stroke-width="3"></path>
                                        <path d="M28.9675,123.4406 L76.3685,123.4406" stroke-width="3"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </p>

            <p class="text-[1rem] py-4 md:text-[1.5rem] text-black md:py-9">You will find your Completed Courses here</p>
        </div>

        
        <div>
            <div class="mx-auto lg:flex rounded-lg shadow-lg">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/4c4140e07498bb391f60cc549ba26efd.jpg?auto=format%2Ccompress&dpr=1&w=144&h=192&q=40&fit=clip&crop=faces"
                    class="rounded-lg my-5 mx-auto" />

                <div>
                    <p class="px-3 py-8">I attribute a lot to Coursera – it’s given me not only career skills, but passion
                        and meaning in my life.</p>
                    <p class="float-right">— Leah B.</p>
                </div>
            </div>
        </div>
    </div>
   
</div>
<div class="mt-[140px]">

    <Footer></Footer>
</div>
</template>