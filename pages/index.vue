<template>
  <div class="font-work-sans text-xl fluid-padding">
    <!--
    <div class="flex justify-center">
      <p class="font-satisfy text-6xl text-amber-100">Welcome to our kennel</p>
    </div>
    -->

    <loreipsum />

    <showcase />

    <loreipsum />

    <lazy-contacts />
  </div>
</template>

<script>
</script>

<style>
.fluid-padding {
  padding-left: clamp(0rem, 6vw - 2rem, 24rem);
  padding-right: clamp(0rem, 6vw - 2rem, 24rem);
}
</style>