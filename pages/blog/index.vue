<script setup>
import { useFetch } from 'nuxt/app';

const { data: postData, pending, error } = await useFetch(`/api/wp/blog-2`);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">
    <b>Error loading data:</b>
    <p>{{ error }}</p>
  </div>
  <div v-else v-html="postData" />
</template>
