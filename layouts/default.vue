<template>
  <div class="font-poppins">
    <navbar />
    <div class="flex justify-center items-center min-h-screen bg-brown">
      <div class="w-full max-w-6xl p-4 shadow-lg rounded-lg">
        <br />
        <slot />
      </div>
    </div>
    <div class="footer h-32" />
  </div>
</template>

<style>
/* Additional CSS styles if needed */
</style>
<script setup lang="ts">
</script>