<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import type { RegisterForm } from '../../types/user'

const authStore = useAuthStore()
const form = ref<RegisterForm>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    authStore.error = '两次输入的密码不一致'
    return
  }
  await authStore.register(form.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">用户名</label>
      <input
        v-model="form.username"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">邮箱</label>
      <input
        v-model="form.email"
        type="email"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">密码</label>
      <input
        v-model="form.password"
        type="password"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">确认密码</label>
      <input
        v-model="form.confirmPassword"
        type="password"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      />
    </div>
    <button
      type="submit"
      :disabled="authStore.isLoading"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {{ authStore.isLoading ? '注册中...' : '注册' }}
    </button>
    <p v-if="authStore.error" class="text-red-600 text-sm">{{ authStore.error }}</p>
  </form>
</template>