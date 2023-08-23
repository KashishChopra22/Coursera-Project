
<script setup>
import axios from 'axios';
import { RoleChange } from '../../composable/editData.js';
const { AdminChangeRole, roleData } = RoleChange();
const props = defineProps(['m'])

const drop = ref(false);
const roleVal = ref("")

const pageSize = 3;
const active = ref(1);
const tabFilter = ref("USER");
const countPage = ref(0);
const adminView = ref([])

const getAdminPagination = async (allData) => {
    const test = { allData };
    const { data } = await axios.get(
        `http://localhost:3000/user/user/all-user?page=${allData.page}&pageSize=${allData.pageSize}`,
        test
    );

    console.log("pagination data", data);
    adminView.value = data;
    countPage.value = await data.count

};

async function getAll() {
    await getAdminPagination({ page: active.value, pageSize: pageSize })
}

onMounted(() => getAll());

function getTrue(id, $event) {
    drop.value = !drop.value

}

function handleRoleChange(event) {
    console.log("event", event.target.value);
    roleVal.value = event.target.value
}

async function handleUpdate(email) {
    console.log("email", email);

    await AdminChangeRole(email, { role: roleVal.value, is_verified: false })
    if (roleData.value) {

        drop.value = false;
       await getAll();
        
    }
 
}

function handleCancel() {
    drop.value = false;
}

</script>
<template>

<tr class=" border-b text-[0.9rem] text-gray-600">
    <td v-if="m.profile_image" class="mx-5"><img :src="m.profile_image" style="width:60px; height: 60px;"
                    class="rounded-full mx-5"></td>

            <td v-else class="px-5"><img src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                    style="width:50px; height: 50px;" class="rounded-full"></td>
            <td class="px-5">{{ m.fullname }}</td>
            <td>{{ m.email }}</td>
            <td v-if="m.is_verified" class="px-9">Verified </td>
            <td v-else class="px-7"> Not Verified </td>


            <td v-if="drop" class="px-5">

<template v-if="drop == false">
                <button  type="button" class="flex btn bg-blue-400 px-2 py-2 text-white rounded-full"
                 :class="m.role === 'ADMIN'? 'bg-green-300' : 'bg-blue-400' "   @dblclick="getTrue(m.id)">{{ m.role }} <i class="fas fa-angle-double-down ml-2 mt-1 fa-spin"></i> 
                
                </button>
</template>
                <select v-if="drop === true" @change="handleRoleChange($event)" class="bg-blue-200 rounded-lg px-2 py-1 focus:outline-0">
                    <option selected hidden class="font-bold">Select Role</option>
                    <option value="USER" class="pb-[40px]">User</option>
                    <option value="ADMIN">Admin</option>
                </select>

            </td>

<td v-else class="px-5">       
<button type="button" class="flex btn bg-blue-400 px-2 py-2 text-white rounded-full"
@dblclick="getTrue(m.id, $event)" :class="m.role === 'ADMIN' ? 'bg-green-500' : 'bg-blue-400'">
{{ m.role }}
   
<i class="fas fa-angle-double-down ml-2 mt-1 fa-spin"></i> 

</button>
</td>


            <td v-if="drop">
                
        <button class="bg-green-600 text-white rounded-full px-2 py-2 mx-2"
                    @click="handleUpdate(m.email)" id="myButton"><i class="fa-solid fa-check px-3"></i></button>


           <button class="bg-red-600 text-white rounded-full px-2 py-2"
                    @click="handleCancel(m.email)"><i class="fa-solid fa-xmark px-3"></i></button> 

                </td>

</tr>

</template>

<style scoped>
option {
    background-color: white;
    margin: 40px;
    

}
        .box-background {
            background: rgba(0, 0, 0, 0.8);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .box {
            width: 300px;
            height: 100px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            font-family: sans-serif;
            font-weight: bold;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 5px;
        }

        .box div {
            margin-top: 10px;
        }

        .btn {
            width: 100px;
            border: none;
			border-radius: 5px;
			color: #fff;
			padding: 5px;
        }
        .red {
			background: red;
		}
		.green {
			background: green;
		}
   
</style>