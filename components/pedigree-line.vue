<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else-if="error">
    Error fetching dogs.
  </div>
  <div v-else class="overflow-x-auto bg-amber-600 bg-opacity-20 rounded-2xl px-10 py-6 scrollbar-hide" :class="gridClass"
       @mouseenter="hovered = 1" @mouseleave="hovered = 0">
    <svg v-if="linePoints.length > 1 && hovered" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
      <svg v-for="(line, index) in linePoints">
        <line v-if="linePoints[index + 1]" :x1="line.x" :y1="line.y" :x2="linePoints[index+1].x" :y2="linePoints[index+1].y" stroke="black" opacity="0.2" stroke-width="20"/>
      </svg>
    </svg>
    <div class="flex gap-2 md:gap-12 min-w-[800px] h-[800px] z-10">
      <div class="flex flex-col gap-16 h-[80%] w-1/3 my-auto">
        <div v-for="parent in config.parents" :key="parent" @mouseenter="event => handleHover(event, parent)" @mouseleave="event => handleHover(event, 1)"
             class="flex flex-1 flex-col justify-center bg-amber-500 rounded-2xl text-center transition duration-300 p-2 border overflow-hidden parent"
             :class="{ 'scale-125 z-10': hovered === parent, 'scale-95': hovered && hovered !== parent }" @click="event => handleHover(event, parent)">
          <div class="rounded-2xl bg-white bg-opacity-20 h-4/5 w-4/5 mx-auto overflow-hidden">
            <NuxtImg :src="dogs[parent].imageSrc" :alt="dogs[parent].name" class="image" fit="cover" />
          </div>
          <div class="mt-2">{{ dogs[parent].name }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-6 h-[90%] w-1/3 my-auto">
        <div v-for="parent in config.grandparents" :key="parent" @mouseenter="event => handleHover(event, parent)" @mouseleave="event => handleHover(event, 1)"
             class="flex flex-1 flex-col justify-center bg-amber-600 rounded-2xl text-center transition duration-300 p-2 border overflow-hidden grandparent"
             :class="{ 'scale-125 z-10 duration-100': hovered === parent, 'scale-95': hovered && hovered !== parent }" @click="event => handleHover(event, parent)">
          <div class="rounded-2xl bg-white bg-opacity-20 h-4/5 w-4/5 mx-auto overflow-hidden">
            <NuxtImg :src="dogs[parent].imageSrc" :alt="dogs[parent].name" class="image" fit="cover" />
          </div>
          <div class="mt-2">{{ dogs[parent].name }}</div>
        </div>
      </div>
      <div class="flex flex-col gap-4 h-full w-1/3">
        <div v-for="parent in config.greatGrandparents" :key="parent" @mouseenter="event => handleHover(event, parent)" @mouseleave="event => handleHover(event, 1)"
             class="flex flex-1 flex-col justify-center bg-amber-800 rounded-2xl text-center transition-all duration-300 p-2 border overflow-hidden"
             :class="{ 'scale-125 z-10 h-28 flex-auto transition-none': hovered === parent, 'scale-95 h-10': hovered && hovered !== parent }" @click="event => handleHover(event, parent)">
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
    <!-- Modal Background and Flex Container -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" @click.self="showModal = false">
      <!-- Modal -->
      <div class="p-5 border w-auto shadow-lg rounded-md bg-brown">
        <div class="text-3xl font-bold text-center mb-4">{{ currentDog.name }}</div>
        <div class="text-center mb-4">
          <img :src="currentDog.imageSrc" alt="Pet Image" class="inline-block max-h-60">
        </div>
        <div>
          <table class="table-auto w-full mb-4">
            <tbody>
            <tr>
              <th class="px-4 py-2 text-left">Breed</th>
              <td class="border px-4 py-2">{{ currentDog.breed }}</td>
            </tr>
            <tr>
              <th class="px-4 py-2 text-left">Gender</th>
              <td class="border px-4 py-2">{{ currentDog.gender }}</td>
            </tr>
            <tr>
              <th class="px-4 py-2 text-left">Birth Date</th>
              <td class="border px-4 py-2">{{ currentDog.birth }}</td>
            </tr>
            <tr>
              <th class="px-4 py-2 text-left">Birth Country</th>
              <td class="border px-4 py-2">{{ currentDog.country }}</td>
            </tr>
            <tr>
              <th class="px-4 py-2 text-left">Color</th>
              <td class="border px-4 py-2">{{ currentDog.color }}</td>
            </tr>
            </tbody>
          </table>
          <NuxtLink :to="currentDog.link" class="inline-block hover:text-black hover:bg-amber-200 text-gray-800 py-2 px-4 border border-black rounded shadow">
            View more at PedigreeDex.com >>
          </NuxtLink>
        </div>
        <!-- Close Modal Button -->
        <div class="text-right mt-2">
          <button class="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded" @click="showModal = false">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = {
  parents: [123293, 273252],
  grandparents: [290836, 283578, 134712, 134707],
  greatGrandparents: [221772, 237867, 103837, 102432, 78776, 72137, 85035, 134710],
};

const showLine = false;

const linePoints = ref([]);

const { data: dogs, pending, error } = await useFetch(`/api/pedigree/fetchDogs`);

const hovered = ref(0);
const gridClass = computed(() => hovered.value ? 'gap-1' : '');

const showModal = ref(false);
const currentDog = ref({});
function handleClick(event, parent) {
  currentDog.value = dogs.value[parent];
  showModal.value = true;
  console.log(currentDog.value);
}
function handleHover(event, parent) {
  hovered.value = parent;

  if (parent === 1 || showLine === false) {
    return;
  }

  if (config.parents.includes(parent)) {
    linePoints.value = [];
    return;
  }
  if (config.grandparents.includes(parent)) {
    const y = event.target.getBoundingClientRect().top;
    const centerX = event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().width / 2;
    const centerY = event.target.getBoundingClientRect().top + event.target.getBoundingClientRect().height;

    const parentElements = document.querySelectorAll(".parent");
    const nearestElement = nearestParent(parentElements, y);

    const parentCenterX = nearestElement.getBoundingClientRect().left + nearestElement.getBoundingClientRect().width / 2;
    const parentCenterY = nearestElement.getBoundingClientRect().top + nearestElement.getBoundingClientRect().height;

    linePoints.value = [
      { x: parentCenterX, y: parentCenterY },
      { x: centerX, y: centerY },
    ];
    return;
  }
  if (config.greatGrandparents.includes(parent)) {
    const y = event.target.getBoundingClientRect().top;
    const centerX = event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().width / 2;
    const centerY = event.target.getBoundingClientRect().top + event.target.getBoundingClientRect().height * 2;

    const parentElements = document.querySelectorAll(".parent");
    const nearestElement = nearestParent(parentElements, y);

    const parentCenterX = nearestElement.getBoundingClientRect().left + nearestElement.getBoundingClientRect().width / 2;
    const parentCenterY = nearestElement.getBoundingClientRect().top + nearestElement.getBoundingClientRect().height;

    const grandParentElements = document.querySelectorAll(".grandparent");
    const nearestGrandElement = nearestParent(grandParentElements, y);

    const grandParentCenterX = nearestGrandElement.getBoundingClientRect().left + nearestGrandElement.getBoundingClientRect().width / 2;
    const grandParentCenterY = nearestGrandElement.getBoundingClientRect().top + nearestGrandElement.getBoundingClientRect().height;

    linePoints.value = [
      { x: parentCenterX, y: parentCenterY },
      { x: grandParentCenterX, y: grandParentCenterY },
      { x: centerX, y: centerY },
    ];
  }
}

function nearestParent(parentElements, reY) {
  let nearestElement;
  let lowestY = 1000;
  parentElements.forEach(parentElement => {
    const distance = Math.abs(parentElement.getBoundingClientRect().top - reY);
    if (distance < lowestY) {
      lowestY = distance;
      nearestElement = parentElement;
    }
  });
  return nearestElement;
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