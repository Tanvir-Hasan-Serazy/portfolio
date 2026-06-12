<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — start dev server on localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, eslint-config-next)
- No test framework is configured; `npm test` is not available

## Stack

- Next.js 16.2.9, React 19.2.4, TypeScript 5
- React Compiler enabled (`next.config.ts` → `reactCompiler: true`)
- Tailwind CSS v4 via `@tailwindcss/postcss` (not the old `tailwindcss` PostCSS plugin)
- shadcn/ui (radix-nova style) — add components with `npx shadcn@latest add <name>`
- GSAP (`@gsap/react`) and `motion` (framer-motion) for animations
- Swiper for carousel/slider components

## Conventions

- Path alias: `@/*` → `./src/*`
- `cn()` utility in `src/lib/utils.ts` (clsx + tailwind-merge) — use it for conditional classes
- ESLint flat config in `eslint.config.mjs`
- CSS variables for theming defined in `src/app/globals.css`
- `src/utils/secret.ts` is just a fallback image path, not secrets

## Layout

- `src/app/layout.tsx` — root layout with Header/Footer wrappers
- `src/app/page.tsx` — home page composed of section components from `src/components/home/`
- `src/components/ui/` — shadcn UI primitives
- `src/components/layout/` — Header and Footer
- `src/components/common/` — shared components like ImageWithFallback
- `public/images/` — static assets
