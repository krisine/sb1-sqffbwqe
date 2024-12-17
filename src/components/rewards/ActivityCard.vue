<script setup lang="ts">
import type { Activity } from '../../types/reward';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';

defineProps<{
  activity: Activity;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      :src="activity.image"
      :alt="activity.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ activity.title }}</h3>
      <p class="mt-2 text-gray-600">{{ activity.description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-green-600 font-semibold"
          >+{{ activity.points }} 积分</span
        >
        <span class="text-sm text-gray-500">
          {{ activity.participants }} 人参与
        </span>
      </div>
      <div class="mt-2 text-sm text-gray-500">
        活动时间：{{
          formatDistanceToNow(new Date(activity.endDate), {
            locale: zhCN,
            addSuffix: true,
          })
        }}结束
      </div>
    </div>
  </div>
</template>
