<script setup lang="ts">
import { ref } from 'vue';
import PostCard from '../components/forum/PostCard.vue';
import type { Post } from '../types/forum';

// 模拟数据
const posts = ref<Post[]>([
  {
    id: '1',
    title: '分享：如何快速记住垃圾分类规则',
    content:
      '很多朋友觉得垃圾分类很复杂，其实记住一些简单的口诀就可以了，比如“湿垃圾爱腐烂，干垃圾要避开”。大家有没有更简单的方法？',
    authorId: '1',
    authorName: '环保达人',
    authorAvatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    createdAt: new Date().toISOString(),
    likes: 20,
    comments: [
      {
        id: '1',
        content: '我用的垃圾分类小程序，扫描垃圾就能知道分类，超方便！',
        authorId: '2',
        authorName: '科技爱好者',
        authorAvatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        content: '干湿垃圾确实难区分，记住“能拧出水的就是湿垃圾”！',
        authorId: '3',
        authorName: '小区志愿者',
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: '2',
    title: '问问大家：旧电池属于什么垃圾？',
    content:
      '我家里堆了好多废旧电池，不知道该怎么扔。有人知道正确的处理方法吗？',
    authorId: '4',
    authorName: '环保小白',
    authorAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    createdAt: new Date().toISOString(),
    likes: 12,
    comments: [
      {
        id: '3',
        content: '旧电池属于有害垃圾，建议送到专门的回收点！',
        authorId: '5',
        authorName: '分类达人',
        authorAvatar: 'https://randomuser.me/api/portraits/women/5.jpg',
        createdAt: new Date().toISOString(),
      },
      {
        id: '4',
        content: '有些商场或超市门口会设置回收箱，你可以留意一下。',
        authorId: '6',
        authorName: '细心居民',
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: '3',
    title: '科普：厨余垃圾如何处理更环保？',
    content:
      '很多厨余垃圾可以用来堆肥，比如菜叶、果皮等。我们小区最近新建了一个厨余垃圾堆肥点，效果非常不错！',
    authorId: '7',
    authorName: '社区管理员',
    authorAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    createdAt: new Date().toISOString(),
    likes: 30,
    comments: [
      {
        id: '5',
        content: '这个好！我们小区还没有，希望可以推广一下。',
        authorId: '8',
        authorName: '环保爱好者',
        createdAt: new Date().toISOString(),
      },
      {
        id: '6',
        content: '菜叶果皮能堆肥，但肉类厨余垃圾该怎么处理呢？',
        authorId: '9',
        authorName: '环保小萌新',
        authorAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: '4',
    title: '讨论：垃圾分类执行过程中遇到的问题',
    content:
      '最近发现有些居民分类不够准确，比如把湿垃圾扔进干垃圾桶。如何提高大家的分类意识？',
    authorId: '10',
    authorName: '社区志愿者',
    createdAt: new Date().toISOString(),
    likes: 18,
    comments: [
      {
        id: '7',
        content: '可以在垃圾桶旁贴上更直观的分类指南或者示意图。',
        authorId: '11',
        authorName: '设计师阿华',
        authorAvatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        createdAt: new Date().toISOString(),
      },
      {
        id: '8',
        content: '我们小区每周举办垃圾分类知识讲座，效果不错！',
        authorId: '12',
        authorName: '热心邻居',
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: '5',
    title: '晒图：我家的垃圾分类角',
    content:
      '分享一下我家的分类角，每种垃圾都有对应的垃圾桶，还贴上了标识牌，整齐又方便！',
    authorId: '13',
    authorName: '分类爱好者小李',
    authorAvatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    createdAt: new Date().toISOString(),
    likes: 25,
    comments: [
      {
        id: '9',
        content: '看着好整齐！我也要布置一个！',
        authorId: '14',
        authorName: '邻居小张',
        createdAt: new Date().toISOString(),
      },
    ],
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">环保论坛</h1>
        <button
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          发布帖子
        </button>
      </div>

      <div class="space-y-6">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>
