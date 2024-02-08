<template>

  <hero />

  <div class="font-poppins fluid-padding">

    <div class="py-24 min-h-80" >
      <div class="text-4xl font-poppins-bold">
        O nás
      </div>
      <br />
      <excerpt :slug="`about`" />
    </div>

    <div class="h-12" />

    <div class="h-12" />
    <div class="text-4xl font-poppins-bold">
      Naše psy
    </div>

    <showcase />

    <loreipsum />

    <lazy-contacts />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Excerpt from "../components/excerpt.vue";

export default defineComponent({
  components: {Excerpt}
})
</script>

<style scoped>
.fluid-padding {
  padding-left: clamp(0rem, 6vw - 2rem, 24rem);
  padding-right: clamp(0rem, 6vw - 2rem, 24rem);
}
</style>