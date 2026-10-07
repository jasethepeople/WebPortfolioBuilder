# WebPortfolioBuilder

A full-stack personal portfolio web app (built on Replit) with project galleries, interactive dialogs, and links out to Replit projects.

## Features

- Portfolio front page with project galleries and interactive dialogs
- Interactive links to the author's Replit projects (per the latest commit)
- Express backend with Drizzle-backed storage and shared schema

## Tech stack

- Frontend: React 18 + TypeScript, Vite, Wouter, TanStack Query, Tailwind CSS, shadcn/ui (Radix primitives), React Hook Form + Zod validation
- Backend: Node.js, Express, TypeScript (ES modules)
- Data: Drizzle ORM, PostgreSQL (configured for Neon serverless)

## Getting started

Scripts from `package.json`:

- `npm run dev` — development (tsx server + Vite)
- `npm run build` — build client and bundle server
- `npm start` — run production build
- `npm run check` — `tsc` typecheck
- `npm run db:push` — push Drizzle schema to Postgres (needs `DATABASE_URL`)

## Project structure

- `client/` — React app (`src/`, `index.html`)
- `server/` — Express app (`index.ts`, `routes.ts`, `storage.ts`, `vite.ts`)
- `shared/schema.ts` — shared DB schema/types
- `attached_assets/` — exported site files (an HTML export and a `jason-clark_org` zip)
- `replit.md` — architecture overview and preferences

## Status

Working full-stack app scaffold with the portfolio features above. Original Replit project: https://replit.com/@undertheclearbl/WebPortfolioBuilder
