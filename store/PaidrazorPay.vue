<script setup>
import axios from 'axios';
import LoginSection2 from '../../components/After_Login/LoginSection2.vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { getCoursesData } from '../../composable/editData.js'
import { RazorPayPayment } from '../../composable/editData.js';



const icon = "https://img.icons8.com/?size=1x&id=31340&format=png"

let userId = localStorage.getItem("UserId")
console.log("id", userId);

const { confirmByRazorpay } = RazorPayPayment();

const freeCourseHeading = "Explore Paid Courses"
const { getAllcourses, allCourses } = getCoursesData();

const paidUrl = ref('http://localhost:3000/course/all')
const paidCourses = ref([])

async function getData() {
    await getAllcourses(paidUrl.value);
    console.log("paid", allCourses.value);

    paidCourses.value = allCourses.value.courses.filter((e) => e.is_free == false);
    console.log("a", paidCourses.value);
}


getData();

const settings = reactive({
    settings: {
        itemsToShow: 2,
        snapAlign: "center",
    },
    breakpoints: {
        200: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        // 700px and up
        700: {
            itemsToShow: 2,
            snapAlign: "center",
        },
        1000: {
            itemsToShow: 3,
            snapAlign: "center",
        },
        // 1024 and up
        1440: {
            itemsToShow: 4,
        },
    },
});
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
        const test = await confirmByRazorpay(data);

    }
    catch (error) {

        console.log("error: ", error);

    }

};

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
            // const verify_result = await confirmByRazorpay(response, allData)

            // paymentStatus.value.status = verify_result.status

            // if (verify_result.status) {

            //   paymentStatus.value.message = verify_result.data

            //   openPopup();

            //   loader.value = false

            // }

            // else {

            //   paymentStatus.value.message = verify_result.data.message

            //   openPopup();

            //   loader.value = false

            // }

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




definePageMeta({
    middleware: 'auth'

})
</script>

<template>
    <LoginSection2 :freeCourseHeading="freeCourseHeading" :icon="icon"></LoginSection2>


    <div class="xl:h-[100%] min-[1600px]:mx-[10%] relative bg-white max-w-[100%] mx-auto pt-5">


        <carousel items-to-show=4 :snapAlign="'start'" :breakpoints="settings.breakpoints" pagination-size="3"
            :navigationEnabled="true" paginationColor="#7e7e7e">


            <template v-for="m in paidCourses" :key="m.id">


                <slide>

                    <div
                        class="relative xl:min-h-[215px] h-[100%] mx-2 w-[300px] min-[700px]:mx-auto xl:mx-[20%] bg-white mb-6">
                        <div class="w-[300px] rounded-lg">
                            <img :src="m.CourseThumbnail.filepath" alt="Network Error"
                                class="min-h-[100%] min-w-[100%] w-[300px] max-h-none max-w-none object-cover rounded-lg " />
                        </div>

                        <div class="flex w-[100%] mx-4 mt-3 h-[80px]">

                            <p class="text-black text-[1.3rem] font-['Source-Sans-Pro',Arial,sans-serif] pr-4">
                                {{ m.title }}
                            </p>
                        </div>

                        <div class="flex w-[100%] mt-3">

                            <p class="text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif]">
                                {{ m.description }}
                            </p>
                        </div>


                        <p class="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent
 text-[1.3rem] font-['Source-Sans-Pro',Arial,sans-serif] px-2 mt-2">
                            Price: {{ m.price }} <i class="fa-solid fa-indian-rupee-sign"></i>
                        </p>
                        <div>

                            <button type="button"
                                class="mt-3 bg-green-700 px-4 py-2 rounded-lg text-white w-full hover:bg-green-800 text-[1.1rem]"
                                @click="makePayment(m.price, m.id)">Explore</button>

                        </div>
                    </div>



                </slide>
            </template>

            <template #addons>
                <navigation />
                <pagination />
            </template>

        </carousel>

    </div>

    <div class="flex text-[#0056d2] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] justify-center mt-8 font-bold">
        <p>Explore Degrees</p>
        <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20"
            id="cds-react-aria-20" class="css-0 mx-2">
            <path d="M9 12.46H2V7.53h7V2l9 8-9 8v-5.54z" fill="currentColor"></path>
        </svg>
    </div>
</template>