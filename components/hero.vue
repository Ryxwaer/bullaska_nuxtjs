<template>
  <div>
    <div class="relative parallaxContainer sm:h-[600px] h-[500px] items-center justify-center flex-col text-center">
      <div class="absolute flex flex-col justify-end items-center w-full h-full fci">
        <h1 class="text-white font-poppins-bold text-4xl sm:text-6xl bg-black w-[60%] min-h-[80px]">French Bulldog</h1>
        <img sizes="102px" src="https://upload.wikimedia.org/wikipedia/commons/6/60/FCI_logo.svg" alt="FCI" style="width: 102px; filter: grayscale(1);" />
      </div>
      <div class="hidden md:block absolute w-full h-full bg-no-repeat sm:bg-center bg-140% sm:bg-contain" :style="backgroundStyle"></div>
      <div class="md:hidden absolute w-full h-full bg-no-repeat sm:bg-center bg-140% sm:bg-contain" :style="backgroundStyleMobile"></div>
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
const yPosMobile = ref(0 - yOffset.value / 2);

// Compute background style reactive property
const backgroundStyle = computed(() => ({
  backgroundImage: `url('/images/home/eyes.jpeg')`,
  backgroundPosition: `center ${yPos.value}px`
}));

const backgroundStyleMobile = computed(() => ({
  backgroundImage: `url('/images/home/eyes.jpeg')`,
  backgroundPosition: `center ${yPosMobile.value}px`
}));

// Method to update background position based on scroll
const updateBackgroundPosition = () => {
  const speed = 0.48;
  yPos.value = window.scrollY * speed;
  yPosMobile.value = yPos.value - yOffset.value / 2;
  yPos.value = yPos.value - yOffset.value;
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
