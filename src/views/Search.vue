<script setup lang="ts">
import { ref } from 'vue'
import { wasteItems } from '../data/wasteItems'
import type { WasteItem } from '../types/waste'

const searchQuery = ref('')
const searchResults = ref<WasteItem[]>([])

const search = () => {
  if (!searchQuery.value) {
    searchResults.value = []
    return
  }
  searchResults.value = wasteItems.filter(item => 
    item.name.includes(searchQuery.value)
  )
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-8">垃圾分类查询</h1>
      <div class="mb-8">
        <input
          v-model="searchQuery"
          @input="search"
          type="text"
          placeholder="输入要查询的物品名称"
          class="search-input"
        />
      </div>
      <div v-if="searchResults.length > 0" class="space-y-4">
        <div
          v-for="item in searchResults"
          :key="item.name"
          class="bg-white p-4 rounded-lg shadow"
        >
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-gray-600">分类：{{ item.category }}</p>
          <p class="text-gray-500 text-sm">提示：{{ item.tips }}</p>
        </div>
      </div>
      <div v-else-if="searchQuery" class="text-center text-gray-500">
        未找到相关物品
      </div>
    </div>
  </div>
</template>