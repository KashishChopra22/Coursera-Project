<script setup>
import LoginSection2 from '../../components/After_Login/LoginSection2.vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { getCoursesData } from '../../composable/editData.js'




const icon= "https://img.icons8.com/?size=1x&id=31340&format=png" 



const freeCourseHeading = "Explore Paid Courses"
const { getAllcourses, allCourses } = getCoursesData();

const paidUrl = ref('http://localhost:3000/course/all')
const paidCourses = ref([])

async function getData() {
  await getAllcourses(paidUrl.value);
  console.log("paid", allCourses.value);

  paidCourses.value = allCourses.value.courses.filter((e) => e.is_free == false);
  console.log("a", paidCourses.value);
}


getData();

const settings = reactive({
  settings: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  breakpoints: {
    200: {
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




const router= useRouter();
function handleNext(slug)
{
  router.push(`/courses-home/${slug}`)
}
</script>

<template>
  
  <LoginSection2 :freeCourseHeading="freeCourseHeading" :icon="icon"></LoginSection2>


  <div class="xl:h-[100%] min-[1600px]:mx-[10%] relative bg-white max-w-[100%] mx-auto pt-5">


    <carousel items-to-show=4 :snapAlign="'start'" :breakpoints="settings.breakpoints" pagination-size="3"
      :navigationEnabled="true" paginationColor="#7e7e7e">


      <template v-for="m in paidCourses" :key="m.id">

     
        <slide>
     
          <div class="relative xl:min-h-[215px] h-[100%] mx-2 w-[300px] min-[700px]:mx-auto xl:mx-[20%] bg-white mb-6">
         <div class="w-[300px] rounded-lg">
                <img 
                  :src="m.CourseThumbnail.filepath"
                  alt="Network Error"
                  class="min-h-[100%] min-w-[100%] w-[300px] max-h-none max-w-none object-cover rounded-lg "
                />
              </div> 

            <div class="flex w-[100%] mx-4 mt-3 h-[80px]">
              <p class="text-black text-[1.3rem] font-['Source-Sans-Pro',Arial,sans-serif] pr-4">
                {{ m.title }}
              </p>
            </div>

            <div class="flex w-[100%] mt-3">

              <p class="text-[#636363] text-[1rem] font-['Source-Sans-Pro',Arial,sans-serif]">
                {{ m.description }}
              </p>
            </div>
           

            
            <div>

              <button type="button" class="mt-3 bg-green-700 px-4 py-2 rounded-lg text-white w-full hover:bg-green-800 text-[1.1rem]" @click="handleNext(m.slug)"
              >Explore</button>


            
            </div>
        



         

          </div>



        </slide>
      </template>

      <template #addons>
        <navigation />
        <pagination />
      </template>

    </carousel>


         
  </div>


</template>