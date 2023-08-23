

<script setup>
import {useSection3Store} from '../store/section3.js'

const store= useSection3Store(); 

</script>
<template>

<div class="bg-white mt-3 xl:mt-5 py-2 border-2 xl:border-4 border-[#e5e7e8] xl:mx-[50px] xl:px-[60px] xl:py-[40px] min-[1600px]:mx-[200px] ">
    
    <div class="grid grid-cols-1 xl:grid-cols-2">
    
    <!-- 1st column -->
    <div class="min-[600px]:mx-8 min-[600px]:mt-12 xl:mt-4 min-[1600px]:mt-[20px]">

     <div v-if="store.project">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif]">Project Manager</p>
    </div>
    
    <div  v-else-if="store.dataa">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">Data Analyst</p>
    </div>

    <div  v-else-if="store.ux">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">UX Designer</p>
    </div>
    <div  v-else-if="store.it">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">IT Support Specialist</p>
    </div>
    <div  v-else-if="store.digital">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">Digital Marketer</p>
    </div>
    <div  v-else-if="store.datascientist">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">Data Scientist</p>
    </div>
    <div  v-else-if="store.frontend">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] ">Front-End</p>
    </div>
    <div  v-else-if="store.book">   
    <p class="font-bold text-[1.7rem] font-['Source-Sans-Pro',Arial,sans-serif] "> BookKeeper</p>
    </div>

   
    
    <div v-if="store.project">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Oversee the planning and execution of projects to ensure they’re successful</p>
    </div>

    <div v-if="store.dataa">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Collect, organize, and transform data to make informed decisions</p>
    </div>

    <div v-if="store.ux">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Make digital and physical products easier and more enjoyable to use</p>
    </div>
    <div v-if="store.it">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Evaluate and troubleshoot technology issues so equipment runs smoothly</p>
    </div>
    <div v-if="store.digital">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[110%] min-[1600px]:mt-4">Define and develop digital strategies to deliver business growth through online channels</p>
    </div>
    <div v-if="store.datascientist">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Extract and analyze data to make informed business decisions</p>
    </div>
    <div v-if="store.frontend">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Design and develop the look, feel, function, and user experience of a website</p>
    </div>
    <div v-if="store.book">
        <p class="text-[#323232] mt-1 w-[90%] text-[1.1rem] min-[600px]:w-[100%] min-[1600px]:mt-4">Record financial transactions and manage financial records

</p>
    </div>

    <p class="mt-6 text-[1.3rem] font-bold">Median entry-level salary</p>
    
    <!-- All -->
    <div class="min-[600px]:flex min-[1600px]:mt-4">
    <p class="mt-2 text-[0.95rem] font-['Source-Sans-Pro',Arial,sans-serif] whitespace-nowrap min-[600px]:bg-[#e5e7e8] min-[600px]:w-[50%] min-[600px]:py-2 min-[600px]:font-bold min-[600px]:px-2 min-[600px]:rounded-md">All Occupations</p>
    
    <div class="bg-[#00bcd424] w-[50%] py-[10px] px-[17px] rounded-md min-[600px]:bg-white min-[600px]:pt-4">
        <p class="font-bold min-[600px]:p2">$37,960 <sup>*</sup></p>
    </div>
    </div>
    
    
    <div class="mt-3 min-[600px]:flex min-[1600px]:mt-6">

    <div class="text-[0.95rem] font-['Source-Sans-Pro',Arial,sans-serif] whitespace-nowrap min-[600px]:bg-blue-700 min-[600px]:text-white min-[600px]:rounded-md min-[600px]:max-w-full min-[600px]:w-[290%] min-[600px]:font-bold min-[600px]:px-2 min-[600px]:py-2.5 ">
  <div v-if="store.project"> <p>Project Manager</p></div>
  <div v-if="store.dataa"> <p>Data Analyst</p></div>
  <div v-if="store.ux"> <p>UX Designer</p></div>
  <div v-if="store.it"> <p>IT Support Specialist</p></div>
  <div v-if="store.digital"> <p>Digital Marketer</p></div>
  <div v-if="store.datascientist"> <p>Data Scientist</p></div>
  <div v-if="store.frontend"> <p>Front-End Developer</p></div>
  <div v-if="store.book"> <p>BookKeeper</p></div>
 
   

    </div>
    
    <div class="bg-blue-700 w-[100%] py-[10px] px-[17px] rounded-md text-white font-bold text-[1.2rem] min-[600px]:bg-white min-[600px]:text-black min-[600px]:py-1 mt-2">
    <p>$86,500 <sup>**</sup></p>
    
    </div>
    
    </div>
    
    <div class="mt-9">
        <p>
        <span class="text-[#636363] text-[1rem]">Job openings: <strong class="text-black mt-2">477,722 <sup class="ml-[-2px]">**</sup></strong></span>
    </p>
        <p class="pt-3">
            <span class="text-[#636363] text-[1rem]">Projected 10 year growth: <strong class="text-black mt-2">+12.6% <sup class="ml-[-2px]">***</sup></strong></span>
        </p>
    </div>
    
    </div>
    
    <!-- 2nd column -->
    
    
    
    <div class="grid grid-cols-1  xl:grid xl:mt-[80px] ">
    
        <p class="text-black text-[1.2rem] md:mx-8 xl:text-[1.4rem] font-[600] font-['Source-Sans-Pro',Arial,sans-serif] mt-[60px] min-[600px]:mb-[30px] xl:mb-0 xl:mx-0 "><span>Recommended Professional Certificates</span></p>
    
    <!-- Images -->
    <div class=" xl:grid-cols-2 xl:mt-[30px] md:mt-6 xl:mx-0">
    
    <div class="md:flex md:mx-8 xl:mx-0">
    
        <!-- 1st Image -->
    <div class="mr-5 md:border-2 relative min-w-[200px] w-[100%] min-[600px]:w-[60%] min-[600px]:mb-[40px] md:max-w-[360px] md:w-[50%] xl:w-[350px] h-[100%] cursor-pointer transition duration-150 ease-in-out hover:scale-105">
       
        <div class="h-[216px] overflow-hidden">
    <div v-if="store.project">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=1&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=2&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=3&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 3x" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.dataa">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/bd/69fc60bd454b1485955c680232bd95/082421_Karrim0066-1.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.ux">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/75/32388ec64444d7a2b09297c0b59c56/1200x600_UXD.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.it">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.digital">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a9/8f52253a404302875e0ffea2fc87dc/0_Moses.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.datascientist">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/23/22bc54f77f45a2b057f4ff518d272f/iStock-1169539468.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.frontend">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ed/d25c0d25114924a34754928dbf8273/Front-end-dev-ProCert.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.book">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a4/0ee0209fb444a38ade1afccde6355e/option2.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    </div>
    
    <!-- Content -->
    <div>
        <div class="flex mt-6">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&amp;dpr=1&amp;w=25&amp;h=25&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&amp;dpr=2&amp;w=25&amp;h=25&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&amp;dpr=3&amp;w=25&amp;h=25&amp;q=40 3x" width="25" height="25" alt="Google" style="max-width: 25px; max-height: 25px;" class="mx-4">
        <span class="text-[1.2rem]">Google</span>
    </div>
    
    <div class="mt-2 mx-4 font-['Source-Sans-Pro',Arial,sans-serif]">
        <p v-if="store.project" class=" font-bold text-[1.1rem]  ">Google Project Management</p>
        <p v-if="store.dataa" class=" font-bold text-[1.1rem]  ">Google Data Analytics</p>
        <p v-if="store.ux" class=" font-bold text-[1.1rem]  ">Google UX Design</p>
        <p v-if="store.it" class=" font-bold text-[1.1rem]  ">Google IT Support</p>
        <p v-if="store.digital" class=" font-bold text-[1rem]  ">Google Digital Marketing & E-commerce</p>
        <p v-if="store.datascientist" class=" font-bold text-[1.1rem]  "> IBM Data Science</p>
        <p v-if="store.frontend" class=" font-bold text-[1.1rem]">Meta Front-End Developer</p>
        <p v-if="store.book" class=" font-bold text-[1.1rem]">Intuit Academy BookKeeping</p>


        <p v-if="store.project" class="mt-2 text-[0.9rem]">Skills you'll gain: Organizational Culture, Career Development, Strategic Thinking, Change ...</p>

        <p v-if="store.dataa" class="mt-2 text-[0.9rem]">Skills you'll gain: Spreadsheet, Data Cleansing, Data Analysis, Data Visualization (DataViz), SQL,</p>
        <p v-if="store.ux" class="mt-2 text-[0.9rem]">Skills you'll gain: User Experience(UX), UX Research, Wireframe,Prototype, User...</p>
        <p v-if="store.it" class="mt-2 text-[0.9rem]">Skills you'll gain: Debugging, Encryption Algorithms and Techniques, Customer ...</p>
        <p v-if="store.digital" class="mt-2 text-[0.9rem]">Skills you'll gain: Marketing, E-Commerce, display advertising, Email Marketing, ...</p>
        <p v-if="store.datascientist" class="mt-2 text-[0.9rem]">Skills you'll gain: Data Science, Deep Learning, Machine Learning, Big Data</p>
        <p v-if="store.frontend" class="mt-2 text-[0.9rem]">Cascading Style Sheets(CSS), HTML, UI/UX design, React,Javascript, Web...</p>
        <p v-if="store.book" class="mt-2 text-[0.9rem]">Skills you'll gain: Double-Entry BookKeeping System, BookKeeping, Bank Reconciliations,...</p>
    
    <div class="flex mt-3 text-[0.8rem]">
    <p class="font-bold ">4.8 </p>
    <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-us1a98 text-blue-700 mx-2" id="cds-react-aria-78"><path d="M14.35 6.17a.81.81 0 00-.75-.35H10L8.78 2.06a.88.88 0 00-.43-.48.84.84 0 00-.64 0 .85.85 0 00-.51.52L6 5.82H2.36a.89.89 0 00-.6.23.82.82 0 00.06 1.25l3.09 2.37-1.19 3.76a.83.83 0 00.57 1 .819.819 0 00.71-.11L8 12l3 2.29a.78.78 0 00.52.19h.09a.88.88 0 00.56-.31.85.85 0 00.14-.78l-1.2-3.74 3.08-2.36a.83.83 0 00.16-1.12z" fill="currentColor"></path>
    </svg>
    <p class="text-[#323232]">(82.2k reviews)</p>
    </div>
    
    <ul class="flex whitespace-nowrap mt-4 text-[#323232] text-[0.85rem] xl:text-[0.9rem] font-['Source-Sans-Pro',Arial,sans-serif] xl:mt-2">
        <li >Begineer</li>
        <li class=" px-2 xl:px-2">Professional Certificate</li>
        <li class=" xl:px-2">6 months</li>
    </ul>
    </div>
    </div>
    </div>
    
    
    
    
    
    <!-- 2nd Image -->
    <div class="mt-8 md:mt-0 mr-5 md:border-2 relative min-w-[200px] w-[100%] min-[600px]:w-[60%] md:w-[50%]  xl:w-[350px] h-[100%] cursor-pointer transition duration-150 ease-in-out hover:scale-105 md:max-w-[360px] xl:mx-0" :class="[(store.ux || store.datascientist || store.frontend || store.book)?'hidden':'']">
       
        <div class="h-[216px] overflow-hidden">
            <div v-if="store.project" >
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/78/c4724ddada49db810c11a936e198c4/Projects.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=1&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/78/c4724ddada49db810c11a936e198c4/Projects.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=2&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/78/c4724ddada49db810c11a936e198c4/Projects.png?auto=format%2Ccompress%2C%20enhance&amp;dpr=3&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 3x" alt="" style="max-width: none; max-height: none; min-width: 100%; min-height: 100%;" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.dataa">
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/63/baf9bea98641aeb8fd36a7b1291791/DA-PC_Image.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" style="max-width: none; max-height: none; min-width: 100%; min-height: 100%;" class="rounded-lg min-w-[100%] min-h-[100%] ">
    </div>
    <div v-if="store.it">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/7b/99d363d6ca4ccdbf1257439fe0157c/IBM-Tech-Support-PC.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
    <div v-if="store.digital">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/02/41460a29d744dfa39106941eae2e02/fb-specialization.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50" alt="" class="rounded-lg min-w-[100%] min-h-[100%]">
    </div>
   
    </div>
    
    <!-- Content -->
    <div>
        <div class="flex mt-6">
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=25&amp;h=25&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&amp;dpr=2&amp;w=25&amp;h=25&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&amp;dpr=3&amp;w=25&amp;h=25&amp;q=40 3x" width="25" height="25" alt="IBM" style="max-width: 25px; max-height: 45px;" class="mx-4">
    
        <span class="text-[1.2rem]">IBM</span>
    </div>
    
    <div class="mt-2 mx-4 font-['Source-Sans-Pro',Arial,sans-serif]">
        <p v-if="store.project" class=" font-bold text-[1.1rem]  ">IBM Project Management</p>
        <p v-if="store.dataa" class=" font-bold text-[1.1rem]">IBM Data Analyst</p>
        <p v-if="store.it" class=" font-bold text-[1.1rem]">IBM IT Support</p>
        <p v-if="store.digital" class=" font-bold text-[1.2rem]">Meta Social Media Marketing</p>
      

        <p v-if="store.project" class="mt-2 text-[0.9rem]">Skills you'll gain: Organizational Culture, Career Development, Strategic Thinking, Change ...</p>
        <p v-if="store.dataa" class="mt-2 text-[0.9rem]">Skills you'll gain: Microsoft Excel, Python Programming,Data Analysis, Data Visualize, ...</p>
        <p v-if="store.it" class="mt-2 text-[0.9rem]">Networking/Cybersecurity Essentials, IT Fundamentals</p>

        <p v-if="store.digital" class="mt-6 text-[0.9rem]">Skills you'll gain: Performance Advertising, Digital Marketing, Brand Management,...</p>
        
        
    <div class="flex mt-3 text-[0.8rem]">
    <p class="font-bold ">5.10 </p>
    <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-us1a98 text-blue-700 mx-2" id="cds-react-aria-78"><path d="M14.35 6.17a.81.81 0 00-.75-.35H10L8.78 2.06a.88.88 0 00-.43-.48.84.84 0 00-.64 0 .85.85 0 00-.51.52L6 5.82H2.36a.89.89 0 00-.6.23.82.82 0 00.06 1.25l3.09 2.37-1.19 3.76a.83.83 0 00.57 1 .819.819 0 00.71-.11L8 12l3 2.29a.78.78 0 00.52.19h.09a.88.88 0 00.56-.31.85.85 0 00.14-.78l-1.2-3.74 3.08-2.36a.83.83 0 00.16-1.12z" fill="currentColor"></path>
    </svg>
    <p class="text-[#323232]">(10k reviews)</p>
    </div>
    
    <ul class="flex whitespace-nowrap mt-4 text-[#323232] text-[0.85rem] xl:text-[0.9rem] font-['Source-Sans-Pro',Arial,sans-serif] xl:mt-2">
        <li >Begineer</li>
        <li class=" px-2 xl:px-2">Professional Certificate</li>
        <li class=" xl:px-2">6 months</li>
    </ul>
    
    
    
    </div>
    </div>
    </div>







    </div>
    <div class="grid grid-cols-1">
    <div class="mt-12 flex justify-end bg-white min-[600px]:w-[50%] min-[600px]:ml-[60px] md:mx-[58%] md:mt-0 md:max-w-[240px]">
    
    <p class="text-black font-['Source-Sans-Pro',Arial,sans-serif] text-[1rem]  font-bold ">Explore All Certificates </p>
    
    <span class="mx-1 mt-0.5"><svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-6" class="css-0"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor"></path></svg></span>
    </div>
    </div>
    
    </div>
    
    
    
    
    </div>
    
    </div>
    
    
    
    <!-- Below explore -->
    
    <div class="mt-8 min-[600px]:flex xl:w-[48%] xl:mt-[-350px] min-[1600px]:mt-[-270px] min-[1600px]:w-[50%] ">
    
    <div class="relative overflow-hidden w-[136px] h-[136px] rounded-lg left-[35%] min-[600px]:w-[200px] h-[80px] min-[600px]:left-[0%] min-[600px]:mx-4 min-[600px]:mt-[2%] md:left-[3%] md:mt-2 min-[1400px]:mx-2 min-[1600px]:w-[20%]">

    <div v-if="store.project">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7Ft9HzmpamG0aCN75HfACC/25f48cbbaa9a585689351cf97af573c8/adrienne_testimonial_image.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=136" class="absolute h-[100%]" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.dataa">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/63pGpfhMeKIJrYBzpdQOnI/34ae6d8d0cf14f0523611a8998dfeaff/Rachel_L.png?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.ux">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2SOYF4ZFWTLtCs4LB8zeM9/9cff11144c5008abbfa613bbf363ea3a/Daijah_Reese.png?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.it">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2MeIOQ5Fi0Pd4D7fMLjUUq/d090904a4a3a6131334884e08c3f23f4/chukwuma.png?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.digital">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/27pQhthyhIEPsaxSlr0LFa/774f94e7410035dc3713e3d6ab256fd3/hillary_testimonial_image.jpg?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.datascientist">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1KSacHbNBDciD08b6rfqDK/249361c7cc3897b7c5c891dd7f9538c0/emma_testimonial_image.jpg?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.frontend">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2wr2pSDJ9eHydt2Ru8IUlW/a5e8f97d46f90b02c72a51aa1af3414b/Julio_Rodriguez.jpg?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    <div v-if="store.book">
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1KSacHbNBDciD08b6rfqDK/249361c7cc3897b7c5c891dd7f9538c0/emma_testimonial_image.jpg?auto=format%2Ccompress&dpr=1&w=&h=136" class="absolute h-[100%] rounded-full" style="max-height:136px" alt="Image Loading...">
    </div>
    
    </div>
    
    <div class="mt-6 text-center mx-1 text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] min-[600px]:text-left min-[600px]:mt-2 xl:mx-[50px] xl:text-[0.9rem] min-[1600px]:w-[60%] min-[1600px]:mx-0">
        <div v-if="store.project">
        <p>
            <span>"Earning my Google Project Management: Professional Certificate is one of the biggest accomplishments I've made in my education, and it was a key stepping stone to my new career."</span>
        </p>
    
        <p class="mt-4">- Adrienne</p>
    </div>
    <div v-if="store.dataa">
        <p>
            <span>"For anyone starting out as a data analyst, this is a great introduction and is very inspiring. The content was well paced and was accessible to people just starting out. I liked the variety of the assignments present in the program. "</span>
        </p>
    <p class="mt-4">-  Rachel L.</p>
    </div>
    <div v-if="store.ux">
        <p>
            <span>"The program really helped me to mold my idea of what a user experience designer's work should be. Being able to share my work through peer feedback, and really see my product come together as the courses progressed was encouraging, and I could directly see my skills improve and my toolkit expand."</span>
        </p>
    <p class="mt-4">- Daijah R.</p>
    </div>
    <div v-if="store.it">
        <p>
            <span>"I believe the certificate showed my then prospective employer proof of my skills and qualification especially coming from a global brand, Google."</span>
        </p>
    <p class="mt-4">- Chukwuma E.</p>
    </div>
    <div v-if="store.digital">
        <p>
            <span>"After a year of taking courses on Coursera, I can happily say that I have become a confident and aspiring entrepreneur and a better marketing and advertising professional."</span>
        </p>
    <p class="mt-4">- Hillary G.</p>
    </div>
    <div v-if="store.datascientist">
        <p>
            <span>"Being able to complete it and having done that while also becoming a new mother and being able to get the internship made me feel really confident and like I could learn absolutely anything."</span>
        </p>
    <p class="mt-4">- Emma S.</p>
    </div>
    <div v-if="store.frontend">
        <p>
            <span>"Without a doubt, the web development courses on Coursera were instrumental in helping me build a new career. I'd say that 80% of my current skills were gained on Coursera."</span>
        </p>
    <p class="mt-4">- Julio R.</p>
    </div>
    <div v-if="store.book">
        <p>
            <span>"I took this course because my husband and I opened a new business and I wanted to be helpful. This course has helped me understand bookkeeping and also, given me confidence in becoming a bookkeeper. I love how interactive and (although online) Hands on it is. Thank you!"</span>
        </p>
    <p class="mt-4">- Christina</p>
    </div>
    </div>


    </div>
    
    <div class="max-w-[100%] text-[#636363] mt-[10%] pt-[35px] text-[0.88rem] font-['Source-Sans-Pro',Arial,sans-serif] mx-2 md:mt-[5%] md:mx-[50px] lg:mt-[4%] xl:text-[0.95rem] xl:mt-[18%]  min-[1600px]:mt-[15%]">
    
        <pre class="whitespace-pre-wrap font-['Source-Sans-Pro',Arial,sans-serif] ">* Employment, Wages, and Projected Change in Employment by Typical Entry-level Education : U.S. Bureau of Labor Statistics. Sept. 2022, www.bls.gov/emp/tables/education-summary.htm                                                                                                                                                                  
** Median salary and job opening data are sourced from United States Lightcast™ Job Postings Report. Data for job roles relevant to featured programs (1/1/22-12/31/22)
*** Growth rate data is sourced from United States Lightcast™ Job Postings Report. Data for job roles relevant to featured programs (1/1/22-12/31/22)</pre>
    </div>
    </div>


    <!-- <Section4Headings /> -->
</template>