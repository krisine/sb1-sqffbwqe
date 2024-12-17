<script setup lang="ts">
import { articles } from '../data/articles'
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-12">环保知识</h1>
      <div class="space-y-8">
        <article
          v-for="article in articles"
          :key="article.title"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 class="text-xl font-bold mb-4 text-green-600">
            {{ article.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed">
            {{ article.content }}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>