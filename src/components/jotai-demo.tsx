"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAtom, useAtomValue } from "jotai";
import { countAtom, doubleCountAtom, countOperationsAtom, themeAtom, asyncDataAtom } from "@/lib/atoms";
import { Suspense } from "react";

// 异步数据组件
function AsyncDataDisplay() {
  const data = useAtomValue(asyncDataAtom);

  return (
    <div className="p-4 bg-green-50 rounded-lg">
      <p className="text-sm text-green-800">异步数据: {data.message}</p>
    </div>
  );
}

export function JotaiDemo() {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCountAtom);
  const [, performOperation] = useAtom(countOperationsAtom);
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div className="w-full max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Jotai 状态管理演示</CardTitle>
          <CardDescription>展示 Jotai 的各种功能，包括基础状态、派生状态和异步状态</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 基础状态 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">基础状态</h3>
            <div className="flex items-center gap-4">
              <Badge variant="outline">计数器: {count}</Badge>
              <Button size="sm" onClick={() => setCount(count + 1)}>
                +1
              </Button>
            </div>
          </div>

          {/* 派生状态 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">派生状态</h3>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">双倍计数: {doubleCount}</Badge>
              <span className="text-sm text-muted-foreground">自动计算为计数器的两倍</span>
            </div>
          </div>

          {/* 可写派生状态 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">可写派生状态</h3>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => performOperation("increment")}>
                增加
              </Button>
              <Button size="sm" variant="outline" onClick={() => performOperation("decrement")}>
                减少
              </Button>
              <Button size="sm" variant="outline" onClick={() => performOperation("reset")}>
                重置
              </Button>
            </div>
          </div>

          {/* 主题状态 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">主题状态</h3>
            <div className="flex items-center gap-4">
              <Badge variant={theme === "light" ? "default" : "secondary"}>当前主题: {theme}</Badge>
              <Button size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                切换主题
              </Button>
            </div>
          </div>

          {/* 异步状态 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">异步状态</h3>
            <Suspense
              fallback={
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">加载异步数据中...</p>
                </div>
              }
            >
              <AsyncDataDisplay />
            </Suspense>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
