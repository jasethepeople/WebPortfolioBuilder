# Portfolio Web Application

## Overview

This is a modern full-stack portfolio application built with React, Express.js, and PostgreSQL. The application showcases a personal portfolio with project galleries and interactive dialogs. It uses a clean, component-based architecture with TypeScript throughout and implements modern UI patterns with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Express sessions with PostgreSQL store

### Data Storage
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for shared types between client and server
- **Migrations**: Drizzle migrations stored in `./migrations` directory
- **Development Storage**: In-memory storage fallback for development (`MemStorage` class)

## Key Components

### Frontend Components
- **Portfolio Page**: Main landing page displaying project cards and information
- **Project Dialog**: Modal component for detailed project views with features and tags
- **UI Components**: Complete shadcn/ui component library including dialogs, buttons, cards, forms, and navigation
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Services
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Request Logging**: Custom middleware for API request logging and response tracking
- **Error Handling**: Global error handling middleware

### Shared Resources
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **User Model**: Basic user entity with username/password authentication

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express.js handles REST API endpoints with `/api` prefix
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for type-safe queries
5. **Response**: JSON responses with proper error handling and logging

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **@radix-ui/***: Primitive UI components for accessibility
- **class-variance-authority**: Utility for component variant styling
- **date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Fast development server and build tool
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle handles schema migrations and deployments

### Environment Configuration
- **Development**: Uses `NODE_ENV=development` with hot reloading
- **Production**: Serves static files and runs optimized server bundle
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both client and server
- `npm start`: Production server
- `npm run db:push`: Deploy database schema changes

The application follows a monorepo structure with clear separation between client, server, and shared code, making it maintainable and scalable for portfolio and project showcase purposes.