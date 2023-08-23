
<script setup>
import axios from 'axios';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';
import { RazorPayPayment } from '../../composable/editData.js';


import Accordion from './Accordion.vue';
import { Enroll } from '../../composable/editData.js';
import { getCoursesData } from '../../composable/editData.js';
import { progress } from '../../composable/editData.js';
import { Otp } from '../../composable/editData.js';

const { confirmByRazorpay, paymentSuccess } = RazorPayPayment();
let userId = localStorage.getItem("UserId")
console.log("id", userId);
const toast = useToast();
const router = useRouter();
const props = defineProps(['slug'])
const { getUserOtp, verifyUserOtp, otpResponse, invalidOtp } = Otp();



const { createEnroll, errorEnrolled } = Enroll();
const { allCourses, getAllcourses } = getCoursesData();
const { getProgressCourse, progressCourse } = progress();


const emailToken = ref("")
const enrolledMsg = ref(false);
const courseSingleData = ref({});

emailToken.value = localStorage.getItem('coursera project user');


let url = ref(`http://localhost:3000/course/category/${props.slug}`)
let progressUrl = ref('http://localhost:3000/user/enroll/in-progress')

// Get single data
async function getData() {
   await getAllcourses(url.value);
   console.log("allllllll", allCourses.value);

}
onMounted(() => getData());


// Get progress courses and check if user is enrolled or not
const dataa = reactive({ email: emailToken })
async function getProgress() {
   await getProgressCourse(progressUrl.value, dataa);
   await getId();
   console.log("id", courseSingleData.value.id);
   let a = progressCourse.value.find((e) => e.courseId == courseSingleData.value.id)
   console.log("a", a);

   if (typeof a != "undefined") {
      console.log("status when enrolled already");
      enrolledMsg.value = false;
   }
   else {
      console.log("failed to enroll");
      enrolledMsg.value = true;
   }
}
async function getId() {
   await getAllcourses(url.value);
   courseSingleData.value = allCourses.value
}
await getProgress();


function getStr(str) {
   let a = str?.split(' ').slice(0, 2).join(' ');
   return a
}





// For otp
import OtpInput from 'vue3-otp-input';


const otpInput = ref(null)
const fullOtp = ref("");

const handleOnComplete = (value) => {
   console.log('OTP completed: ', value);
   fullOtp.value = value;
   return value;
};

const clearInput = () => {
   otpInput.value.clearInput()
}
const handleOnChange = (value) => {
   console.log('OTP changed: ', value);
   return value;
};

const otpurl = ref('http://localhost:3000/otp/generate')
const otpData = reactive({ email: emailToken });

async function handleGenerateOtp() {
   clearInput();
   wrongOtpMsg.value = "";
   getUserOtp(otpurl.value, otpData);
   clearInterval(intervalId)
   totalSeconds.value = initialtotalSeconds;
   await updateDisplayTime();
   await startTimer();
}


const wrongOtp = ref(false);
const inValidOtpStatus = ref(false);
const wrongOtpMsg = ref("");
const verifyotpurl = ref('http://localhost:3000/otp/verify')

async function handleConfirmOtp() {
   const verifyData = reactive({ email: emailToken, otp: fullOtp })
   await verifyUserOtp(verifyotpurl.value, verifyData);
   if (otpResponse.value.includes('OTP verified successfully')) {
      console.log("verified");
      wrongOtp.value = true;
      await handleEnroll();
      await handleNotify();

   }
   else if (invalidOtp.value == 400) {
      wrongOtp.value = false;
      inValidOtpStatus.value = true;
      toast.info('Please enter valid otp', {
         position: 'top',
         //   className: ['toasting']
      });
      setTimeout(toast.clear, 2000);
   }

   else if (invalidOtp.value == 401) {
      wrongOtp.value = false;
      inValidOtpStatus.value = true;
      wrongOtpMsg.value = "Otp has been expired ";
   }
}

function handleNotify() {
   toast.success('You are successfully enrolled!', {
      position: 'top'
   });
   setTimeout(toast.clear, 2000);
}

const timeUp = ref(false);
// Timer
const displayTime = ref('02:00');
const initialtotalSeconds = 2 * 60;
let totalSeconds = ref(initialtotalSeconds);
let intervalId = null;

const startTimer = async () => {
   intervalId = setInterval(() => {

      if (totalSeconds.value > 0) {
         totalSeconds.value--;
         updateDisplayTime();
      }
      else {
         clearInterval(intervalId);
         displayTime.value = '00:00'
         timeUp.value = true;
         wrongOtp.value = true;
         //   TimerFinishedNotify();
      }
   }, 1000);
};

const updateDisplayTime = async () => {
   const minutes = Math.floor(totalSeconds.value / 60).toString().padStart(2, '0');
   const seconds = (totalSeconds.value % 60).toString().padStart(2, '0');
   displayTime.value = `${minutes} : ${seconds}`;
}
async function handleClose() {
   clearInterval(intervalId)
   totalSeconds.value = initialtotalSeconds;
   await updateDisplayTime();
   await startTimer();

}

function TimerFinishedNotify() {
   clearInterval(intervalId)
   toast.warning('The Timer is finished Resend Otp!', {
      position: 'top'
   });
   setTimeout(toast.clear, 2000);
}


// Create enroll
import { ref } from 'vue';
import { Modal } from 'usemodal-vue3';

let isVisible = ref(false);
const moneyModal = ref(false);
const userData = reactive({ email: emailToken, courseSlug: props.slug })

async function handleEnroll(price) {

   if (price == 0) {
      await createEnroll(userData);
      
      enrolledMsg.value = false
      await dummy();
       toast.success('you are suucessfully enrolled in this course', {
         position: 'top',
      
      });
      setTimeout(toast.clear, 2000);
   }
   else {
      moneyModal.value = true;
      isVisible.value = true
   }

}

async function dummy() {
   console.log("errorEnrolled.value", errorEnrolled.value);
   if (errorEnrolled.value?.length > 0) {
      enrolledMsg.value = false
   }
}

function handleVideos(CourseVideo) {
   router.push({ path: `/courses-home/Learn/${CourseVideo}` })
}


// Payment Gateway
const loader = ref(false);
const paymentStatus = ref({ status: false, message: '', order_id: '', razorpay_id: '' });

function loadScript(src) {

   return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
         resolve(true);

      };
      script.onerror = () => {
         resolve(false);

      };

      document.body.appendChild(script);

   });

}

const razoryPayorder = async (response, cid, uid) => {

   const courseid = Number(cid);
   const userId = Number(uid);

   try {
      const data = { res: response, user: { courseid, userId } };
     await confirmByRazorpay(data);

  await handleCheck()

   }
   catch (error) {

      console.log("error: ", error);

   }

};

async function handleCheck()
{
      if (paymentSuccess.value == 200) {
      await createEnroll(userData);
      await dummy();

      toast.success('you are suucessfully enrolled in this course', {
         position: 'top',

      });
      setTimeout(toast.clear, 2000);
   }
}
async function makePayment(money, courseId) {
   console.log("amount", money);
   loader.value = true
   paymentStatus.value.status = false
   paymentStatus.value.message = ''

   const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");

   if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
   }


   const result = await axios.post('http://localhost:3000/process', {
      amount: money * 100,
      currency: "INR"
   });

   if (!result) {
      alert("Server error. Are you online?");
      return;
   }

   console.log("result", result.data);
   const { amount, id, currency } = result.data;

   // paymentStatus.value.razorpay_id = 'rzp_test_OjkvsjTaRZRddi'
   paymentStatus.value.order_id = id

   const options = {
      order_id: id,

      key: "rzp_test_OjkvsjTaRZRddi",

      amount: Number(amount) * 100,

      currency: currency,

      name: "Coursera",

      description: "Test Transaction",

      image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=",


      handler: async function (response) {
         console.log("response", userId, courseId, response);

         loader.value = true
         razoryPayorder(response, courseId, userId);
         console.log("123", paymentSuccess.value);
      
      },

      prefill: {

         name: "Coursera",

         email: "coursera@gmail.com",

         contact: "9784626539",

      },

      notes: {

         address: "Coursera Corporate Office",

      },

      theme: {

         color: "#3399cc",

      },

   };

   const paymentObject = new window.Razorpay(options);
   paymentObject.open();

}



</script>

<template>
   <div class="max-w-[800px] border top-[-250px] relative border-2 p-5  min-[1000px]:max-w-[1200px] mx-auto px-4">

      <div class="grid grid-cols-1 min-[600px]:grid-cols-2">
         <div class="mx-auto w-[100%]">
            <img :src="allCourses.CourseThumbnail?.filepath"
               class="rounded max-w-[100%] min-[600px]:w-[80%] min-[1000px]:w-[60%] min-[600px]: mt-[30px]" />
         </div>
         <div class=" min-[1000px]:ml-[-120px] mt-6 md:mt-9 xl:mt-[40px]">
            <p class="text-[1.1rem] text-black">Course Id: {{ allCourses.id }}</p>
            <p class="text-[1.8rem] text-black">Title: {{ getStr(allCourses.title) }}</p>
            <p class="text-[1.5rem] leading-[1] py-5"> {{ allCourses.description }}</p>
       <p v-if="allCourses.price > 0" class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
 text-[1.3rem] font-['Source-Sans-Pro',Arial,sans-serif] px-2 mt-2">
                     Price: {{ allCourses.price }} <i class="fa-solid fa-indian-rupee-sign"></i>
                   </p>
            <div class="xl:mt-4 mb-3 flex">


               <div v-if="enrolledMsg == false">

                  <button type="button" class="mx-4 bg-green-700 text-white text-[1.2rem] py-2  px-4 rounded-lg"
                     @click="handleVideos(allCourses.slug)">See Videos</button>
               </div>


               <div v-else>

                  <!-- Button trigger modal-->
                  <!-- <button type="button" class="bg-blue-700 text-white text-[1.2rem] px-4 py-2 rounded-lg"
                     data-te-toggle="modal" data-te-target="#otpModal" data-te-ripple-init data-te-ripple-color="light"
                     @click="handleGenerateOtp()">
                     Enroll
                  </button> -->

                  <button type="button" class="bg-blue-700 text-white text-[1.2rem] px-4 py-2 rounded-lg"
                     @click="handleEnroll(allCourses.price)" data-te-toggle="modal" data-te-target="#PriceModal" data-te-ripple-init data-te-ripple-color="light">Enroll</button>


   <div v-if="moneyModal">
    <div data-te-modal-init
                        class="fixed left-0 top-[100px] z-[1255] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
                        id="PriceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div data-te-modal-dialog-ref
                           class=" relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                           <div
                              class="relative flex w-[120%] flex-col  shadow-lg  text-current shadow-lg bg-white">
                             <div class="bg-[#354b72] w-full ">

                                 <p class="text-white font-bold text-[1.8rem] py-[50px] text-center"> {{ allCourses.title }}</p>
                             </div>
                        

                              <div class="mx-8 mt-6">
                                 

                               <p class="text-[1.7rem]">  Purchase Course: <i class="fa fa-inr ml-3 mt-2 pt-1" aria-hidden="true"></i> {{ allCourses.price }} </p>
                              <div class="text-[1.2rem] flex mt-7">
                                 <img src="https://img.icons8.com/?size=1x&id=Nh0FdkapxUe6&format=png" class="w-[60px] mr-[10px]">
                                 <p>Commit to earning a Certificate—it's a trusted, shareable way to showcase your new skills.</p>
                              </div>
                              </div>

                              <div class="text-center my-[50px]">

                   <button class="bg-[#005bbe] px-9 py-2 text-white font-bold text-[1.2rem] hover:bg-[#0067d8]" @click="makePayment(allCourses.price, allCourses.id)" data-te-modal-dismiss>Continue</button>
                              </div>
                           

   </div>
</div>
   </div>
   </div>


                  <!-- Modal -->
                  <div data-te-modal-init
                     class="fixed left-0 top-[250px] z-[1255] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
                     id="otpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div data-te-modal-dialog-ref
                        class=" relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                        <div
                           class="relative flex w-full flex-col  shadow-lg  text-current shadow-lg bg-gradient-to-r from-slate-300 to-slate-200 px-[50px] py-[20px]">

                           <div class="border-b-2 ">
                              <div class="flex flex-shrink-0 items-center justify-between mt-[40px]">

                                 <h5 class="text-xl text-black my-4  font-bold px-4" id="exampleModalLabel">
                                    <i class="fa fa-key mr-2" aria-hidden="true"></i> OTP Verification
                                 </h5>




                                 <button type="button"
                                    class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none mr-[-40px] mt-[-80px]"
                                    data-te-modal-dismiss aria-label="Close" @click="handleClose()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                       stroke-width="1.5" stroke="currentColor"
                                       class="h-6 w-6 border-2 border-black rounded-full bg-black text-white mx-6">
                                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                 </button>



                              </div>
                              <p class="px-4 pb-2">An Otp will be send to your registered email</p>

                           </div>


                           <div>

                              <div class="flex justify-center mt-[40px]">
                                 <OtpInput ref="otpInput" input-classes="otp-input" separator="" :num-inputs="6"
                                    :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange"
                                    @on-complete="handleOnComplete" />
                              </div>

                           </div>




                           <div class="flex justify-between my-[30px] mx-[20px]">
                              <div class="mt-1 flex">
                                 <i class="fa-solid fa-clock fa-2x mt-3 text-blue-700"></i>
                                 <p class="text-black mt-4 ml-3">{{ displayTime }}</p>

                              </div>

                              <div class="flex mt-3">
                                 <p v-if="timeUp"
                                    class="mt-2 mr-4 underline text-blue-700 cursor-pointer hover:text-blue-800"
                                    @click="handleGenerateOtp()">
                                    Resend Otp</p>

                                 <p v-else class="mt-2 mr-4 underline text-gray-400 cursor-not-allowed">
                                    Resend Otp</p>

                                 <button v-if="wrongOtp == false" type="button"
                                    class="bg-blue-600 px-4 font-bold py-2 rounded-lg text-white"
                                    @click="handleConfirmOtp()">Verify</button>

                                 <button v-else type="button" class="bg-blue-600 px-4 font-bold py-2 rounded-lg text-white"
                                    @click="handleConfirmOtp()" data-te-modal-dismiss>Verify</button>

                              </div>
                           </div>

                           <!-- <p v-if="inValidOtpStatus == true" class="text-red-600 mx-4">{{ wrongOtpMsg }}</p> -->

                        </div>
                     </div>
                  </div>



               </div>








            </div>
         </div>
      </div>

 

      <div class="max-w-[800px] border top-[50px] relative border-2 p-5  min-[1000px]:max-w-[1200px] mx-auto px-4">
         <p class="text-black text-[1.9rem] bg-gray-200"><i class="fa-solid fa-list-check pr-7"></i>Topics</p>



         <Accordion :topicNames="allCourses.Topic"></Accordion>

      </div>
     

      <!-- <div v-if="moneyModal" style="overflow: hidden; ">

   <client-only>
       <Modal v-model:visible="isVisible" :maskClosable="false" offsetTop="400px" :mask="true" title="" class="text-center  font-bold text-[1.2rem] mt-4 py-[50px]">
           <div class=" mt-[-100px] mx-[-20px] py-[90px] bg-green-300">gfgdg</div>
           <div class="bg-red-300 mt-[-50px] mx-[-20px] py-[50px]">gfgdg</div>
       </Modal>
   </client-only>

            </div> -->
            </div>
</template>

<style>
.toasting {
   color: black;
   background-color: #ff000073;
   width: 20%;
   margin: auto;

}

.otp-input {
   width: 40px;
   height: 40px;
   padding: 5px;
   margin: 0 10px;
   font-size: 20px;
   border-radius: 4px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   text-align: center;
}
.customm{
   background-color: #354b72;
  
}
</style>
           