# Next.js Shadcn Starter with Jotai & i18n

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), enhanced with [Shadcn/ui](https://ui.shadcn.com/) components, [Jotai](https://jotai.org/) for state management, and [next-intl](https://next-intl-docs.vercel.app/) for internationalization.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Shadcn/ui** components with Tailwind CSS
- 🔄 **Jotai** for atomic state management
- 🌍 **next-intl** for internationalization (i18n)
- 📱 **Responsive design** with mobile-first approach

## Internationalization (i18n)

This project supports multiple languages using next-intl:

### Supported Languages
- 🇨🇳 **Chinese (zh)** - Default language
- 🇺🇸 **English (en)**

### Language Files
Language files are located in the `messages/` directory:
- `messages/zh.json` - Chinese translations
- `messages/en.json` - English translations

### Usage Example
```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('common');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
```

### Language Switching
The application includes a language switcher component that allows users to toggle between supported languages. The language preference is reflected in the URL (e.g., `/zh/` for Chinese, `/en/` for English).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will automatically redirect to the default language (Chinese).

You can also access specific languages directly:
- Chinese: [http://localhost:3000/zh](http://localhost:3000/zh)
- English: [http://localhost:3000/en](http://localhost:3000/en)

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Layout with i18n provider
│   │   └── page.tsx        # Main page with counter
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Shadcn/ui components
│   └── language-switcher.tsx # Language switcher component
├── lib/
│   ├── atoms.ts            # Jotai atoms definitions
│   ├── i18n.ts             # i18n configuration
│   └── utils.ts            # Utility functions
├── middleware.ts           # Next.js middleware for i18n
└── types/                  # TypeScript type definitions

messages/
├── zh.json                 # Chinese translations
└── en.json                 # English translations
```

## Adding New Languages

To add a new language:

1. Create a new translation file in `messages/` (e.g., `messages/fr.json`)
2. Add the locale to the `locales` array in `src/lib/i18n.ts`
3. Update the language switcher component to include the new language

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Shadcn/ui Documentation](https://ui.shadcn.com/) - learn about the UI components.
- [Jotai Documentation](https://jotai.org/) - learn about atomic state management.
- [next-intl Documentation](https://next-intl-docs.vercel.app/) - learn about internationalization.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
