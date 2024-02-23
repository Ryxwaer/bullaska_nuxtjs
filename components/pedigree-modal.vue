<template>
    <!-- Modal Background and Flex Container -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" @click.self="showModal = false">
      <!-- Modal -->
      <div class="p-5 border min-w-[30%] shadow-lg rounded-md bg-brown">
        <div class="text-3xl font-bold text-center mb-4">{{ data.name }}</div>
        <div class="text-center mb-4">
          <img :src="data.imageSrc" alt="Pet Image" class="inline-block max-h-60">
        </div>
        <div>
          <table class="table-auto w-full mb-4">
            <tbody>
            <tr>
              <th class="px-4 py-1 text-left">Breed</th>
              <td class="border px-4 py-1">{{ data.breed }}</td>
            </tr>
            <tr>
              <th class="px-4 py-1 text-left">Gender</th>
              <td class="border px-4 py-1">{{ data.gender }}</td>
            </tr>
            <tr>
              <th class="px-4 py-1 text-left">Birth Date</th>
              <td class="border px-4 py-1">{{ data.birth }}</td>
            </tr>
            <tr>
              <th class="px-4 py-1 text-left">Birth Country</th>
              <td class="border px-4 py-1">{{ data.country }}</td>
            </tr>
            <tr>
              <th class="px-4 py-1 text-left">Color</th>
              <td class="border px-4 py-1">{{ data.color }}</td>
            </tr>
            </tbody>
          </table>
          <div class="flex justify-between items-center">
            <NuxtLink :to="data.link" class="hover:text-black hover:bg-amber-200 text-gray-800 py-2 px-4 border border-black rounded shadow">
              More at PedigreeDex.com >>
            </NuxtLink>
            <button class="bg-red-500 text-white hover:bg-red-700 py-2 px-4 border border-black rounded shadow" @click="showModal = false">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  data: {},
  showModal: Boolean,
});
</script>

<style scoped>
table td, table th {
  border: 1px solid #d1d5db;
  padding: 8px;
}
</style>
