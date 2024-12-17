<script setup lang="ts">
import { categories } from '../data/categories'

const guidelines = categories.map(cat => ({
  category: cat.name,
  color: cat.color.replace('bg-', 'text-'),
  items: getItemsForCategory(cat.name)
}))

function getItemsForCategory(category: string) {
  switch (category) {
    case '可回收物':
      return [
        '废纸：报纸、杂志、图书、纸板箱',
        '废塑料：饮料瓶、食品包装袋',
        '废玻璃：玻璃瓶、玻璃杯',
        '废金属：易拉罐、金属罐'
      ]
    case '有害垃圾':
      return [
        '废电池：干电池、纽扣电池',
        '废灯管：荧光灯管、节能灯',
        '废药品：过期药品、药物包装',
        '其他：温度计、油漆桶'
      ]
    case '厨余垃圾':
      return [
        '剩饭剩菜',
        '蔬菜水果皮',
        '茶叶渣',
        '骨头'
      ]
    default:
      return [
        '卫生纸',
        '尘土',
        '烟蒂',
        '陶瓷碎片'
      ]
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-12">垃圾分类指南</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="guide in guidelines"
          :key="guide.category"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 class="text-xl font-bold mb-4" :class="guide.color">
            {{ guide.category }}
          </h2>
          <ul class="space-y-2">
            <li
              v-for="(item, index) in guide.items"
              :key="index"
              class="flex items-center"
            >
              <span class="mr-2">•</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>