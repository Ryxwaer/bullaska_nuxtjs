<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else-if="error">
    Error fetching dogs.
  </div>
  <div v-else class="overflow-x-auto bg-amber-600 bg-opacity-20 rounded-2xl px-10 py-6 scrollbar-hide" :class="gridClass"
       @mouseenter="hovered = 1" @mouseleave="hovered = 0">
    <div class="flex gap-2 md:gap-12 min-w-[800px] h-[800px] z-10">
      <div class="flex flex-col gap-16 h-[80%] w-1/3 my-auto">
        <div v-for="parent in config.parents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1"
             class="flex flex-1 flex-col justify-center bg-amber-500 rounded-2xl text-center transition duration-300 p-2 border overflow-hidden parent"
             :class="{ 'scale-125 z-10': hovered === parent, 'scale-95': hovered && hovered !== parent }" @click="event => handleClick(event, parent)">
          <div class="rounded-2xl bg-white bg-opacity-20 h-4/5 w-4/5 mx-auto overflow-hidden">
            <NuxtImg :src="dogs[parent].imageSrc" :alt="dogs[parent].name" class="image" fit="cover" />
          </div>
          <div class="mt-2">{{ dogs[parent].name }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-6 h-[90%] w-1/3 my-auto">
        <div v-for="parent in config.grandparents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1"
             class="flex flex-1 flex-col justify-center bg-amber-600 rounded-2xl text-center transition duration-300 p-2 border overflow-hidden grandparent"
             :class="{ 'scale-125 z-10 duration-100': hovered === parent, 'scale-95': hovered && hovered !== parent }" @click="event => handleClick(event, parent)">
          <div class="rounded-2xl bg-white bg-opacity-20 h-4/5 w-4/5 mx-auto overflow-hidden">
            <NuxtImg :src="dogs[parent].imageSrc" :alt="dogs[parent].name" class="image" fit="cover" />
          </div>
          <div class="mt-2">{{ dogs[parent].name }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-4 h-full w-1/3">
        <div v-for="parent in config.greatGrandparents" :key="parent" @mouseenter="hovered = parent" @mouseleave="hovered = 1" @click="event => handleClick(event, parent)"
             class="flex flex-1 flex-col justify-center bg-amber-800 rounded-2xl text-center transition-all duration-300 p-2 border overflow-hidden"
             :class="{ 'scale-125 z-10 h-28 flex-auto transition-none': hovered === parent, 'scale-95 h-10': hovered && hovered !== parent }">
          <div v-if="hovered === parent" class="rounded-2xl bg-white bg-opacity-20 h-4/5 w-4/5 mx-auto overflow-hidden">
            <NuxtImg :src="dogs[parent].imageSrc" :alt="dogs[parent].name" class="image" fit="cover" />
          </div>
          <div class="mt-2">{{ dogs[parent].name }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="dogs">
    <div class="h-64" />
    <pre>
      <code>
    {{ JSON.stringify(dogs, null, 2) }}
      </code>
    </pre>
  </div>
  <div>
    <pedigree-modal :data="currentDog" :showModal="showModal" />
  </div>
</template>

<script setup>
const config = {
  parents: [123293, 273252],
  grandparents: [290836, 283578, 134712, 134707],
  greatGrandparents: [221772, 237867, 103837, 102432, 78776, 72137, 85035, 134710],
};

const { data: dogs, pending, error } = await useFetch(`/api/pedigree/fetchDogs`);

const hovered = ref(0);
const gridClass = computed(() => hovered.value ? 'gap-1' : '');

const showModal = ref(false);
const currentDog = ref({});
function handleClick(event, parent) {
  currentDog.value = dogs.value[parent];
  showModal.value = false;
  nextTick(() => {
    showModal.value = true;
  });
  hovered.value = 1;
  console.log("clicked");
}
</script>


<style scoped>
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
.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>