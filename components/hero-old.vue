<template>
  <div class="container overflow-hidden">
    <NuxtImg src="/images/home/fci.png" sizes="102px" style="margin-bottom: 0" class="fci" />
    <div class="bg-black text-center sub">
      <div class="font-poppins-bold text-6xl text-white">
        <h1>French bulldog</h1>
      </div>
    </div>
    <div
        class="bg-fixed bg-center h-[560px] bg-no-repeat justify-center items-center ease-in-out"
        :style="{ backgroundImage: `url('/images/home/eyes.jpeg')`, backgroundPositionY: `54px` }"
    >
    </div>
    <div class="bg-white text-center heading">
      <div class="font-poppins-black text-7xl text-white" style="mix-blend-mode: difference;">
        <h1>Welcome to our kennel</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const parallaxContainer = ref(null);

const handleScroll = () => {
  const scrollSpeedFactor = 0.45;
  const offset = window.pageYOffset * scrollSpeedFactor - 54;
  parallaxContainer.value.style.backgroundPositionY = `${-offset}px`;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  min-height: 560px;
  position: relative;
}

.heading {
  width: 93.9%;
  margin-bottom: 200px;
}

.sub {
  width: 60%;
  min-height: 80px;
  position: absolute;
  margin-bottom: 112px;
}

.fci {
  position: absolute;
  margin-bottom: 0px;
  margin-left: 10px;
}
</style>