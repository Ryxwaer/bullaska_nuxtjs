<template>
  <div v-if="pending" class="text-2xl text-center">
    Loading data...
  </div>
  <div v-else-if="error" class="text-2xl text-center">
    Error loading data
  </div>
  <div v-else>
    <div v-html="post.excerpt" class="text-lg"></div>
    <div class="text-right">
      <NuxtLink :to="`/blog/${post.slug}`"
                class="hover:text-black hover:bg-amber-600 hover:bg-opacity-20 text-gray-800 py-2 px-4 border border-black rounded shadow">
        Čítať viac >>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: String
});

const { data: post, pending, error } = await useFetch(`/api/wp/post/${props.slug}`);
</script>
