


<template>
  <Section1 />
  <Section2 />




  <Section3Launch />
  <Sec3Reuse />
  <Section4Headings :title="'Masters and Bachelors Degrees'" :heading="'Find a top degree that fits your life'"
    :desc="'Breakthrough pricing on 100% online degrees from top universities.'" />

  <Slider :slider1Img="s1img ? s1img : ''" :slider1Details="s1details" />

  <Section4Headings :title="'Courses and Professional Certificates'" :heading="'New on Coursera'"
    :desc="'Explore our newest programs, focused on delivering in-demand skills.'" />

  <Slider :slider1Img="s2details" />

  <Section4Headings :title="'100% Free'" :heading="'Start learning with free courses'"
    :desc="'Explore free online courses from the worlds top universities and companies.'" />

  <Slider :slider1Img="s3details" :slider3Bottom="s3bottom" />


  <Section6 />
  <Section7 />
  <!-- <Section8 /> -->

  <Section9 />
  <Footer />
</template>
 
<script setup>
import axios from 'axios';
import {useCourseraStore} from '../store/fetch.js'

const store= useCourseraStore();
axios.defaults.withCredentials = true

axios.defaults.headers.common["Authorization"] = store.loginToken;


const s1img = ref([])
const s1details = ref([])
const s2details = ref([])
const s3details = ref([])
const s3bottom = ref([])

const { data: data } = await useFetch('/api/slider1data')
console.log("data slider", data.value.sliderData[1]);
s1img.value = data.value.sliderData[1]
s1details.value = data.value.sliderData[0]

const { data: data2 } = await useFetch('/api/slider2data')
s2details.value = data2.value.slider2Data[0]
console.log("data22 slider", data2.value.slider2Data[0]);


const { data: data3 } = await useFetch('/api/slider3data')
s3details.value = data3.value.slider3Data[1]
s3bottom.value = data3.value.slider3Data[0]

console.log("data33 slider", data3.value.slider3Data[1]);
</script>