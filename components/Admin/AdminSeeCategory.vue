
<script setup>
import { EditCategory } from '../../composable/editData.js';
import { DeleteTopics } from '../../composable/editData.js';
import { getCoursesData } from '../../composable/editData.js'
const { getAllcourses, allCourses } = getCoursesData();
const { updateMainCategory , updateMainCategoryToActive, activeResponse, activeVal } = EditCategory();
const { deleteNewTopic, delResponse } = DeleteTopics();

const props = defineProps(["mainData"])

console.log("231", props.mainData);
const paraState = ref(true);

function handleChange() {
    paraState.value = false;
}
function handleCross() {
    paraState.value = true;
}

// For Edit
const inputField = ref("")
function handleInput(event) {
    console.log(event.target.value, "43");
    inputField.value = event.target.value
}
const editUrl = ref('');
const editedData = reactive({ name: inputField })
function handleEdit(id) {
    editUrl.value = (`http://localhost:3000/category/${id}`)
    console.log("edited data", editedData.name);
    updateMainCategory(editUrl.value, editedData);
    paraState.value = true;
}

//For Inactive
const delUrl = ref("")
async function handleDelete(id) {
    delUrl.value = (`http://localhost:3000/category/${id}`);
    await deleteNewTopic(delUrl.value);
    await deleteResponse();
}

async function deleteResponse() {
    if (delResponse.value == 204) {
        await getAllcourses('http://localhost:3000/category/all/main-category');
        props.mainData.status = 'inActive';
    }
}

//For Active 

const editToActiveUrl= ref('')
async function handleActive(id)
{
editToActiveUrl.value= `http://localhost:3000/category/${id}`;
  await updateMainCategoryToActive(editToActiveUrl.value);

  await ActiveResponse();
}

async function ActiveResponse()
{
   if(activeResponse.value == 200)
   {
     await getAllcourses('http://localhost:3000/category/all/main-category');
        props.mainData.status = 'active';
   }
}
</script>



<template>
    <div v-if="paraState">
        <p>id: {{ mainData.id }}</p>


        <p @dblclick="handleChange()"
            :class="mainData.status === 'inActive' ? 'text-red-600 text-[1.2rem]' : 'text-green-600 text-[1.2rem]'"> name:{{
                mainData.name }}</p>

        <p v-if="mainData.status === 'inActive'">status: InActive</p>
        <p v-else>status: Active</p>


        <i v-if="mainData.status === 'inActive'" class="fa-solid fa-plus cursor-pointer" @click="handleActive(mainData.id)"></i>


        <i v-else class="fa-solid fa-trash text-red-600 cursor-pointer" type="button"
            @click="handleDelete(mainData.id)"></i>
    </div>


    <input v-else type="text" v-model="mainData.name" @input="handleInput($event)" />

    <div class="flex justify-center mt-4" v-if="paraState == false">
        <p><i class="fa-solid fa-check mr-4" @click="handleEdit(mainData.id)"></i></p>
        <p><i class="fa-solid fa-xmark" @click="handleCross()"></i></p>
    </div>
</template>