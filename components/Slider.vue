<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const settings = reactive({
  settings: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  breakpoints: {
    200:{
      itemsToShow: 1,
      snapAlign: "center",
    },
    // 700px and up
    700: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    1000: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // 1024 and up
    1440: {
      itemsToShow: 4,
    },
  },
});


const props= defineProps(['slider1Img','slider1Details','slider3Bottom'])
console.log("props data:", props.slider1Img);
</script>
 
 <template>
  <div
    class="xl:h-[100%] min-[1600px]:mx-[10%] relative bg-white max-w-[100%] pt-5"
  >
  

    <carousel
      items-to-show=4.9
      :snapAlign="'start'"
      :breakpoints="settings.breakpoints"
      pagination-size="3"
      :navigationEnabled="true"
      paginationColor="#7e7e7e"
    >


<template v-for="slide in slider1Img" :key="slide">
    <slide v-for="m in slide" :key="m.id">

     
        <div
          class="relative xl:min-h-[215px] h-[100%] mx-2 w-[300px] min-[700px]:mx-auto xl:mx-[20%] bg-white mb-6"
        >
          <div class="w-[300px]">
            <img
              :src="m.img"
              alt="Network Error"
              class="min-h-[100%] min-w-[100%] w-[300px] max-h-none max-w-none object-cover rounded-t-xl xl:px-2 "
            />
          </div>

          <div>
            <div class="flex w-[100%] mx-4 mt-3">
              <img
                :src="m.logo"
                alt="Network error"
                class="max-w-[25px] max-h-[25px] h-[25px] w-[25px] mr-2"
              />
              <p
                class="text-[#636363] text-[0.9rem] font-['Source-Sans-Pro',Arial,sans-serif]px-2"
              >
                {{ m.logoTitle }}
              </p>
            </div>

            <div
              class="mt-2 text-black text-[1.25rem] font-bold w-[80%] mx-4 text-left leading-[-1]"
            >
              <p class="h-[60px]">{{ m.heading }}</p>




            <template v-for="a in slider1Details" :key="a">
               <div class="flex mt-2 text-[#0056d2]"> 
                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-kpcfpr" id="cds-react-aria-27"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.94 2.441l8.758 4.379-8.758 4.379L1.182 6.82 9.94 2.441zM3.418 6.82l6.522 3.261 6.522-3.261L9.94 3.559 3.418 6.82z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.62 11.48V8.73h1v2.75c0 .487.293.987.893 1.388.596.399 1.452.662 2.427.662.975 0 1.83-.263 2.427-.662.6-.4.893-.9.893-1.388V8.73h1v2.75c0 .923-.557 1.698-1.337 2.22-.784.523-1.838.83-2.983.83s-2.2-.307-2.983-.83c-.78-.522-1.337-1.297-1.337-2.22z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.493 6.597a.5.5 0 01.67-.224l6.79 3.39a.5.5 0 01.277.447v2.12a.5.5 0 11-1 0v-1.81L9.717 7.266a.5.5 0 01-.224-.67z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.008 11.868A1.78 1.78 0 0118.5 13.63v3.87h-3.55v-3.87a1.78 1.78 0 011.058-1.762zm.717.849a.78.78 0 00-.777.849l.002.022V16.5h1.55v-2.912l.002-.022a.78.78 0 00-.777-.849z" fill="currentColor"></path></svg>


                <p class="text-[0.95rem] font-['Source-Sans-Pro',Arial,sans-serif] px-2">{{ a.earnDegree }}</p>
               </div> 

               <p class="text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] mx-1">
                 {{ a.degree }}
               </p>



            </template>

<div class="text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] mx-1">
            <!-- <p :class="[m.id === 40 ? 'mt-[70px]': 'mt-12']  "> -->
            <p class="mt-12 ">
                 {{ m.bottom }}
              </p>
</div>


<div v-for="course in slider3Bottom" :key="course">
  <p class=" text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] mx-1 pb-0">
                 {{ course }}
               </p>

</div>

            </div>
          </div>
        </div>
      </slide> 
</template>

      <template #addons>
        <navigation/>
        <pagination/>
      </template>

    </carousel>

  </div>

  <div class="flex text-[#0056d2] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif] justify-center mt-8 font-bold">
  <p>Explore Degrees</p>
  <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-20" class="css-0 mx-2"><path d="M9 12.46H2V7.53h7V2l9 8-9 8v-5.54z" fill="currentColor"></path></svg>
</div>

</template> 
