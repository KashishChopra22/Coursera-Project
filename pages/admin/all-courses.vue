
<script setup>
definePageMeta({
    layout: "custom"
})
import axios from 'axios';
import { useFreeCoursesStore } from '../../store/FreeCourses.js';
import AdminTable from '../../components/Admin/AdminTable.vue'

const store = useFreeCoursesStore();
const adminView = ref([])

const pageSize = 4;
const active = ref(1);
const tabFilter = ref("all");
const countPage = ref(0);


const getAllCoursePage = async (allData)=>
{
    const test = { allData };
    const { data } = await axios.get(
        `http://localhost:3000/course?page=${allData.page}&pageSize=${allData.pageSize}&role=${allData.status}`,
        test
    );

    console.log("pagination data", data);
    adminView.value = data.courses;
    countPage.value = await data.count
}

async function getAll() {
    await getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value })
    // await store.getPaginationCourses({ page: active.value, pageSize: pageSize.value, status: tabFilter.value });

    // allCourses.value = store.allCoursesEnrolled.courses;
    // console.log("allCourses.value", store.allCoursesEnrolled.courses);
    
}
onMounted(() => getAll())




function getStr(str) {
    let a = str.split(' ').slice(0, 2).join(' ');
    return a
}

function handleNext() {
    if (active.value < Math.ceil(countPage.value / pageSize)) {
  active.value = active.value + 1;
        watchEffect(() =>
           getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value }));
        return active.value;

    }
}


function handlePrevious() {
    
    if (active.value > 1) {
        active.value = active.value - 1;

        watchEffect(() => getAllCoursePage({ page: active.value, pageSize: pageSize, status: tabFilter.value }));

        // allCourses.value = store.allCoursesEnrolled.courses;
        // return active.value;

    }
};

// Edit
import { AdminUpdate } from '../../composable/editData.js';

const { updateCourses } = AdminUpdate();
const specificData = ref({});
const status = ref(false);
const heading3 = ref([])
const heading1 = ref([])

await store.getEnrolledCourses('http://localhost:3000/course/courses/levels');
heading3.value = store.allCoursesEnrolled;

await store.getEnrolledCourses('http://localhost:3000/category/sub-category');
console.log("listing", store.allCoursesEnrolled);
heading1.value = store.allCoursesEnrolled




function handleId(id) {
    // console.log("id: " + id);

    // let a = allCourses.value.filter((e) => e.id === id)
    let a = adminView.value.filter((e) => e.id === id)

    specificData.value = a[0]
    console.log("a", specificData.value);
    status.value = true;
}
const level = ref("")
const category = ref("")

function levelChange(event, specificDataLevel) {
    level.value = event.target.value;
    return level.value;

}
console.log("specificDataLevel", level.value);

function categoryChange(event) {
    category.value = event.target.value;
}
const titleError = ref(false)
var titleReg = /^(?:[1-9]\d*|\d)$/;
const setFormError = ref("");

function validate(userData) {
    let error = {};
    let flag = 0;

    if (!userData.course_title) {
        error.course_title = "Title cannot be empty";
        flag = 1;
        setFormError.value = error;
    }
    if (userData.course_title.match(titleReg)) {
        error.course_title = "Title cannot contain only numbers";
        flag = 1;
        setFormError.value = error;
    }

    if (!userData.description) {
        error.description = "Description cannot be empty";
        flag = 1;
        setFormError.value = error;
    }
    if (userData.description.match(titleReg)) {
        error.description = "Please write some valuable description";
        flag = 1;
        setFormError.value = error;
    }
    if (userData.price < 0) {
        error.price = "Price cannot be less than zero";
        flag = 1;
        setFormError.value = error;
    }

       if (!userData.level) {
        error.level = "Please select the course level";
        flag = 1;
        setFormError.value = error;
    }
       if (!userData.category) {
        error.category = "Please select the course Category";
        flag = 1;
        setFormError.value = error;
    }
    if (flag == 1) {
        return true;
    } else {
        return false;
    }
}
const priceError = ref(false)
const editStatus = ref(false)
function handleEdit(id, specificData) {

    //  if (specificData.title === '') {
    //     titleError.value = true;

    // }


    // if (specificData.price === "") {
    //     priceError.value = true;
    // }

    // else {
    //     console.log("category ", category.value);
    //     console.log("id", specificData.level);
    //     const userData = ref({ category: category.value, course_title: specificData.title, description: specificData.description, level: level.value, price: specificData.price, is_free: eventVal })
    //     updateCourses(id, userData.value);
    // }

    const userData = ref({ category: category.value, course_title: specificData.title, description: specificData.description, level: level.value, price: specificData.price, is_free: eventVal })
    if (!validate(userData.value)) {
        setFormError.value = ""
        updateCourses(id, userData.value);
        editStatus.value = true
    }
}

const checkedStatus = ref(false)
let priceStatus = ref(false)
const eventVal = ref("")

const freePrice = ref()
function isFree(price, event) {
    // console.log("price", price);
    console.log("event", event);
    eventVal.value = event

    if (event === true) {
        checkedStatus.value = true;
        price = 0;
        freePrice.value = 0;
        specificData.price = freePrice.value
        console.log("price", price);
        return price;
    }

    if (event === false) {
        checkedStatus.value = false;
    }

    else {
        return ''
    }
}

function Price0CheckOn(price, event, free) {
    if (price === 0) {
        priceStatus.value = true;
        free = 'true';
        console.log("object", priceStatus.value);
    }
    else {
        priceStatus.value = false;
    }

}

function getPriceStatus(isFree)
{
    if(isFree == true) { 
         
        const priceMsg= "Free"
        return priceMsg
    }
    else{
        const priceMsg = "Paid"
        return priceMsg
    }
}
</script>
<template>
  

    <AdminTable :adminView="adminView"></AdminTable>
Total courses : {{ countPage }}
    <div class="flex mx-4 justify-end w-[80%] mx-auto mt-7">
       
            <button type="button"
                class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem]"
                @click="handlePrevious()"
                :class="active == 1 ? 'cursor-not-allowed' : 'bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 '">Previous</button>

             <p class="mt-0 mx-3">Page {{ active }} of {{ Math.ceil(countPage / pageSize) }} </p>

    <button v-if="active > Math.ceil(countPage / pageSize)" type="button"
                    class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem] cursor-not-allowed"
                    @click="handleNext()">Next</button>

            <button v-else type="button"
                class="bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-1 rounded text-white text-[1.2rem]"
                @click="handleNext()">Next</button>


       
    </div>
</template>