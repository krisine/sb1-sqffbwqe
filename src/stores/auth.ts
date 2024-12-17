import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, LoginForm, RegisterForm } from '../types/user'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!currentUser.value)

  // 模拟API调用
  const login = async (form: LoginForm) => {
    try {
      isLoading.value = true
      error.value = null
      // 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 模拟成功登录
      currentUser.value = {
        id: '1',
        username: 'demo_user',
        email: form.email,
        points: 100,
        createdAt: new Date().toISOString()
      }
    } catch (e) {
      error.value = '登录失败，请重试'
    } finally {
      isLoading.value = false
    }
  }

  const register = async (form: RegisterForm) => {
    try {
      isLoading.value = true
      error.value = null
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      currentUser.value = {
        id: '1',
        username: form.username,
        email: form.email,
        points: 0,
        createdAt: new Date().toISOString()
      }
    } catch (e) {
      error.value = '注册失败，请重试'
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    currentUser.value = null
  }

  return {
    currentUser,
    isLoading,
    error,
    isAuthenticated,
    login,
    register,
    logout
  }
})