"use client";

import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { countAtom } from "@/lib/atoms";

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold">Next Shadcn Starter</h1>
          <p className="text-xl text-muted-foreground">使用 Jotai 进行状态管理</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-4xl font-bold font-mono">{count}</div>

          <div className="flex gap-4">
            <Button onClick={() => setCount(count - 1)} variant="outline" size="lg">
              -
            </Button>
            <Button onClick={() => setCount(0)} variant="outline" size="lg">
              重置
            </Button>
            <Button onClick={() => setCount(count + 1)} variant="outline" size="lg">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
