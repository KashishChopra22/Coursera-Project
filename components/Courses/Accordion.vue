
<script setup>

const props = defineProps(["topicNames"])
const getId=(m)=>{
    return "#abc"+m;
}

</script>

<template>
    <div v-for="m in topicNames">
        <div id="accordionExample">
            <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                <h2 class="mb-0" id="headingOne">
                    <button
                        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-[1.5rem]  bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 transition hover:z-[2] focus:z-[3] focus:outline-none"
                        type="button" data-te-collapse-init data-te-collapse-collapsed :data-te-target=getId(m.id) aria-expanded="true"
                        aria-controls="collapseOne">
                        {{ m.topic_name }}
                        <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                </h2>
                <div :id="'abc'+m.id" class="!visible" data-te-collapse-item data-te-collapse-show aria-labelledby="headingOne"  
                    >
                    <div class="px-5 py-4 text-[1.2rem]" data-te-parent="#accordionExample">
                        {{ m.topic_description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>