<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const navItems = computed(() => [
  { name: '首页', path: '/' },
  { name: '垃圾查询', path: '/search' },
  { name: '分类指南', path: '/guide' },
  { name: '环保论坛', path: '/forum' },
  { name: '环保活动', path: '/rewards' }
])
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-xl font-bold text-green-600">
            垃圾分类助手
          </RouterLink>
        </div>
        <div class="flex items-center space-x-4">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            active-class="text-green-600"
          >
            {{ item.name }}
          </RouterLink>
          <RouterLink
            v-if="!authStore.isAuthenticated"
            to="/auth"
            class="nav-link"
          >
            登录/注册
          </RouterLink>
          <div v-else class="flex items-center space-x-2">
            <span class="text-gray-600">{{ authStore.currentUser?.points }} 积分</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>