<script setup>
const slides = ref([
  {
    path:'/images/neska.jpg', description: 'Neska: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ornare erat. Praesent quis euismod nisl. Mauris sit amet rutrum urna. Donec id purus ullamcorper, consectetur mi eu, consequat eros. Nullam faucibus consectetur velit, vel posuere nulla elementum accumsan. Donec ultricies ex tellus, vitae volutpat odio pulvinar nec. Nulla dictum varius ipsum, nec auctor ipsum placerat vitae.'
  },
  {
    path:'/images/anca.jpg', description: 'Anicka: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ornare erat. Praesent quis euismod nisl. Mauris sit amet rutrum urna. Donec id purus ullamcorper, consectetur mi eu, consequat eros. Nullam faucibus consectetur velit, vel posuere nulla elementum accumsan. Donec ultricies ex tellus, vitae volutpat odio pulvinar nec. Nulla dictum varius ipsum, nec auctor ipsum placerat vitae.'
  },
  {
    path:'/images/luxa.jpg', description: 'Luxa: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ornare erat. Praesent quis euismod nisl. Mauris sit amet rutrum urna. Donec id purus ullamcorper, consectetur mi eu, consequat eros. Nullam faucibus consectetur velit, vel posuere nulla elementum accumsan. Donec ultricies ex tellus, vitae volutpat odio pulvinar nec. Nulla dictum varius ipsum, nec auctor ipsum placerat vitae.'
  },
]);
const width = ref(380);
const activeSlide = ref(0);
const showDescription = ref(true);
</script>

<template>
  <div>
    <br />
    <p class="font-satisfy text-2xl">Our dogs:</p>
    <br />
    <div class="container mx-auto">
      <div class="grid items-center lg:grid-cols-2">
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
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
              <nuxt-img
                  :src="slide.path"
                  :alt="`Slide ${idx + 1}`"
                  :width=width
                  :height=width />
            </SwiperSlide>

          </Swiper>
        </div>
        <transition name="fade">
          <div :class="{ 'opacity-0': !showDescription }" class="transition-opacity duration-500 ease-in-out">
            <p>{{ slides[activeSlide].description }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
