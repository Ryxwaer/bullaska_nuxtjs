<template>

  <hero />

  <div class="font-poppins fluid-padding">
    <!--
    <div class="flex justify-center">
      <p class="font-satisfy text-6xl text-amber-100">Welcome to our kennel</p>
    </div>
    -->

    <loreipsum />

    <div class="h-12" />
    <div class="text-4xl font-poppins-bold">
      Naše bulldočky:
    </div>

    <showcase />

    <loreipsum />

    <lazy-contacts />
  </div>
</template>

<script>
</script>

<style scoped>
.fluid-padding {
  padding-left: clamp(0rem, 6vw - 2rem, 24rem);
  padding-right: clamp(0rem, 6vw - 2rem, 24rem);
}
</style>