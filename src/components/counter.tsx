"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAtom } from "jotai";
import { countAtom } from "@/lib/atoms";

export function Counter() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>全局计数器</CardTitle>
        <CardDescription>这个计数器与主页面共享相同的状态</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-2xl font-bold">当前计数: {count}</div>
        <div className="flex gap-2 justify-center">
          <Button variant="outline" onClick={() => setCount(count - 1)}>
            -1
          </Button>
          <Button variant="outline" onClick={() => setCount(0)}>
            重置
          </Button>
          <Button variant="outline" onClick={() => setCount(count + 1)}>
            +1
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
