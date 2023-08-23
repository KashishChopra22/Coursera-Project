<script setup>

useHead({
  title: 'Coursera- Learn Everything',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
});
</script>

<template>

    <div>



<BlackNav />

<Navbar />


  <div>
<slot />
    </div>



</div>

</template>

<style scoped>
@import '../assets/css/custom.css';
</style>