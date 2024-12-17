import type { Category } from '../types/waste'

export const categories: Category[] = [
  {
    name: '可回收物',
    color: 'bg-recyclable',
    icon: '♻️',
    description: '废纸张、废塑料、废玻璃、废金属、废织物等'
  },
  {
    name: '有害垃圾',
    color: 'bg-hazardous',
    icon: '⚠️',
    description: '废电池、废灯管、废药品、废油漆等'
  },
  {
    name: '厨余垃圾',
    color: 'bg-kitchen',
    icon: '🥗',
    description: '剩菜剩饭、果皮、蛋壳、茶渣等'
  },
  {
    name: '其他垃圾',
    color: 'bg-other',
    icon: '🗑️',
    description: '卫生纸、尘土、陶瓷等'
  }
]