<script setup>
import { AdminUpdate } from '../../composable/editData.js';
import { useFreeCoursesStore } from '../../store/FreeCourses.js';

const props = defineProps(["adminView"])
const store = useFreeCoursesStore();

// Edit

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
    console.log("id: " + id);

    // let a = allCourses.value.filter((e) => e.id === id)
    let a = props.adminView.filter((e) => e.id === id)

    specificData.value = a[0]
    console.log("a", a[0]);
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

function getPriceStatus(isFree) {
    if (isFree == true) {

        const priceMsg = "Free"
        return priceMsg
    }
    else {
        const priceMsg = "Paid"
        return priceMsg
    }
}

</script>

<template>
   <div class="relative overflow-x-auto w-[90%] mx-auto mt-5">
            <table class="w-full text-sm text-left text-gray-500 bg-white shadow-lg rounded-lg border-2">
                <thead class="text-[1.1rem] text-white uppercase bg-gradient-to-r from-sky-500 to-blue-500 ">
                    <tr>
                          <th scope="col" class="px-6 py-3">
                                Thumbnail
                            </th>
                        <th scope="col" class="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>

                        <!-- <th scope="col" class="px-6 py-3">
                        Price Status
                    </th> -->
                        <th scope="col" class="px-6 py-3">
                            Level
                        </th>
                 
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Edit
                        </th>

                    </tr>
                </thead>
                <tbody>

                    <tr class=" border-b text-[1.1rem] text-gray-600" v-for="m in adminView">
                          <td class="px-6 py-4">
                                <img :src="m.CourseThumbnail?.filepath" class="rounded-full" style="width:90px ; height: 80px;" />
                            </td>
                        <td class="px-6 py-4">
                            {{ m.title }}
                        </td>
                        <td class="px-6 py-4">
                            {{ m.description }}
                        </td>
                        <td class="px-6 py-4">
                            {{ m.price }} Rs


                        </td>

                        <!-- <td class="px-6 py-4">
                        {{ getPriceStatus(m.is_free) }}
                    </td> -->


                        <td class="px-6 py-4">
                            {{ m.level }}
                        </td>
                 
                        <td class="px-6 py-4" :class="m.status === 'active' ? 'text-green-500' : 'text-red-500'">
                            {{ m.status }}
                        </td>
                        <td class="px-6 py-4">
                            {{ m.Category?.name }}
                        </td>
                        <td class="px-6 py-4">
                            <button type="button" class=" px-2">

                                <i class="fa-solid fa-pen-to-square fa-2x" data-te-toggle="modal"
                                    data-te-target="#staticBackdrop" data-te-ripple-init data-te-ripple-color="dark"
                                    @click="handleId(m.id)"></i>



                                <div data-te-modal-init
                                    class="fixed left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[#000000b3] top-0"
                                    id="staticBackdrop" data-te-backdrop="static" data-te-keyboard="false" tabindex="-1"
                                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div data-te-modal-dialog-ref
                                        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[800px]">
                                        <div
                                            class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(0, 0, 0, 0.83)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none mt-[220px]">
                                            <div
                                                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                                                <!--Modal title-->


                                                <h5 class="text-xl font-medium leading-normal text-black mx-auto mt-[15px] text-[1.9rem] leading-[2.25rem] font-[OpenSans]"
                                                    id="exampleModalLabel">
                                                    Edit Form
                                                </h5>

                                                <!--Close button-->
                                                <button type="button"
                                                    class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                                    data-te-modal-dismiss aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>


                                            </div>

                                            <!--Modal body-->
                                            <div data-te-modal-body-ref class="relative p-4">



                                                <div class="mt-7 flex justify-center w-[100%] mx-auto">
                                                    <!-- Price -->

                                                    <div class=""><label
                                                            class="px-5 text-black text-[1.1rem] mt-4">Price:</label>


                                                        <span
                                                            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 py-[1.1rem]">
                                                            <i class="fa-solid fa-dollar-sign"></i>
                                                        </span>


                                                        <input v-if="checkedStatus" type="number" placeholder="type here..."
                                                            class="border-2 focus:border-primary border-gray-300 rounded-r-lg   py-[0.75rem] text-base font-normal px-4 bg-blue-100"
                                                            min="50" max="2000" v-model="freePrice"
                                                            @input="Price0CheckOn(specificData.price, $event.target.checked)" />

                                                        <input v-else type="number" placeholder="type here..."
                                                            class="border-2 focus:border-primary border-gray-300 rounded-r-lg   py-[0.75rem] text-base font-normal px-4"
                                                            min="50" max="2000" v-model="specificData.price"
                                                            @input="Price0CheckOn(specificData.price, $event.target.checked)" />

                                                    </div>
                                                    <div class="mt-4">
                                                        <label class="px-5 text-black text-[1.1rem] mt-4 w-[60px]">Free:</label>

                                                        <input v-if="specificData.price === 0" type="checkbox"
                                                            :checked="checked" id="checked-checkbox"
                                                            :value="specificData.is_free"
                                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 bg-red-600"
                                                            @input="isFree(specificData.price, $event.target.checked, specificData.is_free)"
                                                            v-model="specificData.is_free">

                                                        <input v-else type="checkbox" class="text-lg" name="free"
                                                            @input="isFree(specificData.price, $event.target.checked)"
                                                            v-model="specificData.price" />

                                                    </div>
                                                </div>
                                                <!-- Price end -->
                                                <span id="test-span" class="text-red-500 mx-6">
                                                    {{ setFormError.price }}
                                                </span>



                                                <div>
                                                    <label class=" w-[60px] mx-[70px] text-black text-[1.2rem]">Title: </label>

                                                    <input type="text" placeholder="type here..."
                                                        class="border-2 focus:border-primary border-gray-300 rounded-lg  w-[60%] py-[0.75rem] text-base font-normal px-4"
                                                        v-model="specificData.title" />
                                                </div>

                                                <span id="test-span" class="text-red-500 mx-6">
                                                    {{ setFormError.course_title }}
                                                </span>


                                                <div class="mt-7 flex justify-center">
                                                    <label
                                                        class=" w-[150px] text-black text-[1.1rem] mx-[20px] pl-[40px] mt-4">Description:
                                                    </label>

                                                    <textarea type="text" placeholder="type here..."
                                                        class="border-2 focus:border-primary border-gray-300 rounded-lg  w-[60%] py-[0.75rem] text-base font-normal px-4"
                                                        v-model="specificData.description"></textarea>
                                                </div>
                                                <span id="test-span" class="text-red-500 mx-6">
                                                    {{ setFormError.description }}
                                                </span>


                                                <div class="mt-7 flex justify-center">
                                                    <label
                                                        class="px-4 text-black text-[1.1rem] mt-4  w-[60px] mx-[60px] pr-[60px]"
                                                        for="level"> Level:</label>


                                                    <select id="level"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5"
                                                        @change="levelChange($event, specificData.level)">

                                                        <option :value="specificData.level" selected hidden>{{
                                                            specificData.level }}</option>
                                                        <option v-for="m in heading3" :value="m.level">{{ m.level }}</option>
                                                    </select>

                                                </div>


                                                <span id="test-span" class="text-red-500 mx-6">
                                                    {{ setFormError.level }}
                                                </span>
                                                <div class="mt-7 flex justify-center">
                                                    <label
                                                        class="px-1 text-black text-[1.1rem] mt-4  w-[60px] mx-[65px] pr-[60px]">Category:</label>


                                                    <select id="countries"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5"
                                                        @change="categoryChange($event)">
                                                        <option :value="specificData.Category?.slug" selected hidden>{{
                                                            specificData.Category?.slug }}</option>
                                                        <option v-for="m in heading1" :value="m.slug">{{ m.name }}</option>
                                                    </select>

                                                </div>

                                                <span id="test-span" class="text-red-500 mx-6">
                                                    {{ setFormError.category }}
                                                </span>

                                                <div>
                                                    <input v-model="eventVal" hidden />

                                                </div>


                                                <div v-if="editStatus"><button
                                                        class="bg-gray-500 px-4 py-2 rounded-lg text-white text-[1.2rem]"
                                                        @click="handleEdit(specificData.id, specificData)"
                                                        data-te-modal-dismiss> Edit</button>
                                                </div>

                                                <div v-else>
                                                    <button class="bg-gray-500 px-4 py-2 rounded-lg text-white text-[1.2rem]"
                                                        @click="handleEdit(specificData.id, specificData)"> Edit</button>
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>












                            </button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
</template>