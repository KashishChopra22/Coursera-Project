<template>
    <nav class="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4 bg-white "
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <!-- Hamburger button for mobile view -->
            <button
                class="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button" data-te-offcanvas-toggle data-te-target="#offcanvasExample" aria-controls="offcanvasExample"
                data-te-ripple-init data-te-ripple-color="light">

                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>



            <a class="pr-2 text-xl font-semibold text-white max-[992px]:mx-auto" href="#">

                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
                    class="h-8 mr-3" alt="Coursera Logo" style="width:127px; height:32px" />
            </a>

            <!-- Collapsible navigation container -->
            <div class=" hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto items-center relative"
                id="navbarSupportedContent4" data-te-collapse-item>



                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>

                 

<ExploreHover />
    <!-- <Search /> -->
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

                        <div class="flex">
                            <div class="relative w-full">

                                <input type="text" id="search-dropdown"
                                    class="block p-2.5 mx-4 ml-[120px] w-full z-20 text-sm rounded-lg border border-black focus:outline-0 focus:border-black focus:ring-0 customInput"
                                    placeholder="Search be Course Title ? " @input="searchTerm">

 


                                <button type="submit"
                                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  focus:outline-none  ">

                                    <svg aria-hidden="true" class="w-5 h-5 " fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </div>
                        </div>

                    </li>
                </ul>


            </div>
   
            <!-- Right elements -->
            <div class="hidden lg:flex relative flex items-center relative lg:max-w-full rightNav">


                <ul
                    class="font-medium md:flex flex-col p-4 md:p-0 mt-4 text-black border md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent lg:max-w-full rightNavLinks">


       <li class="mt-2 loginNav" v-if="loginShow === false">
                            <NuxtLink to="/Signup">
                                <button class="px-2 py-2 bg-blue-700 rounded text-white font-bold mt-[-10px]">
                                    Join for Free
                                </button>
                            </NuxtLink>

                        </li>




                    <li v-if="loginShow === false" class="mt-2 loginNav">
                        <a data-te-toggle="modal" data-te-target="#login" data-te-ripple-init
                            data-te-ripple-color="dark"
                            class="block py-2 text-blue-500 md:p-0 mt-2 hover:underline text-[1rem] cursor-pointer">Log
                            In</a>

                        <LoginModal />
                    </li>

                  

                    <li v-if="status === false">{{ regUser }}</li>
                    <li v-if="status === false" class="mt-2">{{ token }}</li>
                    <li v-else>{{ tokenRemove }}</li>

<div v-if="icon">
       <li @click="handleToggle()" class="rounded-full border-black px-3 py-3 border-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" style="width: 20px;" class="rounded"/>
                        </li>
</div>
                 

                  
                </ul>


            </div>
            <!-- Right elements -->
        </div>
    </nav>
    <div v-if="status === false">
      <div v-if="toggle">
    <div class=" bg-gray-300 w-[10%] z-50 float-right relative mt-[-10px]">
      <NuxtLink to="/EditProfile">
          <p class="px-4 py-2 text-[1.2rem] hover:text-blue-700"><i class="fa-solid fa-pen-to-square pr-3"></i>Edit Profile</p>

      </NuxtLink>
      <p class="px-4 py-2 text-[1.2rem] cursor-pointer hover:text-blue-700"  @click="handleLogout"> <i class="fa-solid fa-arrow-right-from-bracket pr-3"></i>Logout</p>
     
     
     
    </div>
</div>
</div>

<!-- Search List -->

     <ul v-if="listStatus" class="w-[25%] rounded shadow-lg bg-white left-[280px] h-[60%] overflow-auto top-[110px] z-50 absolute">
   
    <li v-for="m in fakeSearch" @click="handleSearchMove(m.slug)" class="px-4 py-2 text-[1.2rem] text-black hover:cursor-pointer hover:text-gray-800">
    <i class="fa-solid fa-magnifying-glass px-3"></i>  {{ m.title }}
    </li>
 
    


        </ul>


</template>


<script setup>

import Cookies from 'js-cookie';
import { useCourseraStore } from '../store/fetch.js'

const store = useCourseraStore();
const router = useRouter();
let status = ref(false)
const token = ref("")
const regUser = ref("")
const toggle= ref(false)
const searchSlug= ref("")
const loginShow= ref(false);
const signupStatus= ref(false);
const icon= ref(false);
const tokenRemove = ref("")


console.log("token.value: " , token.value);

if(token.value.length > 0)
{
    signupStatus.value = true;
}


function dummy() {
    token.value = localStorage.getItem('coursera project user');
    console.log("store.loginToken", token.value)
    status.value = false;
    console.log("response.data.user.email", store.loginuser);
}

watchEffect(() => dummy())

if(localStorage.getItem('coursera project user')){
    // status.value= true;
    signupStatus.value= true;
     loginShow.value = true;
     icon.value = true;
    console.log("login: ", signupStatus.value);
}


function handleLogout() {
    tokenRemove.value = Cookies.remove('token')
    tokenRemove.value = localStorage.removeItem('coursera project user');
    tokenRemove.value = localStorage.removeItem('Coursera registered user');
    console.log("tokenRemove", tokenRemove.value);
    status.value = true;
    loginShow.value = false;
    signupStatus.value = false;
    icon.value= false;
    // status.value= false;
    router.push('/');
    
    // window.location.reload();
}

function handleToggle(){
toggle.value= !toggle.value;
}

regUser.value = localStorage.getItem('Coursera registered user')
console.log("ref", regUser.value);
if (regUser.value) {
  signupStatus.value = true;
}

// Search Listing function
let fakeSearch = ref([])
const listStatus= ref(false);
function searchTerm(event) {
    const searchUrl = ref(`http://localhost:3000/course/search/active/${event.target.value}`)

    if (event.target.value === '') {
        listStatus.value= false;
        return []
    }
    store.handleSearch(searchUrl.value)
    console.log("store.search", store.search);

// if(store.search.title.includes(searchTerm.value.toLowerCase())){
        listStatus.value = true;
        fakeSearch.value = store.search
        return fakeSearch.value;
// }

};

function handleSearchMove(m){
searchSlug.value= m
router.push(`/courses-home/${searchSlug.value}`)
    searchTerm.value=""
     listStatus.value = false;
    return []
}


</script>



<style scoped>
@import '../assets/css/custom.css';
</style>

