

<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>

    <div>

<!-- Black Nav -->
<!-- <div class="invisible min-[992px]:block fixed bottom-0 right-0 left-0 top-[6vh] z-[1045] flex w-100 max-w-full -translate-x-full flex-col border-none bg-blue-200 bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"   tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      data-te-offcanvas-init> -->

<div class="hidden min-[992px]:block bg-black text-white text-[16px] font-['Source-Sans-Pro',Arial,sans-serif]      
">
    
<ul class="flex mx-3 leading-[35px] w-50">
  <li class="mr-6 px-1 cursor-pointer hover:bg-white hover:text-black border-b-4 border-white">For Individuals</li>
  <li class="mx-6 px-1 cursor-pointer hover:bg-white hover:text-black">For Businesses</li>
  <li class="mx-6 px-1 cursor-pointer hover:bg-white hover:text-black">For Universities</li>
  <li class="mx-6 px-1 cursor-pointer hover:bg-white hover:text-black">For Governments</li>
</ul>
</div>
<!-- </div> -->

  <!-- Main navigation container -->
  <nav
    class="relative flex w-full flex-wrap items-center justify-between  py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4 bg-pink-200"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button"


          data-te-offcanvas-toggle
          data-te-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          data-te-ripple-init
          data-te-ripple-color="light"


      >
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>




      <!-- <div
      class="invisible fixed bottom-0 right-0 left-0 top-[6vh] z-[1045] flex w-100 max-w-full -translate-x-full flex-col border-none bg-blue-200 bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      data-te-offcanvas-init>
      <div class="flex items-center justify-between p-4">
        <h5
          class="mb-0 font-semibold leading-normal"
          id="offcanvasExampleLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-offcanvas-dismiss>
          <span
            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div class="flex-grow overflow-y-auto p-4">
        <div>
          Some text as placeholder. In real life you can have the elements
          you have chosen. Like, text, images, lists, etc.
        </div>
     
      </div>
    </div> -->














      <a class="pr-2 text-xl font-semibold text-white max-[992px]:mx-auto" href="#">

            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" class="h-8 mr-3 " alt="Coursera Logo" style="width:127px; height:32px"/>
      </a>

      <!-- Collapsible navigation container -->
      <div
        class=" hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto items-center relative"
        id="navbarSupportedContent4"
        data-te-collapse-item
      >
       
      
     
        <ul
          class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
          data-te-navbar-nav-ref
        >
         
          <li class="my-4 lg:my-0 lg:pr-2 tracking-wide explore" >
            <a
              class="text-white "
              href="#"
              data-te-nav-link-ref
              >
              <button type="button" class="bg-blue-700 px-3 text-white rounded flex py-2.5 mx-2 text-sm font-extrabold hover:bg-white hover:text-blue-700 cursor-auto hover:border-2 border-black absolute z-[1000] focus-within:hover:bg-black ">Explore 


                <svg class=" ml-1 mt-1 hover:fill-blue-500 fill-current " viewBox="0 0 32 32" width="9" height="9"><path d="M30.054 14.429l-13.25 13.232q-0.339 0.339-0.804 0.339t-0.804-0.339l-13.25-13.232q-0.339-0.339-0.339-0.813t0.339-0.813l2.964-2.946q0.339-0.339 0.804-0.339t0.804 0.339l9.482 9.482 9.482-9.482q0.339-0.339 0.804-0.339t0.804 0.339l2.964 2.946q0.339 0.339 0.339 0.813t-0.339 0.813z"></path></svg>
              </button>
              
              </a>
             
<div class="hidden fixed mt-[60px] text-black p-5 mx-w-full w-[100vw] h-[100vh] exploremenu shadow-xl mx-auto z-[3000]  bg-[rgba(0,0,0,0.6)] left-0 aria-hidden:true  xl-[1480px]:mt-[60px] ">
  

  <div class="absolute w-[350px] left-[30px] top-[-20px]">
    
    <div class="relative mt-[20px] z-[3000] bg-[#FFFFFF] shadow-none border-2 border-[#CCCCCC] flex">
 <ul class="text-[rgb(31, 31, 31)] w-[348px] pt-9 exploremenuLinks  ">

 <!-- <ul class="invisible fixed bottom-0 right-0 left-0 top-[6vh] z-[1045] flex w-100 max-w-full -translate-x-full flex-col border-none bg-blue-200 bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none exploremenuLinks"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      data-te-offcanvas-init> -->
                                        
                                      
                                        
                                           <h2 class="mb-6 px-9 text-lg pl-[30px]"><strong>Goals</strong></h2>
                                           <li class="mb-2 hover:shadow-lg  pl-[40px] ">Take a free course</li>

                                           <li class="mb-2 hover:shadow-lg pl-[40px]">Earn a degree</li>
                                           
                                           <svg class="flex transition-[all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms] h-[20px] w-[20px] right-[20px] fill-current text-[rgb(42,115,204)] align-middle top-[145px]  absolute exploreMenuLinksIcon"  viewBox="0 0 48 48"  >
                                            
                                            <polygon transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)" points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8" role="presentation"></polygon>
                                          
                                          </svg>


                                           <li class="mb-2 hover:shadow-lg pl-[40px]">Earn a certificate</li>
                                           <svg class="flex transition-[all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms] h-[20px] w-[20px] right-[20px] fill-current text-[rgb(42,115,204)] align-middle top-[180px]  absolute exploreMenuLinksIcon"  viewBox="0 0 48 48"  >
                                            
                                            <polygon transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)" points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8" role="presentation"></polygon>
                                          
                                          </svg>


                                           <li class="mb-2 hover:shadow-lg pl-[40px]">Find your new career</li>
                                       
     

                                            <h2 class="mb-6 px-9 text-lg pl-[30px] pt-8 "><strong>Subjects </strong></h2>
                                            <Icons />

 <div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li class="pl-[40px]  h-[40px]">Data Science
</li>
<Icons />


<Hover :title1="'Degrees'" :title2="'Certificate Programs'" :title3="'Get Started'" :title1para="'Breakthrough pricing on 100% online degrees designed to fit into your life.'" :title2para="'In 3-9 months, gain the skills to break into career or take your career to the next level.'" :title1Birla="'Birla Institute of Technology & Science, Pilani'" :title1BirlaPara="'Bachelor of Science in Compter Science'" :title1Michigan="'University of Michigan'" :title1MichiganPara="'Master of Applied Data Science'" :title1Illinos="'Illinios Tech' " :title1IllinosPara="'Master of Data Science'" :title1Colorado="'University of Colorado Boulder'" :title1ColoradoPara="'Master of Science in Data Science'" :title1Champaign="'University of Illinios at Urbana Champaign'"  :title1ChampaignPara="'Master of Computer Science in Data Science'" :title1Arizona="'Arizona State University'" :title1ArizonaPara="'Master of Computer Science'" :title1Button="'View all degrees'" :title1img1= "'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b9/c608c79b5c498a8fa55b117fc3282f/5.-Square-logo-for-landing-page---Alpha.png?auto=format%2Ccompress&amp;dpr=3&amp;w=36&amp;h=36'" :title1img2="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'" :title1img3="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/3d/1c8fdf7ef5404aa83ab0c00fa12cf5/LOGO_1.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'" :title1img4="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'" :title1img5="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"  :title1img6="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/be/bf4290646811e5b6de89a29eb8ebc3/ASUlogo.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'" :title2img1="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'" :title2img2="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"


:title2IBM1="'IBM Data Science'" :title1IBMpara="'No Prerequisties'" :title1IBMlist="'Self Paced'"  :title2IBM2="'IBM Data Analyst'" :title2Google1="'Google Data Analytics'" :title2Google2="'Google Advanced Data Analytics'" :title2Google3="'Google Business Intelligence'" 

:title31="'Launch your Career'" :title32="'Free Courses'" :title33="'Most Popular'" :title34="'New Courses'" :title35="'Guided Project under 2 hours'" :title36="'Popular Skills'" :title37="'Python'" :title38="'SQL'" :title39="'Microsoft Excel'" :title310="'Excel'" :title311="'Machine Learning'" :title312="'Data Sceince'" :title313="'Data Analytics'" :title314="'Power BI'" :title315="'Artificial Intelligence'" :title316="'Statistics'"/>

</div>
 

<div class="flex w-[348px] hover:shadow-lg  dataScience relative">
  <li class="pl-[40px]  h-[40px]">Business
</li>
<Icons />

<div class="ml-[30px]">
<!-- <Hover :title1="'Degrees'" :title2="'Certificate Programs'" :title3="'Get Started'" :title1para="'Breakthrough pricing on 100% online degrees designed to fit into your life.'" :title2para="'In 3-9 months, gain the skills to break into career or take your career to the next level.'" /> -->
</div>
</div>

<div class="flex w-[348px] hover:shadow-lg  dataScience relative">
  <li  class="pl-[40px]  h-[40px]">Information Technology 
</li>
<Icons />

<div class="ml-[-75px]">
<!-- <Hover :title="'Information'" /> -->
</div>
</div>

<div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li  class="pl-[40px]  h-[40px]">Language Learning
</li>
<Icons />

<div class="ml-[-43px]">
<!-- <Hover/> -->
</div>
</div>

<div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li  class="pl-[40px]  h-[40px]">Personal Development 
</li>
<Icons />

<div class="ml-[-64px]">
<!-- <Hover/> -->
</div>
</div>

<div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li  class="pl-[40px]  h-[40px]">Physical Science and Enginering
</li>
<Icons />

<div class="ml-[-134px]">
<!-- <Hover /> -->

</div>
</div>

<div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li  class="pl-[40px] h-[40px]">Social Sciences
</li>
<Icons />
<div class="ml-[-18px]">
<!-- <Hover /> -->

</div>

</div>


<div class="flex w-[348px] hover:shadow-lg dataScience relative">
  <li  class="pl-[40px] h-[40px]">Health
</li>
<Icons />
<div class="ml-[-18px]">
<!-- <Hover /> -->

</div>

</div>

<div class="flex w-[348px] hover:shadow-lg  dataScience relative">
  <li  class="pl-[40px] h-[40px]">Arts and Humanities 
</li>
<Icons />
<div class="ml-[-51px]">
<!-- <Hover /> -->

</div>

</div>

<div class="flex w-[348px] hover:shadow-lg ">
  <li  class="pl-[40px] w-[340px] h-[50px] text-center">Math and Logic 
</li>
<Icons />
</div>

                                       
  <button type="button" class=" mx-9
   text-blue-900 mt-6 border-2 border-blue-700 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  rounded-lg text-[16px] font-extrabold hover:text-white px-2 py-1.5 mr-2 mb-[110px] "><strong>Browse all subjects</strong></button>
          
 </ul>





<div class=" hidden try px-[208px]">
<h1>trying</h1>
</div>





          
                                </div>
                                </div>
                                </div>
          </li>

      
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          
            <div class="flex">
   <div class="relative w-full">

          <input type="search" id="search-dropdown" class="block p-2.5 mx-4 ml-[120px] w-full z-20 text-sm rounded-lg border border-black focus:outline-0 focus:border-black focus:ring-0 customInput" placeholder="What do you want to learn ? " required >


          <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800  focus:outline-none  ">

              <svg aria-hidden="true" class="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span class="sr-only">Search</span>
          </button>
      </div>       
  </div>
 
          </li>
        </ul>


      </div>

      <!-- Right elements -->
      <div class="hidden lg:flex relative flex items-center relative lg:max-w-full rightNav">
    
      
<ul class="font-medium md:flex flex-col p-4 md:p-0 mt-4 text-black border md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent lg:max-w-full rightNavLinks">
  
              <li class="flex mt-2 blog">
                <a
                  href="#"
                  class="py-2 mt-2 text-gray-800 md:p-0 flex text-black data-te-nav-link-ref"
                  >Online Degrees</a
                >

                <a href="#" class="flex px-2" >
                  <svg
                    class=" hover:rotate-180 absolute pr-[5px] right-[px] navIconhover"
                    viewBox="0 0 32 32"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M30.054 14.429l-13.25 13.232q-0.339 0.339-0.804 0.339t-0.804-0.339l-13.25-13.232q-0.339-0.339-0.339-0.813t0.339-0.813l2.964-2.946q0.339-0.339 0.804-0.339t0.804 0.339l9.482 9.482 9.482-9.482q0.339-0.339 0.804-0.339t0.804 0.339l2.964 2.946q0.339 0.339 0.339 0.813t-0.339 0.813z"
                    ></path>
                  </svg>
                </a>
            


            <div
                                    class="absolute  top-[30px] hover:text-black p-5 bg-white  mx-w-full w-[370px] blogmenu shadow-xl hidden">

                                    <ul class="font-main cursor-pointer">
                                        
                                        <li class="mb-6 hover:text-gray-800">
                                           <p><strong>Online Degree</strong></p>
                                           <p>Explore Bachelor's & Master's degree</p>
                                        </li>
                                        
                                        <li class="mb-6 hover:text-gray-800">
                                            <p><strong>Master Track</strong></p>
                                           <p>Earn credit towards master's degree</p>
                                        </li>
                                        <li class="hover:text-gray-800">
                                            <p><strong>University Certificates </strong></p>
                                           <p>Advance your career with graduate-level learning</p>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>
           


            <li class="mt-2  findNav">
              <a
                href="#"
                class="block py-2 ml-4 mt-2 text-gray-800 md:hover:text-blue-700 md:p-0 hover:underline text-[1rem] relative"
                >Find New Career</a
              >
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="block py-2 pr-4 mt-2 text-gray-800 md:hover:text-blue-700 md:p-0 hover:underline text-[1rem] relative"
                >For Enterprise</a
              >
            </li>
            <li class="mt-2">
              <a
                href="#"
                class="block py-2 pr-4 mt-2 text-gray-800 md:hover:text-blue-700 md:p-0 hover:underline text-[1rem] relative text-left"
                >For Universities</a
              >
            </li>
            <li class="mt-2 loginNav">
              <a
                href="#"
                class="block py-2  text-blue-500 md:p-0 mt-2 hover:underline text-[1rem] "
                >Log In</a
              >
            </li>

            <li >
              <button
                type="button"
                class="bg-blue-700 px-3 py-2 rounded text-white font-extrabold hover:bg-blue-900 text-[1rem] joinNav"
              >
                Join for Free
              </button>
            </li>
          </ul>


      </div>
      <!-- Right elements -->
    </div>
  </nav>


  



</div>

</template>

<style scoped>
@import '../assets/css/custom.css';
</style>