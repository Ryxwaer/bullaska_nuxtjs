<template>
  <div>
    <div class="relative parallaxContainer sm:h-[600px] h-[500px] items-center justify-center flex-col text-center">
      <div class="absolute flex flex-col justify-end items-center w-full h-full fci">
        <h1 class="text-white font-poppins-bold text-4xl sm:text-6xl bg-black w-[60%] min-h-[80px]">French Bulldog</h1>
        <NuxtImg src="/images/home/fci.png" sizes="102px" />
      </div>
      <div class="absolute w-full h-full bg-no-repeat sm:bg-center bg-140% sm:bg-contain" :style="backgroundStyle"></div>
      <div class="bg-white text-center w-full mb-[182px]" >
        <div class="font-poppins-black sm:text-7xl text-5xl text-white" style="mix-blend-mode: difference;">
          <h1>Welcome to our kennel</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallaxContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
</style>

<script setup>
// Background position state
const yOffset = ref(120);
const yPos = ref(0 - yOffset.value);

// Compute background style reactive property
const backgroundStyle = computed(() => ({
  backgroundImage: `url('/images/home/eyes.jpeg')`,
  backgroundPosition: `center ${yPos.value}px`
}));

// Method to update background position based on scroll
const updateBackgroundPosition = () => {
  const speed = 0.48;
  yPos.value = window.scrollY * speed - yOffset.value;
};

// Listen to scroll event on mount
onMounted(() => {
  window.addEventListener('scroll', updateBackgroundPosition);
});

// Cleanup event listener on component unmount
onUnmounted(() => {
  window.removeEventListener('scroll', updateBackgroundPosition);
});
</script>
