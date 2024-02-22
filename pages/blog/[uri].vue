<template>
  <div class="flex-col justify-center items-center">
    <div v-if="pending" class="text-2xl text-center">
      Loading...
    </div>
    <div v-else-if="error" class="text-2xl text-center">
      Error loading data for uri "{{ uri }}"
    </div>
    <div v-else v-html="postData" class="w-full"/>
    <div v-if="config[dog]" class="flex justify-center items-center min-h-screen">
      <div class="w-full max-w-6xl p-4">
        <lazy-pedigree :parents="config[dog].parents" :grandparents="config[dog].grandparents" :greatGrandparents="config[dog].greatGrandparents"/>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "blog",
});

const config = {
  luxe: {
    parents: [123293, 273252],
    grandparents: [290836, 283578, 134712, 134707],
    greatGrandparents: [221772, 237867, 103837, 102432, 78776, 72137, 85035, 134710],
  },
  neska: {
    parents: [273781, 139021],
    grandparents: [262823, 270520, 92580, 295616],
    greatGrandparents: [119012, 262821, 103887, 261240,
      76238, 64815, 187500, 217543],
  }
};

// iterate over config keys and choose one that is contained in the uri
const route = useRoute();
const uri = route.params.uri;
const dog = Object.keys(config).find(key => uri.toLowerCase().includes(key));
const {data: postData, pending, error} = await useFetch(`/api/wp/rendered/${uri}`);
</script>