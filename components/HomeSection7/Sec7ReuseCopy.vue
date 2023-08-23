
<script setup>
const { data:sec7Data } = await useFetch('/api/sec7')

console.log("Section 7 ",sec7Data.value.section7 );

</script>

<template>
    <section>
        <div class="w-[300px] bg-white-300 py-5 mx-3 xl:mx-12 xl:w-[350px]" >

<div class="mx-auto max-w-[270px]">
<div class="max-w-[270px] h-[210px]">
<div class="relative w-[200px] pb-[100%] mx-auto">
    
    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/9e6ecadf2ee386ece6b3838a9c9d6396/Chitranshee_Agrawal_380x380.png?auto=format%2Ccompress&amp;dpr=1&amp;w=202&amp;h=202&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/9e6ecadf2ee386ece6b3838a9c9d6396/Chitranshee_Agrawal_380x380.png?auto=format%2Ccompress&amp;dpr=2&amp;w=202&amp;h=202&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/9e6ecadf2ee386ece6b3838a9c9d6396/Chitranshee_Agrawal_380x380.png?auto=format%2Ccompress&amp;dpr=3&amp;w=202&amp;h=202&amp;q=40 3x" class="_zdxht7" alt="" style="max-width: 202px; max-height: 202px;">
</div>
</div>
</div>

<div class="text-center font-['Source-Sans-Pro',Arial,sans-serif]">
    <p  class="font-[600] text-[#382d8b] leading-[36px] text-[26px]">Chitranshee A.</p>
<p class="text-[1.4rem] xl:text-[1rem]">India</p>
</div>

<div class="w-[70px] mt-[20px] mb-[20px] h-[3px] bg-[#2a73cc] mx-auto"></div>

<div class="text-[20px] leading-[25px] text-black font-['Source-Sans-Pro',Arial,sans-serif] text-center mx-2 xl:w-[260px] xl:mx-auto xl:text-[18px] min-[1600px]:text-[20px] min-[1600px]:leading-[30px]">
    “Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”
</div>


    </div>
    </section>
</template>