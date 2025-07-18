# Next.js Shadcn Starter with Jotai

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with [Shadcn/ui](https://ui.shadcn.com/) components and [Jotai](https://jotai.org/) for state management.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Shadcn/ui** components with Tailwind CSS
- 🔄 **Jotai** for atomic state management
- 📱 **Responsive design** with mobile-first approach

## State Management with Jotai

This project demonstrates various Jotai patterns:

### Basic Atoms
```typescript
import { atom } from 'jotai'

// Basic counter state
export const countAtom = atom(0)

// Theme state
export const themeAtom = atom<'light' | 'dark'>('light')
```

### Derived Atoms
```typescript
// Read-only derived atom
export const doubleCountAtom = atom((get) => get(countAtom) * 2)

// Writable derived atom
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
```

### Async Atoms
```typescript
// Async data fetching
export const asyncDataAtom = atom(async () => {
  const response = await fetch('/api/data')
  return response.json()
})
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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── counter.tsx     # Counter component demo
│   └── jotai-demo.tsx  # Jotai features demo
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
