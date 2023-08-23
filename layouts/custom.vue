<template>
    <Navbar></Navbar>
    <div class="grid grid-cols-6">
        <div class="shadow-xl rounded border border-2">
            <div class="bg-blue-200 h-[138%] py-[50px] text-black ">

                <NuxtLink to="/admin/Dashboard">
                <p class="px-5 py-4 text-left text-[1.5rem]  ">
                   <i class="fa-solid fa-gauge px-4"></i> Dashboard</p>

                   </NuxtLink>
                <!-- Accordion -->


                <div id="accordionExample">
                    <div class="rounded-t-lg ">
                        <h2 class="mb-0" id="headingOne">
                            <button
                                class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 transition hover:z-[2] focus:z-[3] focus:outline-none"
                                type="button" data-te-collapse-init data-te-target="#allCourse" aria-expanded="false"
                                aria-controls="collapseOne">
                               <i class="fa-solid fa-book-open px-4"></i> Courses
                                <span
                                    class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                 <div id="allCourse" class="!visible" data-te-collapse-item data-te-collapse-show
                            aria-labelledby="headingOne" data-te-parent="#allCourse">
                            <div class="px-[70px] py-2 text-[1.2rem]">
                                <NuxtLink to="/admin/all-courses" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>All Courses</NuxtLink>

                            </div>

                             <div class="px-[70px] py-2 text-[1.2rem]">
                                    <NuxtLink to="/admin/active-courses" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i> Active Course</NuxtLink>

                                </div>

                                 <div class="px-[70px] py-2 text-[1.2rem]">
                                    <NuxtLink to="/admin/Inactive-courses" class="focus:text-green-400"><i class="fa-solid fa-arrow-right pr-2"></i> Inactive Course</NuxtLink>

                                </div>
                        </div>
                    </div>



                </div>


<div>
<NuxtLink to="/admin/create-course">
         <p class="px-5 py-4 text-left text-[1.5rem] e"><i class="fa-solid fa-chalkboard-user px-3 pr-4"></i>Create Course</p>
    
</NuxtLink>

</div>

              <div id="accordionExample">
                        <div class="rounded-t-lg">
                            <h2 class="mb-0" id="headingOne">
                                <button
                                    class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 transition hover:z-[2] focus:z-[3] focus:outline-none"
                                    type="button" data-te-collapse-init data-te-target="#allUsers" aria-expanded="false"
                                    aria-controls="collapseOne">
                                 <i class="fa-solid fa-user px-5"></i> Users
                                    <span
                                        class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                     <div id="allUsers" class="!visible" data-te-collapse-item data-te-collapse-show
                                aria-labelledby="headingOne" data-te-parent="#allUsers">
                                <div class="px-[70px] py-2 text-[1.2rem]">
                                    <NuxtLink to="/admin/all-users" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>All Users</NuxtLink>

                                </div>

                            </div>
                        </div>



                    </div>

                     <div id="accordionExample">
                            <div class="rounded-t-lg">
                                <h2 class="mb-0" id="headingOne">
                                    <button
                                        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 transition hover:z-[2] focus:z-[3] focus:outline-none"
                                        type="button" data-te-collapse-init data-te-target="#allCategory" aria-expanded="false"
                                        aria-controls="collapseOne">
                                   <i class="fa fa-list-alt px-4"></i>Category
                                        <span
                                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                         <div id="allCategory" class="!visible" data-te-collapse-item data-te-collapse-show
                                    aria-labelledby="headingOne" data-te-parent="#allCategory">
                                    <div class="px-[70px] py-2 text-[1.2rem]">
                                        <NuxtLink to="/admin/create-category" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>Create Category</NuxtLink>

                                    </div>



                                       <div class="px-[70px] py-2 text-[1.2rem]">
                                            <NuxtLink to="/admin/main-category" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>Main Category</NuxtLink>
                                        </div>

                                           <div class="px-[70px] py-2 text-[1.2rem]">
                                            <NuxtLink to="/admin/sub-category" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>Sub Category</NuxtLink>
                                        </div>


                                </div>
                            </div>



                        </div>


                         <div id="accordionExample">
                                <div class="rounded-t-lg ">
                                    <h2 class="mb-0" id="headingOne">
                                        <button
                                            class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 transition hover:z-[2] focus:z-[3] focus:outline-none"
                                            type="button" data-te-collapse-init data-te-target="#allTopics" aria-expanded="false"
                                            aria-controls="collapseOne">
                                        <i class="fa-solid fa-folder-open px-4"></i>Topics
                                            <span
                                                class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                             <div id="allTopics" class="!visible" data-te-collapse-item data-te-collapse-show aria-labelledby="headingOne" data-te-parent="#allTopics">

<div class="px-[70px] py-2 text-[1.2rem]">
<NuxtLink to="/admin/all-topics" class="focus:text-green-400"> <i class="fa-solid fa-arrow-right pr-2"></i>All Topics</NuxtLink>
 </div>
 

                                    </div>
                                </div>



                            </div>
            </div>
        </div>
        <div class="col-span-5">

            <slot />
        </div>

    </div>
</template>