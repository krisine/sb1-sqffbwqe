<script setup lang="ts">
import type { Location } from '../../types/location'

defineProps<{
  location: Location
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h3 class="text-lg font-semibold text-gray-800">{{ location.name }}</h3>
    <p class="text-gray-600 mt-2">{{ location.address }}</p>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="type in location.types"
        :key="type"
        class="px-2 py-1 text-sm bg-green-100 text-green-800 rounded-full"
      >
        {{ type }}
      </span>
    </div>
    <div class="mt-4 text-sm text-gray-600">
      <p>营业时间：{{ location.openingHours }}</p>
      <p>联系方式：{{ location.contact }}</p>
    </div>
  </div>
</template>