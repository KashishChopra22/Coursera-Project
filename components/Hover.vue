


<script setup> 
const props= defineProps(['title1', 'title2', 'title3','title1para', 'title2para','title1BirlaPara', 'title1Birla','title1Michigan','title1MichiganPara','title1Illinos', 'title1IllinosPara', 'title1Colorado',
'title1ColoradoPara','title1Champaign', 'title1ChampaignPara','title1Arizona','title1ArizonaPara','title1Button','title1img1','title1img2','title1img3','title1img4','title1img5', 'title1img6', 'title2img1', 'title2img2',

'title2IBM1', 'title2IBM2', 'title1IBMpara','title1IBMlist','title2Google1',
'title2Google2','title2Google3',

'title31', 'title32', 'title33', 'title34', 'title35', 'title36', 'title37', 'title38', 'title39', 'title310', 'title311', 'title312', 'title313', 'title314', 'title315', 'title316'])

</script>

<template>
    
<div class="hidden  shadow-[rgba(0, 0, 0, 0.25) 0px 4px 4px] inline-block dataScienceMenu">
    <div class="fixed h-[1px] w-[1px] mx-[-1px] z-[100000] top-[113px] ml-[219px] inline-block max-[1480px]: left-[161px] max-[1480px]:top-[121px]">
    
    <div class="fixed w-[940px] h-[90.5vh] bg-white max-[1400px]:w-[850px] max-[1300px]:w-[700px] max-[1105px]:w-[600px]">
    
    <div class="overflow-y-scroll top-[0px] h-[90.5vh] py-[38px] px-[56px] max-[1300px]:w-[100%]">
    
    <div>
    
     <p class="font-['OpenSans-Bold, OpenSans, Arial, sans-serif'] text-[20px] leading-[24px] font-bold pb-[20px]">Data Science</p>

    </div>
    
<div class="grid my-4 grid-cols-2 min-[1300px]:grid-cols-3" >

<div class="mx-3 text-lg ">
<h4 class="border-b-2 border-[#CCCC]"><strong>{{props.title1}}</strong></h4>

<p class="text-[15px] mt-5 text-[#666666] leading-[20px]">{{ props.title1para }}</p>

<div class="flex mt-7">
<div>
    <img :src="title1img1" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]">{{ props.title1Birla }}</p>
    <p class="text-[16px] leading-[20px]">{{ props.title1BirlaPara }}</p>
</div>
</div>

<div class="flex mt-5">
<div>
    <img :src="title1img2" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]">{{props.title1Michigan}}</p>
    <p class="text-[16px] leading-[20px]">{{props.title1MichiganPara}}</p>
</div>
</div>



<div class="flex mt-7">
<div>
    <img :src="title1img3" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]">{{ props.title1Illinos }}</p>
    <p class="text-[16px] leading-[20px]">{{ props.title1IllinosPara }}</p>
</div>
</div>


<div class="flex mt-7">
<div>
    <img :src="title1img4" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]">{{ props. title1Colorado}}</p>
    <p class="text-[16px] leading-[20px]">{{ props.title1ColoradoPara }}</p>
</div>
</div>


<div class="flex mt-7">
<div>
    <img :src="title1img5" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]"> {{ props.title1Champaign }}</p>
    <p class="text-[16px] leading-[20px]">{{ props.title1ChampaignPara }}</p>
</div>
</div>


<div class="flex mt-7">
<div>
    <img :src="title1img6" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[15px] text-[#666666] leading-[20px]">{{ props.title1Arizona }} </p>
    <p class="text-[16px] leading-[20px]">{{ props.title1ArizonaPara }}</p>
</div>
</div>


<div class="mt-9">
    <button type="button" class="
   text-blue-700  border-2 border-blue-500 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  text-[16px]  hover:text-white px-5 py-1.5 mr-2 mb-[120px] "><strong>{{ props.title1Button }}</strong></button>
</div>


</div>

<!-- 2nd Column -->
<div class="text-lg ml-8  w-[290px] order-1 min-[1300px]:order-0 mt-[-160px] min-[1300px]:mt-0">

    <p class="border-b-2 border-[#CCCC]"><strong>{{props.title2}}</strong></p>
 <p class="text-[15px] mt-5 text-[#666666] leading-[20px]">{{props.title2para}}</p>
 <div class="flex mt-7">

<div> 
    <img :src="title2img1" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[16px] leading-[20px]"> {{ props.title2IBM1 }}</p>
    
    <div class="flex text-[#666666] text-[16px]" >
    <p class="">{{ props.title1IBMpara }} </p>
    <ul style="list-style: disc;" class="pl-7"><li>{{  props.title1IBMlist }}</li></ul>
    </div>

</div>
</div>


<div class="flex mt-5">

<div> 
    <img :src="title2img1" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[16px] leading-[20px]"> {{ title2IBM2 }}</p>
    
    <div class="flex text-[#666666] text-[16px]" >
    <p class="">{{props.title1IBMpara}} </p>
    <ul style="list-style: disc;" class="pl-7"><li>{{ props.title1IBMlist }}</li></ul>
    </div>

</div>
</div>


<div class="flex mt-5">

<div> 
    <img :src="title2img2" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[16px] leading-[20px]">{{ props.title2Google1 }} </p>
    
    <div class="flex text-[#666666] text-[16px]" >
    <p class="">{{props.title1IBMpara}} </p>
    <ul style="list-style: disc;" class="pl-7"><li>{{ props.title1IBMlist }}</li></ul>
    </div>

</div>
</div>

<div class="flex mt-5">

<div> 
    <img :src="title2img2" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[16px] leading-[20px]"> {{ props.title2Google2}}</p>

</div>
</div>

<div class="flex mt-5">

<div> 
    <img :src="title2img2" style="max-width: 36px; max-height: 36px;">
</div>
<div class="ml-2">
    <p class="text-[16px] leading-[20px]"> {{ props.title2Google3 }}</p>
  

</div>
</div>

<div class="mt-9">
    <button type="button" class="
   text-blue-700  border-2 border-blue-500 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  text-[16px]  hover:text-white px-3 py-1.5 mr-2 mb-[120px] "><strong>{{ props.title1Button }}</strong></button>
</div>

</div>

<!-- 3rd Column -->
<div class="ml-[85px] text-lg order-0 min-[1300px]:order-1 ">
    <p class="border-b-2 border-[#CCCC]"><strong>{{ props.title3 }}</strong></p>

<div class="mt-9 text-[16px] leading-[20px] ">
<p class="mb-6">{{ props.title31 }}</p>
<p class="mb-6">{{ props.title32 }}</p>
<p class="mb-6">{{ props.title33 }}</p>
<p class="mb-6">{{ props.title34 }}</p>
<p class="mb-6">{{ props.title35 }}</p>
</div>

<div class="mt-[110px]">
<p class="border-b-2 border-[#CCCC]"><strong> {{ props.title36 }} </strong></p>

<div class="mt-4 text-[16px] leading-[20px] ">
<p class="mb-6">{{ props.title37 }}</p>
<p class="mb-6">{{ props.title38 }}</p>
<p class="mb-6">{{ props.title39 }}</p>
<p class="mb-6">{{ props.title310 }}</p>
<p class="mb-6">{{ props.title311 }}</p>
<p class="mb-6">{{ props.title312 }}</p>
<p class="mb-6">{{ props.title313 }}</p>
<p class="mb-6">{{ props.title314 }}</p>
<p class="mb-6">{{ props.title315 }}</p>
<p class="mb-6">{{ props.title316 }}</p>

<div class="mt-9">
    <button type="button" class="
   text-blue-700  border-2 border-blue-500 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  text-[16px]  hover:text-white px-3 py-1.5 mr-2 mb-[120px] "><strong>View all skills</strong></button>
</div>
</div>

</div>

</div>


</div>

    </div>
    </div>
    
    </div>
    
    </div>
</template>
    
<style scoped>
@import '../assets/css/custom.css';
</style>