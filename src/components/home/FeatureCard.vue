<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title: string
  description: string
  icon: string
  to: string
  color: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="to"
    class="block transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="rounded-lg shadow-md p-6" :class="color">
      <div class="text-4xl mb-4">{{ icon }}</div>
      <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-white/90">{{ description }}</p>
    </div>
  </RouterLink>
</template>