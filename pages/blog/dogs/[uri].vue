<template>
  <div class="flex-col justify-center items-center">
    <div v-if="pending" class="text-2xl text-center">
      Loading...
    </div>
    <div v-else-if="error" class="text-2xl text-center">
      Error loading data for uri "{{ uri }}"
    </div>
    <div v-else v-html="postData" class="w-full"/>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "blog",
});

const route = useRoute();
const uri = route.params.uri;

const {data: postData, pending, error} = await useFetch(`/api/wp/rendered/${uri}`);
</script>