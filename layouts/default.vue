<template>
  <div class="font-work-sans">
    <navbar />
    <div class="flex justify-center items-center min-h-screen bg-brown">
      <div class="w-full max-w-6xl p-4 shadow-lg rounded-lg">
        <br />
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
/* Additional CSS styles if needed */
</style>
<script setup lang="ts">
</script>