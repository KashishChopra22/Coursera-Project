<script setup>
import { useFreeCoursesStore } from '../../store/FreeCourses.js';
const store = useFreeCoursesStore();
const allCourses = ref([])
const pageSize = ref(4);
const active = ref(1);
const tabFilter = ref("all");

async function getAll() {
    await store.getPaginationCourses({ page: active.value, pageSize: pageSize.value, status: tabFilter.value });

    allCourses.value = store.allCoursesEnrolled.courses;
}
onMounted(() => getAll())
const props= defineProps(["id"])
console.log("props",props.id);
</script>

<template>
  
        <div data-te-modal-init
          class="fixed left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[#000000b3] top-0"
          id="staticBackdrop" data-te-backdrop="static" data-te-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div data-te-modal-dialog-ref
            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
            <div
              class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(0, 0, 0, 0.83)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none mt-[120px]">
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
                <!--Modal title-->
               <p>Title:</p>

<input type="text" placeholder="type here..." v-bind="title"/>

                <!--Close button-->
                <button type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss aria-label="Close">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!--Modal body-->
              <div data-te-modal-body-ref class="relative p-4">
       {{ allCourses }}

                </div>

              </div>

            </div>
          </div>
       
</template>