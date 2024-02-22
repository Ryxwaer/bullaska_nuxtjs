<template>
    <nav class="bg-brown text-2xl">
      <div class="max-w mx-auto fluid-padding-x fluid-padding-y" ref="parent">
            <div class="flex justify-between">
                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                        <nuxt-link to="/" class="flex items-center py-5 px-2 text-black no-underline">
                            <span class="text-6xl font-poppins-bold">Bulláska</span>
                        </nuxt-link>
                    </div>
                </div>

                <!-- primary nav -->
                <div class="hidden sm:flex items-center space-x-3 font-work-sans-thin">
                    <nuxt-link to="/" class="py-5 px-3">Úvod</nuxt-link>
                    <nuxt-link to="/blog" class="py-5 px-3" :class="{ 'router-link-active': isBlogActive }">Naše psy</nuxt-link>
                    <!-- <nuxt-link to="/blog" class="py-5 px-3" :class="{ 'router-link-active': isBlogActive }">Blog</nuxt-link> -->
                    <div class="py-5 px-3">
                        <a href="https://www.facebook.com/adriana.mikusova.37" target="_blank" rel="noopener noreferrer">
                            <Icon name="ic:baseline-facebook" size="32px" />
                        </a>
                    </div>
                </div>

                <!-- mobile button goes here -->
              <div class="sm:hidden flex items-center">
                <button class="mobile-menu-button" @click="toggleMenu">
                  <Icon name="icon-park:hamburger-button" size="32" />
                </button>
              </div>
            </div>
        </div>

        <!-- mobile menu -->
      <div class="mobile-menu" v-show="showMenu">
        <div class="flex flex-col items-center">
          <nuxt-link to="/" class="py-2 px-4 mobile" @click="toggleMenu">Úvod</nuxt-link>
          <nuxt-link to="/blog" class="py-2 px-4 mobile" :class="{ 'router-link-active': isBlogActive }" @click="toggleMenu">About</nuxt-link>
          <!-- <nuxt-link to="/blog" class="py-2 px-4 mobile" :class="{ 'router-link-active': isBlogActive }" @click="toggleMenu">Blog</nuxt-link> -->
          <a href="https://www.facebook.com/adriana.mikusova.37" target="_blank" rel="noopener noreferrer" class="block py-2 px-4">Facebook</a>
          <button class="mobile-menu-button py-2 px-4" @click="toggleMenu">
            <Icon name="material-symbols:close" size="32" />
          </button>
        </div>
      </div>
    </nav>
</template>

<script setup>
const route = useRoute();
const showMenu = ref(false);

const [parent] = useAutoAnimate()

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

const isBlogActive = computed(() => {
  return route.path.startsWith('/blog');
});
</script>

<style scoped>
.router-link-active {
  position: relative;
  display: inline-block;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: black;
  transform: translateY(100%);
}
.mobile.router-link-active::after {
  bottom: 8px;
}
.no-underline.router-link-active::after {
  display: none;
}
.fluid-padding-x {
  padding-left: clamp(1rem, 5vw - 1rem, 24rem);
  padding-right: clamp(1rem, 5vw - 1rem, 24rem);
}
.fluid-padding-y {
  padding-top: clamp(0rem, 2.5vw - 1rem, 6rem);
  padding-bottom: clamp(0rem, 2.5vw - 1rem, 6rem);
}
</style>