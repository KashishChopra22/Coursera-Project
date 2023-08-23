<script setup>
import Welcome from '../components/After_Login/Welcome.vue'
import LoginSection2 from '../components/After_Login/LoginSection2.vue'
import FreeCourse from '../components/After_Login/FreeCourse.vue'
import axios from 'axios';

axios.defaults.withCredentials=true;

</script>

<template>
   <div>
    <Welcome />
<LoginSection2 />
<FreeCourse />
   </div>
</template>