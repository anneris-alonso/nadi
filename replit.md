# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

- **NADI Talent Group** (`artifacts/nadi-talent`): Premium landing page for NADI Talent Group — a global hiring infrastructure platform. Awwwards-level luxury editorial design with Framer Motion animations, parallax scrolling, glassmorphism UI elements, and cinematic video backgrounds.
  - Brand colors: Teal `#08646d`, Gold `#ac822f`, Black `#09090b`
  - Fonts: Cormorant Garamond (editorial headers) + Inter (body)
  - Sections: Hero → Problem → Vision → Differentiators → Value → Story (horizontal scroll) → Stats → CTA → Footer

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + Framer Motion

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
