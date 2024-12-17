<script setup lang="ts">
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import type { Post } from '../../types/forum';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center space-x-4">
      <img
        :src="post.authorAvatar || '/default-avatar.jpeg'"
        :alt="post.authorName"
        class="w-10 h-10 rounded-full"
      />
      <div>
        <h3 class="text-lg font-semibold">{{ post.title }}</h3>
        <p class="text-sm text-gray-500">
          {{ post.authorName }} ·
          {{
            formatDistanceToNow(new Date(post.createdAt), {
              locale: zhCN,
              addSuffix: true,
            })
          }}
        </p>
      </div>
    </div>
    <p class="mt-4 text-gray-700">{{ post.content }}</p>
    <div class="mt-4 flex items-center space-x-4">
      <button
        class="flex items-center space-x-1 text-gray-500 hover:text-green-600"
      >
        <span>👍</span>
        <span>{{ post.likes }}</span>
      </button>
      <button
        class="flex items-center space-x-1 text-gray-500 hover:text-green-600"
      >
        <span>💬</span>
        <span>{{ post.comments.length }}</span>
      </button>
    </div>
  </div>
</template>
