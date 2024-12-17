<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import FeatureCard from '../components/home/FeatureCard.vue'
import LocationSection from '../components/home/LocationSection.vue'

const authStore = useAuthStore()

const features = [
  {
    title: '垃圾查询',
    description: '快速查询垃圾分类指南',
    icon: '🔍',
    to: '/search',
    color: 'bg-blue-600'
  },
  {
    title: '分类指南',
    description: '了解垃圾分类的基本知识',
    icon: '📖',
    to: '/guide',
    color: 'bg-green-600'
  },
  {
    title: '环保论坛',
    description: '分享交流环保心得',
    icon: '💬',
    to: '/forum',
    color: 'bg-purple-600'
  },
  {
    title: '环保活动',
    description: '参与活动赚取积分',
    icon: '🎯',
    to: '/rewards',
    color: 'bg-orange-600'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-green-50 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            垃圾分类，让生活更美好
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            从点滴做起，共建绿色家园
          </p>
          <div v-if="!authStore.isAuthenticated" class="space-x-4">
            <RouterLink
              to="/auth"
              class="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              立即注册
            </RouterLink>
            <RouterLink
              to="/auth"
              class="inline-block px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              登录账号
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            v-bind="feature"
          />
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <LocationSection />

    <!-- User Dashboard Section -->
    <section v-if="authStore.isAuthenticated" class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="bg-green-50 rounded-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">
                {{ authStore.currentUser?.username }}，欢迎回来
              </h2>
              <p class="text-gray-600 mt-2">
                当前积分：{{ authStore.currentUser?.points }} 分
              </p>
            </div>
            <button
              @click="authStore.logout"
              class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              退出登录
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>