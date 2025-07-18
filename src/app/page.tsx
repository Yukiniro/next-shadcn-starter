"use client";

import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import { JotaiDemo } from "@/components/jotai-demo";
import { useAtom } from "jotai";
import { countAtom } from "@/lib/atoms";

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-12">
          {/* 头部标题 */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold">Next Shadcn Starter</h1>
            <p className="text-xl text-muted-foreground">现在使用 Jotai 进行状态管理</p>
          </div>

          {/* 主页面计数器 */}
          <div className="text-center space-y-4">
            <Button onClick={() => setCount(count + 1)} size="lg" className="font-mono">
              主页面计数器: {count}
            </Button>
            <p className="text-sm text-muted-foreground">点击按钮增加计数，观察所有组件的状态同步更新</p>
          </div>

          {/* 组件展示区 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            <div className="flex justify-center">
              <Counter />
            </div>
            <div className="flex justify-center">
              <JotaiDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
