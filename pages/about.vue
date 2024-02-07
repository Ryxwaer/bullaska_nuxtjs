<script setup>

definePageMeta({
  layout: "blog",
});

const { data: postData, pending, error } = await useFetch(`/api/wp/rendered/about-s`);
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div v-if="pending" class="text-2xl text-center">
      Loading...
    </div>
    <div v-else-if="error" class="text-2xl text-center">
      Error loading data for About
    </div>
    <div v-else v-html="postData" class="w-full"/>
  </div>
</template>
