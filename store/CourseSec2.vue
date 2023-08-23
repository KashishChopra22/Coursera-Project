
<script setup>
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';



import Accordion from './Accordion.vue';
import { Enroll } from '../../composable/editData.js';
import { getCoursesData } from '../../composable/editData.js';
import { progress } from '../../composable/editData.js';
import { Otp } from '../../composable/editData.js';

// import { useFreeCoursesStore } from '../../store/FreeCourses.js'
const toast = useToast();
const router = useRouter();
const props = defineProps(['slug'])
const { getUserOtp, verifyUserOtp, otpResponse, invalidOtp } = Otp();

// const store = useFreeCoursesStore();

const { createEnroll, enrollUser, errorEnrolled, enrollState } = Enroll();
const { allCourses, error, getAllcourses } = getCoursesData();
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
// Create enroll
const userData = reactive({ email: emailToken, courseSlug: props.slug })

async function handleEnroll() {
    await createEnroll(userData);
    enrolledMsg.value = false
    await dummy();
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


</script>

<template>
    <div class="max-w-[800px] border top-[-250px] relative border-2 p-5  min-[1000px]:max-w-[1200px] mx-auto px-4">

        <div class="grid grid-cols-1 min-[600px]:grid-cols-2">
            <div class="mx-auto w-[100%]">
                <img :src="allCourses.CourseThumbnail?.filepath"
                    class="rounded max-w-[100%] min-[600px]:w-[80%] min-[1000px]:w-[60%] min-[600px]: mt-[30px]" />
            </div>
            <div class=" min-[1000px]:ml-[-120px] mt-6 md:mt-9 xl:mt-[70px]">
                <p class="text-[1.8rem] text-black">Course Id: {{ allCourses.id }}</p>
                <p class="text-[1.8rem] text-black">Title: {{ getStr(allCourses.title) }}</p>
                <p class="text-[1.5rem] leading-[1] py-5"> {{ allCourses.description }}</p>

                <div class="xl:mt-4 mb-3 flex">


                    <div v-if="enrolledMsg == false">

                        <button type="button" class="mx-4 bg-green-700 text-white text-[1.2rem] py-2  px-4 rounded-lg"
                            @click="handleVideos(allCourses.slug)">See Videos</button>
                    </div>


                    <div v-else>
                        <!-- <button type="button" class="bg-blue-700 text-white text-[1.2rem] px-4 py-2 rounded-lg"
                     @click="handleEnroll()">Enroll</button> -->


                        <!-- Button trigger modal-->
                        <button type="button" class="bg-blue-700 text-white text-[1.2rem] px-4 py-2 rounded-lg"
                            data-te-toggle="modal" data-te-target="#otpModal" data-te-ripple-init
                            data-te-ripple-color="light" @click="handleGenerateOtp()">
                            Enroll
                        </button>



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
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
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

                                            <button v-else type="button"
                                                class="bg-blue-600 px-4 font-bold py-2 rounded-lg text-white"
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


    </div>
    <div class="max-w-[800px] border top-[-200px] relative border-2 p-5  min-[1000px]:max-w-[1200px] mx-auto px-4">
        <p class="text-black text-[1.9rem] bg-gray-200"><i class="fa-solid fa-list-check pr-7"></i>Topics</p>



        <Accordion :topicNames="allCourses.Topic"></Accordion>



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
}</style>
           