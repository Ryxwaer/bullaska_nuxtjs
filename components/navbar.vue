<template>
    <nav class="bg-brown text-2xl">
        <div class="max-w mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                        <nuxt-link to="/" class="flex items-center py-5 px-2 text-black no-underline">
                            <span class="text-6xl font-satisfy">Bullaska</span>
                        </nuxt-link>
                    </div>
                </div>

                <!-- primary nav -->
                <div class="hidden sm:flex items-center space-x-3">
                    <nuxt-link to="/" class="py-5 px-3">About</nuxt-link>
                    <nuxt-link to="/contact" class="py-5 px-3">Contact</nuxt-link>
                    <nuxt-link to="/blog" class="py-5 px-3">Blog</nuxt-link>
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
          <nuxt-link to="/" class="py-2 px-4">About</nuxt-link>
          <nuxt-link to="/contact" class="py-2 px-4">Contact</nuxt-link>
          <nuxt-link to="/blog" class="py-2 px-4">Blog</nuxt-link>
          <a href="https://www.facebook.com/adriana.mikusova.37" target="_blank" rel="noopener noreferrer" class="block py-2 px-4">Facebook</a>
          <button class="mobile-menu-button" @click="toggleMenu">
            <Icon name="material-symbols:close" size="32" />
          </button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.router-link-active {
  position: relative;
  display: inline-block;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 20px; /* Lower the line without affecting the text position */
  left: 0;
  width: 100%;
  height: 1px; /* Adjust thickness of the underline */
  background-color: black; /* Adjust color of the underline */
  transform: translateY(100%); /* Shift the line down */
}
.no-underline.router-link-active::after {
  display: none;
}
</style>