<template>
    <div class="container mx-auto">
      <div class="grid items-center lg:grid-cols-2">
        <transition name="fade">
          <div :class="{ 'opacity-0': !showDescription }" class="transition-opacity duration-500 ease-in-out">
            <div class="text-4xl text-center h-16">
              <h1 v-html="dogs[activeSlide].title" />
            </div>
            <p v-html="dogs[activeSlide].excerpt" />
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
          >
            <SwiperSlide v-for="(dog, idx) in dogs" :key="idx">
              <NuxtImg format="webp"
                  :src="dog.featuredMedia"
                  :alt="`Slide ${idx + 1}`" />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
</template>

<script setup>
const { data: dogs, pending, error } = await useFetch(`/api/wp/dogs`);

const width = ref(380);
const activeSlide = ref(0);
const showDescription = ref(true);
</script>

<style scoped>
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
  object-fit: cover;
}
</style>
