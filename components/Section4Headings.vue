
<script setup>
const props= defineProps(['title','heading', 'desc'])

</script>

<template>

    <section class="mt-[90px] mb-4 mx-2 min-[1024px]:mt-[130px] min-[1600px]:mx-[160px]">
        <div class="min-[1024px]:mx-8 min-[1440px]:mx-12">
        <div class="text-[#382d8b] text-[1.22rem] tracking-[-0.1px] mb-[15px] font-[600] font-['Source-Sans-Pro',Arial,sans-serif] min-[1024px]:text-[1.3rem]">
            <p>{{ title }}</p>
        </div>

        <div class="text-black text-[2rem] font-['Source-Sans-Pro',Arial,sans-serif] tracking-[-0.1px]  mb-[15px] min-[1024px]:text-[2.5rem]">
            <p>{{ heading }}</p>
        </div>

        <div class="text-black text-[1.2rem] font-['Source-Sans-Pro',Arial,sans-serif] tracking-[-0.1px] mb-[15px]">
            <p>{{ desc }}</p>

        </div>
        </div>
    </section>
</template>