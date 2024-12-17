import type { WasteItem } from '../types/waste'

export const wasteItems: WasteItem[] = [
  { name: '纸箱', category: '可回收物', tips: '请折叠压扁后投放' },
  { name: '电池', category: '有害垃圾', tips: '请投放到专门的回收箱' },
  { name: '苹果核', category: '厨余垃圾', tips: '建议沥干水分后投放' },
  { name: '烟蒂', category: '其他垃圾', tips: '确保完全熄灭后投放' }
]