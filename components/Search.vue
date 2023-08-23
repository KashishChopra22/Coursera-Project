<!-- 
<script setup>
import { useCourseraStore } from '../store/fetch.js';


let fakeSearch = ref([])

const store = useCourseraStore();
console.log("searchVar", searchTerm.value);


function searchTerm(event) {
    const searchUrl = ref(`http://localhost:3000/course/search/active/${event.target.value}`)
    if (event.target.value === '') {
        return []
    }
    store.handleSearch(searchUrl.value)
   
    console.log("store.search", store.search);
    fakeSearch.value = store.search
    return fakeSearch.value;
  
};



</script>

<template>
    <div class="bg-red-300 py-[20px]">
        <input type="text" id="search" placeholder="Type here..." class="mx-[820px] py-[10px] w-[20%] rounded-lg"
            @input="searchTerm">

        <ul class="w-[30%] bg-blue-400 mx-auto">

            <li v-for="m in fakeSearch">
                {{ m.title }}
            </li>
        </ul>

    </div>
</template>
 -->
<template>
    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>

                            <div class="flex">
                                <div class="relative w-full">

                                    <input type="text" id="search-dropdown"
                                        class="block py-2.5 mx-4 ml-[120px] w-full z-20 text-sm rounded-lg border border-black focus:outline-0 focus:border-black focus:ring-0 customInput text-black"
                                        placeholder="What do you want to learn ?" @input="searchTerm"/>

 


                                    <button type="submit"
                                        class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  focus:outline-none right-[-38%] ">

                                        <svg aria-hidden="true" class="w-5 h-5 " fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        <span class="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>

                              <ul class="w-[30%] bg-blue-400 mx-auto">

                <li v-for="m in fakeSearch">
                    {{ m.title }}
                </li>
            </ul>
                        </li>
</template>

<script setup>
import { useCourseraStore } from '../store/fetch.js';


let fakeSearch = ref([])

const store = useCourseraStore();
console.log("searchVar", searchTerm.value);


function searchTerm(event) {
    const searchUrl = ref(`http://localhost:3000/course/search/active/${event.target.value}`)
    if (event.target.value === '') {
        return []
    }
    store.handleSearch(searchUrl.value)

    console.log("store.search", store.search);
    fakeSearch.value = store.search
    return fakeSearch.value;

};



</script>