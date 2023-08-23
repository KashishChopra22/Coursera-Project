<template>
    
    <section class="mb-[100px] max-w-[1200px]">
        <div class="grid grid-cols-1 max-w-[575px] w-[100%] bg-pink-300 min-[600px]:mx-auto min-[1024px]:flex min-[1024px]:max-w-[575px]">

            <div class="text-black mx-9 min-[600px]:mx-4 min-[1024px]:bg-green-300">
           
           <p class="text-[2.1rem] leading-[2.5rem] font-bold">The ideal solution for your business</p>
           <p class="mb-[24px] mt-4 mx-1 min-[600px]:w-[85%] min-[600px]:text-[18px] min-[1024px]:w-[100%]">Get the world-class learning and development chosen by top organizations across the globe. All on Coursera for Business.</p>

           <div class="min-[600px]:w-[50%] min-[1024px]:w-[80%]">
            <button type="button" class="text-white font-bold bg-blue-700  text-[1.1rem] rounded-md py-3 w-[100%] mb-[20px]  px-4 hover:bg-blue-900">Discover Coursera for Business</button>
           </div>


           <div class="mx-1 text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] flex">
            <div>
            <p>Upskill a small team? 
            <a class=" text-[#0056d2] underline">Check out Coursera for Teams
            </a>
            </p>
            </div>
            <div class="mt-6 text-[#0056d2] min-[600px]:mt-0 min-[600px]:ml-[160px]">
            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-23" class="css-0 ml-[-150px] "><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5H8v1H2.5v12h12V12h1v6.5h-14v-14zM17.5 2.5H12v-1h6.5V8h-1V2.5z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.646 10.646l9-9 .708.708-9 9-.708-.708z" fill="currentColor"></path></svg>
           </div>
        </div>
            </div>


            <!-- Below Section -->
<div class="max-w-[250px] w-[100%] mx-auto mt-[70px] min-[600px]:max-w-[575px] min-[1024px]:bg-blue-200 min-[1024px]:mt-4 min-[1024px]:ml-8">

<div class="flex" v-for="m in sec8Data.section8[0]" :key="m">
<div class="grid grid-cols" v-for="i in m" :key="i">

<span :class="[i.id==500 && i.id== 700? 'mx-3 && h-[80px]': 'mx-0'] && [i.id==600? 'mx-8 || w-[100%]':'mx-2 || w-[100%]']" class="min-[600px]:h-[80px] min-[600px]:w-[100px] min-[600px]:mx-12 ">   

<img :src="i.img" style="max-width:60%;max-height:97px" class="min-[600px]:max-w-[80%] min-[600px]:w-[80px]" alt="L'OREAL Logo">

</span>
</div>
</div>

<div class="flex mt-9" v-for="m in sec8Data.section8[1]" :key="m">
<div class="grid grid-cols" v-for="i in m" :key="i">

<span :class="[i.id==500 && i.id== 700? 'mx-3 && h-[80px]': 'mx-0'] && [i.id==600? 'mx-8 || w-[100%]':'mx-2 || w-[100%]']" class="min-[600px]:h-[80px] min-[600px]:w-[100px] min-[600px]:mx-12">   

<img :src="i.img" style="max-width:60%;max-height:97px" class="min-[600px]:max-w-[80%] min-[600px]:w-[80px]" alt="L'OREAL Logo">

</span>
</div>
</div>

<div class="flex mt-9" v-for="m in sec8Data.section8[2]" :key="m">
<div class="grid grid-cols" v-for="i in m" :key="i">

<span :class="[i.id==500 && i.id== 700? 'mx-3 && h-[80px]': 'mx-0'] && [i.id==600? 'mx-8 || w-[100%]':'mx-2 || w-[100%]']" class="min-[600px]:h-[80px] min-[600px]:w-[100px] min-[600px]:mx-12">   

<img :src="i.img" style="max-width:60%;max-height:97px" class="min-[600px]:max-w-[80%] min-[600px]:w-[80px]" alt="L'OREAL Logo">

</span>
</div>
</div>

</div>

  </div>
    </section>
</template>

<script setup>
const { data:sec8Data } = await useFetch('/api/sec8Images')

console.log("Section 8 ",sec8Data.value.section8[0] );
</script>