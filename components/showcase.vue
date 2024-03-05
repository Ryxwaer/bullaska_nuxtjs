<template>
  <div class="container mx-auto px-10">
    <div v-if="pending" class="text-2xl text-center">
      Loading data...
    </div>
    <div v-else-if="error" class="text-2xl text-center">
      Error loading data
    </div>
    <div v-else class="grid items-center lg:grid-cols-2">
      <transition name="fade">
        <div class="flex flex-col justify-between min-h-[260px] transition-opacity duration-500 ease-in-out py-4 overflow-hidden"
             :class="{ 'opacity-0': !showDescription }">
          <!-- Extract to component -->
          <div>
            <div v-html="dogs[activeSlide].title" class="text-4xl min-h-[88px]" @mouseenter="pauseSwiperAutoplay"
                 @mouseleave="startSwiperAutoplay"/>
            <div v-html="dogs[activeSlide].excerpt" class="text-lg"/>
          </div>
          <div class="text-right">
            <a :href="`/blog/${dogs[activeSlide].slug}`"
                      class="hover:text-black hover:bg-amber-600 hover:bg-opacity-20 text-gray-800 py-2 px-4 border border-black rounded shadow"
                      @mouseenter="pauseSwiperAutoplay" @mouseleave="startSwiperAutoplay">
              Čítať viac >>
          </a>
          </div>
        </div>
      </transition>
      <div>
        <Swiper
            class="swiper-cards w-72 h-72 lg:w-80 lg:h-80"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
            @sliderMove="event => (showDescription = false)"
            @transitionStart="event => (showDescription = false)"
            @transitionEnd="event => (activeSlide = event.realIndex, showDescription = true)"
            @swiper="onSwiper" @click="navigateToBlog(`/blog/${dogs[activeSlide].slug}`)"
        >
          <SwiperSlide v-for="(dog, idx) in dogs" :key="idx">
            <NuxtImg format="webp"
                     :src="dog.featuredMedia"
                     :alt="`Slide ${idx + 1}`"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const {data: dogs, pending, error} = await useFetch(`/api/wp/tag/dog`);

const activeSlide = ref(0);
const showDescription = ref(true);

const mySwiper = ref(null);

function onSwiper(swiper) {
  mySwiper.value = swiper;
}

function pauseSwiperAutoplay() {
  mySwiper.value.autoplay.pause();
}

function startSwiperAutoplay() {
  mySwiper.value.autoplay.resume()
}

const navigateToBlog = (route) => {
  window.location.href = route;
};
</script>

<style scoped>
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
  object-fit: cover;
  cursor: pointer;
}
</style>
