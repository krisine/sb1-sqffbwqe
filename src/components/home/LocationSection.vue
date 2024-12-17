<script setup lang="ts">
import { ref } from 'vue'
import type { Location } from '../../types/location'
import LocationCard from '../locations/LocationCard.vue'

// 模拟数据
const locations = ref<Location[]>([
  {
    id: '1',
    name: '社区回收站',
    address: '幸福小区东门',
    coordinates: { latitude: 31.2304, longitude: 121.4737 },
    types: ['可回收物', '有害垃圾'],
    openingHours: '周一至周日 8:00-20:00',
    contact: '021-12345678'
  },
  {
    id: '2',
    name: '垃圾分类指导站',
    address: '阳光小区西门',
    coordinates: { latitude: 31.2314, longitude: 121.4747 },
    types: ['全品类'],
    openingHours: '周一至周五 9:00-18:00',
    contact: '021-87654321'
  }
])
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-900">附近的投放点</h2>
        <RouterLink
          to="/locations"
          class="text-green-600 hover:text-green-700 font-medium"
        >
          查看更多 →
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LocationCard
          v-for="location in locations"
          :key="location.id"
          :location="location"
        />
      </div>
    </div>
  </section>
</template>