import { atom } from 'jotai'

// 计数器状态
export const countAtom = atom(0)

// 主题状态
export const themeAtom = atom<'light' | 'dark'>('light')

// 用户状态接口
interface User {
  id: string
  name: string
  email: string
}

// 用户状态
export const userAtom = atom<User | null>(null)

// 加载状态
export const isLoadingAtom = atom(false)

// 错误状态
export const errorAtom = atom<string | null>(null)

// 派生状态示例：双倍计数器
export const doubleCountAtom = atom((get) => get(countAtom) * 2)

// 可写派生状态示例：计数器操作
export const countOperationsAtom = atom(
  (get) => get(countAtom),
  (get, set, operation: 'increment' | 'decrement' | 'reset') => {
    const currentCount = get(countAtom)
    switch (operation) {
      case 'increment':
        set(countAtom, currentCount + 1)
        break
      case 'decrement':
        set(countAtom, currentCount - 1)
        break
      case 'reset':
        set(countAtom, 0)
        break
    }
  }
)

// 异步状态示例：模拟 API 调用
export const asyncDataAtom = atom(
  async () => {
    // 模拟异步 API 调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { message: 'Hello from async atom!' }
  }
) 