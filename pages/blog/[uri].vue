<script setup>

definePageMeta({
  layout: "blog",
});

const route = useRoute();
const uri = route.params.uri;

const { data: postData, pending, error } = await useFetch(`/api/wp/${uri}`);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error loading data for uri "{{ uri }}"</div>
  <div v-else v-html="postData" />
</template>
