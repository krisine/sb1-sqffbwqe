<script setup lang="ts">
import { ref } from 'vue';
import ActivityCard from '../components/rewards/ActivityCard.vue';
import type { Activity } from '../types/reward';

// 模拟数据
const activities = ref<Activity[]>([
  {
    id: '1',
    title: '社区清洁日',
    description: '参与社区垃圾清理活动，共同创造清洁环境。',
    points: 50,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://example.com/images/community-cleanup.jpg',
    participants: 24,
  },
  {
    id: '2',
    title: '垃圾分类知识竞赛',
    description: '参与垃圾分类知识问答竞赛，赢取环保积分和奖励！',
    points: 30,
    startDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://example.com/images/quiz.jpg',
    participants: 45,
  },
  {
    id: '3',
    title: '环保手工制作比赛',
    description: '用废弃材料制作创意手工作品，展示环保理念。',
    points: 70,
    startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://example.com/images/handmade-contest.jpg',
    participants: 18,
  },
  {
    id: '4',
    title: '旧物交换市集',
    description: '带上家中不用的旧物，参与交换，资源再利用。',
    points: 20,
    startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://example.com/images/swap-market.jpg',
    participants: 32,
  },
  {
    id: '5',
    title: '垃圾分类志愿者培训',
    description: '成为社区垃圾分类志愿者，学习分类知识并指导他人。',
    points: 100,
    startDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    image: 'https://example.com/images/volunteer-training.jpg',
    participants: 12,
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-12">环保活动</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ActivityCard
          v-for="activity in activities"
          :key="activity.id"
          :activity="activity"
        />
      </div>
    </div>
  </div>
</template>
