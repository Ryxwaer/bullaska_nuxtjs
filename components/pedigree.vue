<template>
  <div class="overflow-x-auto bg-amber-600 bg-opacity-20 rounded-2xl p-4 scrollbar-hide" :class="gridClass"
       @mouseenter="hovered = 1" @mouseleave="hovered = 0">
    <div class="flex gap-2 md:gap-12 min-w-[800px] h-[800px] z-10">
      <div class="flex flex-col gap-12 h-[80%] w-1/3 my-auto">
        <div v-for="parent in data2.parents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1"
             class="flex flex-1 flex-col justify-center bg-amber-500 rounded-2xl text-center transition duration-300 p-4 border"
             :class="{ 'scale-125 z-10': hovered === parent, 'scale-95': hovered && hovered !== parent }">
          <div class="rounded-2xl bg-white bg-opacity-20 h-3/4 w-3/4 mx-auto"></div>
          <div class="mt-2">{{ parent }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-4 h-full w-1/3">
        <div v-for="parent in data2.grandparents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1"
             class="flex flex-1 flex-col justify-center bg-amber-600 rounded-2xl text-center transition duration-300 p-4 border"
             :class="{ 'scale-125 z-10 duration-100': hovered === parent, 'scale-95': hovered && hovered !== parent }">
          <div class="rounded-2xl bg-white bg-opacity-20 h-3/4 w-3/4 mx-auto"></div>
          <div class="mt-2">{{ parent }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-4 h-full w-1/3">
        <div v-for="parent in data2.greatGrandparents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1"
             class="flex flex-1 flex-col justify-center bg-amber-800 rounded-2xl text-center transition-all duration-300 p-4 border"
             :class="{ 'scale-125 z-10 h-28 flex-auto transition-none': hovered === parent, 'scale-95 h-10': hovered && hovered !== parent }">
          <div v-if="hovered === parent" class="rounded-2xl bg-white bg-opacity-20 h-3/4 w-3/4 mx-auto"></div>
          <div class="mt-2">{{ parent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const data2 = {
  parents: ["mother", "father"],
  grandparents: ["grandmother1", "grandfather1", "grandmother2", "grandfather2"],
  greatGrandparents: ["greatGrandmother1", "greatGrandfather1", "greatGrandmother2", "greatGrandfather2", "greatGrandmother3", "greatGrandfather3", "greatGrandmother4", "greatGrandfather4"],
};

const hovered: any = ref(0);

// Adjust the grid dynamically based on the hovered cell
const gridClass = computed(() => {
  if (!hovered.value) return '';
  // Example class adjustments, could be more sophisticated based on exact needs
  return 'gap-1';
});
</script>

<style scoped>
/* Custom class to hide scrollbar */
.scrollbar-hide {
  /* For Webkit (Safari, Chrome) */
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge */
  -ms-overflow-style: none;

  /* For Firefox */
  scrollbar-width: none;
}
</style>