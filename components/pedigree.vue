<template>
  <div class="flex gap-2 md:gap-12 columns-3 bg-amber-600 bg-opacity-20 rounded-3xl h-[800px]">
    <div class="flex flex-col gap-12 h-[80%] w-1/3 my-auto">
      <div v-for="parent in data2.parents" :key="parent"
           class="flex flex-1 flex-col justify-center bg-amber-500 rounded-3xl text-center hover:scale-x-125 hover:scale-y-125 transition duration-300 p-4 border">
        <div class="mt-2">{{ parent }}</div>
      </div>
    </div>
    <div class="flex flex-col gap-4 h-full w-1/3">
      <div v-for="parent in data2.grandparents" :key="parent"
           class="flex flex-1 flex-col justify-center bg-amber-600 rounded-3xl text-center hover:scale-x-125 hover:scale-y-125 transition duration-300 p-4 border">
        <div class="mt-2">{{ parent }}</div>
      </div>
    </div>
    <div class="flex flex-col gap-2 h-full w-1/3">
      <div v-for="parent in data2.greatGrandparents" :key="parent"
           class="flex flex-1 flex-col justify-center bg-amber-800 rounded-3xl text-center hover:scale-x-125 hover:scale-y-125 transition duration-300 p-4 border">
        <div class="mt-2">{{ parent }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data2 = {
  parents: ["mother", "father"],
  grandparents: ["grandmother1", "grandfather1", "grandmother2", "grandfather2"],
  greatGrandparents: ["greatGrandmother1", "greatGrandfather1", "greatGrandmother2", "greatGrandfather2", "greatGrandmother3", "greatGrandfather3", "greatGrandmother4", "greatGrandfather4"],
};

const data1 = [
  {
    name: "Mother",
    image: "/images/home/eyes.jpeg",
    parent: [
      {
        name: "Test11",
        image: "/images/home/eyes.jpeg",
        parent: [
          {
            name: "Test21",
            image: "/images/home/eyes.jpeg",
            parent: [],
          },
          {
            name: "Test22",
            image: "/images/home/eyes.jpeg",
            parent: [],
          }
        ],
      },
      {
        name: "Test12",
        image: "/images/home/eyes.jpeg",
        parent: [
          {
            name: "Test23",
            image: "/images/home/eyes.jpeg",
            parent: [],
          },
          {
            name: "Test24",
            image: "/images/home/eyes.jpeg",
            parent: [],
          }
        ],
      }
    ],
  },
  {
    name: "Father",
    image: "/images/home/eyes.jpeg",
    parent: [
      {
        name: "Test13",
        image: "/images/home/eyes.jpeg",
        parent: [
          {
            name: "Test25",
            image: "/images/home/eyes.jpeg",
            parent: [],
          },
          {
            name: "Test26",
            image: "/images/home/eyes.jpeg",
            parent: [],
          }
        ],
      },
      {
        name: "Test14",
        image: "/images/home/eyes.jpeg",
        parent: [
          {
            name: "Test27",
            image: "/images/home/eyes.jpeg",
            parent: [],
          },
          {
            name: "Test28",
            image: "/images/home/eyes.jpeg",
            parent: [],
          }
        ],
      }
    ],
  },
];
</script>