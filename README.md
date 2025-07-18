# Next.js Shadcn Starter with Jotai

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with [Shadcn/ui](https://ui.shadcn.com/) components and [Jotai](https://jotai.org/) for state management.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Shadcn/ui** components with Tailwind CSS
- 🔄 **Jotai** for atomic state management
- 📱 **Responsive design** with mobile-first approach

## State Management with Jotai

This project demonstrates a simple counter using Jotai for state management:

```typescript
import { atom } from 'jotai'

// Basic counter state
export const countAtom = atom(0)
```

Usage in components:
```typescript
import { useAtom } from 'jotai'
import { countAtom } from '@/lib/atoms'

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Main page with counter
│   └── layout.tsx      # Root layout
├── components/          # Reusable UI components
│   └── ui/             # Shadcn/ui components
├── lib/                # Utilities and configurations
│   ├── atoms.ts        # Jotai atoms definitions
│   └── utils.ts        # Utility functions
└── types/              # TypeScript type definitions
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Shadcn/ui Documentation](https://ui.shadcn.com/) - learn about the UI components.
- [Jotai Documentation](https://jotai.org/) - learn about atomic state management.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
