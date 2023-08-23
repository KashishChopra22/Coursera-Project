
<script setup>
const props = defineProps(["m"])
function getStr(str) {
  let a = str?.split(' ').slice(0, 2).join(' ');
  return a
}
</script>
<template>

 
  <div class="px-8 my-4 min-[1024px]:px-1 min-[1024px]:mt-4 ">
    <p v-if="m.is_free"
      class="bg-white min-[1024px]:mx-2 min-[1024px]:px-4 min-[1024px]:mt-[10px] min-[1024px]:absolute min-[1024px]:rounded-lg">
      Free</p>

    <div class="flex justify-between mt-2 min-[1024px]:grid grid-cols-1">

      <div>
        <div class="flex">

          <div class=" w-[74px] h-[44px] min-[1024px]:order-first min-[1024px]:w-[300px] min-[1024px]:mx-0 ">

            <img :src="m.CourseThumbnail?.filepath" alt="Network error" class="min-[1024px]:rounded-lg">
          </div>
          <p class="mx-2 min-[1024px]:mx-0 min-[1024px]:hidden">{{ m.status }}</p>



        </div>
        <div class="min-[1024px]:mt-[200px]">

          <p class="my-2 min-[1024px]:text-[1.2rem] font-['Playfair-Display', serif]">
            <strong>Title:</strong>{{ getStr(m.title) }}
          </p>
          <p
            class="my-2 min-[1024px]:text-[1.2rem] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
            <strong>Level: {{ m.level }}</strong>
          </p>



          <p class="text-gray-700 font-bold"> {{ m.description }}</p>


          <p class="text-red-700 font-bold mt-6"> {{ m.Category.name }}</p>
          <p class="text-red-700 font-bold"> category id {{ m.Category.id }}</p>
        </div>

      </div>


    </div>
  </div>
</template>