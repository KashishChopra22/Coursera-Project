
//    style="width: 602px; height: 222px;"

<script setup>
const props = defineProps(['m'])
</script>

<template>


    <div class=" px-8 min-[1024px]:px-1 min-[1024px]:mt-4">
        <p v-if="m.is_free === true"
            class="hidden md:flex bg-white min-[1024px]:mx-2 min-[1024px]:px-4 min-[1024px]:mt-[10px] min-[1024px]:absolute min-[1024px]:rounded-lg">
            Free</p>

        <div class="flex justify-between min-[1024px]:grid min-[1024px]:grid-cols-1 xl:w-[80%]">

            <div>
                <div class="flex">

                    <div class="w-[34px] h-[34px] min-[1024px]:hidden">
                        <img v-if="m.Category.name == 'Toys'"
                            src="https://cdn.pixabay.com/photo/2015/10/25/14/43/bucket-1005891_640.jpg" alt="Network error">
                        <img v-if="m.Category.name == 'Clothing'"
                            src="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_640.jpg"
                            alt="Network error">

                    </div>
                  
                </div>
                <div class="min-[1024px]:mt-[200px] py-[20px] mt-[-20px] min-[1024px]:mx-2">

                    <p class=" min-[1024px]:text-[1.2rem] font-['Playfair-Display', serif]"><strong>Title:</strong>{{
                        m.title }}</p>

                    <p
                        class=" min-[1024px]:text-[1.2rem] animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                        <strong>Level: {{ m.level }}</strong>
                    </p>
                    <p class="text-gray-700 font-bold">Category: {{ m.Category.name }}</p>
                   

                </div>

            </div>

   <div class=" w-[74px] h-[44px] min-[1024px]:order-first min-[1024px]:w-[300px] min-[1024px]:mt-0 mt-[50px] ">
                 <img :src="m.CourseThumbnail.filepath" alt="Network error" class="min-[1024px]:rounded-lg  h-[62px] min-[992px]:h-[90px] min-[992px]: w-[380px]  min-[1024px]:h-[222px] xl:w-[602px] xl:h-[222px] min-[1600px]:w-[700px]" >
            </div> 
            
          
            

        </div>
    </div>
</template>

