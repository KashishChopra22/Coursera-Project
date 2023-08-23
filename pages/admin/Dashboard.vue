
<script setup>
definePageMeta({
    layout: "custom"
})



import { useFreeCoursesStore } from '../../store/FreeCourses.js';
import { getCoursesData } from '../../composable/editData.js';
import axios from 'axios';
const { allCourses, getAllcourses }= getCoursesData();
const todayReg= ref(0);

const usersUrl= 'http://localhost:3000/user/user/all-user'
const todayCreatedUrl= 'http://localhost:3000/user/admin/today-users'
const getAllPayment = 'http://localhost:3000/payment/total/today'

const paymentData= ref(0);
const store= useFreeCoursesStore();
async function getUsers()
{
     await getAllcourses(usersUrl);
    await getTodayUsers();
    await axios.get(getAllPayment).then((res)=>{paymentData.value= res.data
    });
   
}
onMounted(()=>getUsers());

async function getTodayUsers()
{
    await store.getEnrolledCourses(todayCreatedUrl);
    todayReg.value =store.allCoursesEnrolled.totalUser
}
// Charts

// import { DoughnutChart } from 'vue-chart-3';
// import { Chart, registerables } from "chart.js";

// Chart.register(...registerables);


//         const testData = {
//             labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
//             datasets: [
//                 {
//                     data: [30, 40, 60, 70, 5],
//                     backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
//                 },
//             ],
//         };

  import {Chart} from 'chart.js';

new Chart(document.getElementById('my-chart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: '2018 Sales',
                data: [300, 700, 450, 750, 450]
            }
        ]
    }
});


</script>
<template>

   <div class="w-[90%] mx-auto">

    <div class="grid grid-cols-4 h-[200px]">
        <div class="bg-green-400 mx-4 text-[1.5rem] text-center rounded-lg">
            <div class="flex justify-center mt-[50px] text-center" >
             <img src="https://img.icons8.com/?size=512&id=37913&format=png" class="mx-2" style="width:50px; height: 50px;">
            <p class="text-black font-bold mt-2">
               
                Total Users
            
            </p>
            </div>
            <p  class="counter" ref="counter">{{ allCourses.count }}</p>
        </div>
        <div class="bg-yellow-500 mx-4 text-[1.5rem] text-center">
        <p class="text-black font-bold mt-[70px]">Registered Today</p>
       <p>{{ todayReg }}</p>
        </div>
        <div class="bg-green-500 mx-4 text-[1.5rem] text-center">
            <p class="text-black font-bold mt-[70px]">Total Payment</p>
            <div class="flex justify-center text-center">
           <p>
            {{ paymentData }}
        </p>
         <i class="fa-solid fa-indian-rupee-sign ml-2 mt-2"></i>
            </div>
            </div>
        <div class="bg-yellow-500">
            f
    </div>
        </div>
    </div>


    <div class="bg-white w-[90%] mx-auto mt-6 rounded">

  <DoughnutChart :chartData="testData" />
   <canvas id="my-chart" width="500" height="300"></canvas>
      </div>
</template>