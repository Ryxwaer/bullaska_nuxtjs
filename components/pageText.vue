<template>
  <div v-if="pending" class="text-2xl text-center">
    Loading data...
  </div>
  <div v-else-if="error" class="text-2xl text-center">
    Error loading data
  </div>
  <div v-else>
    <div v-html="post.content" class="text-lg"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: String
});

const { data: post, pending, error } = await useFetch(`/api/wp/pages/${props.slug}`);
</script>
