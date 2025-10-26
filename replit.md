# Vertex Property Cloud - Property Management Platform

## Overview

Vertex Property Cloud is a modern SaaS platform designed to streamline property management operations for landlords and real estate managers. The platform enables automated rent reminders via WhatsApp, instant invoice delivery, comprehensive property and tenant management, and data-driven insights through analytics dashboards. Built with a focus on automation and user experience, it aims to reduce manual administrative tasks and improve operational efficiency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and data fetching
- Framer Motion for animations and transitions

**UI Framework:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via React Context

**Design System:**
- Ultra-modern SaaS aesthetic inspired by Linear, Framer, and Stripe
- Cool gradient color palette (light blue, slate, purple/teal accents)
- Typography: Inter/Manrope fonts via Google Fonts CDN
- Glassmorphism effects, rounded corners, subtle shadows
- Responsive layout with max-w-7xl containers and generous white space

**Component Architecture:**
- Page-based routing with main home landing page
- Modular section components (Hero, Features, Analytics, Testimonials, Pricing, CTA, Footer)
- Reusable UI components from shadcn/ui library
- Theme provider wrapping application for consistent theming

### Backend Architecture

**Server Framework:**
- Express.js running on Node.js with TypeScript
- ESM module system for modern JavaScript patterns
- Custom Vite integration for development with HMR support

**API Design:**
- RESTful API endpoints under `/api` namespace
- JSON request/response format
- Basic endpoints for testimonials and pricing data
- In-memory storage implementation (MemStorage class) as data layer abstraction

**Middleware Stack:**
- JSON body parsing with raw body preservation for webhook support
- URL-encoded form data parsing
- Custom request logging middleware tracking API response times
- CORS and security headers handled by Vite in development

### Data Storage

**Current Implementation:**
- IStorage interface defining data access contract
- MemStorage class providing in-memory data persistence
- Hardcoded seed data for testimonials and pricing plans

**Database Schema (Drizzle ORM):**
- PostgreSQL dialect configured via Drizzle Kit
- Schema defined in shared/schema.ts for code sharing between client/server
- Users table with UUID primary keys, username/password fields
- Drizzle-Zod integration for runtime schema validation
- Migration support configured to ./migrations directory

**Planned Database:**
- Neon serverless PostgreSQL (driver included in dependencies)
- Connection pooling via pg-simple for session management
- Database URL expected via environment variable

### Authentication & Authorization

**Current State:**
- User schema defined but no authentication endpoints implemented
- Session management dependencies installed (connect-pg-simple)
- No active authentication flows in the application

**Planned Implementation:**
- Session-based authentication with PostgreSQL session store
- User registration and login endpoints
- Password hashing (no specific library currently installed)

### External Dependencies

**Third-Party Services:**
- **WhatsApp Integration:** Implied by feature descriptions but not yet implemented in codebase
- **Email Service:** Required for invoice delivery, not yet configured
- **Google Fonts CDN:** For Inter/Manrope typography

**Frontend Libraries:**
- Radix UI primitives for accessible component foundations
- Recharts for analytics data visualization (bar charts, line charts)
- React Icons (specifically react-icons/si for social media icons)
- Embla Carousel for carousel functionality
- date-fns for date manipulation
- cmdk for command palette functionality

**Build & Development Tools:**
- esbuild for server-side code bundling
- tsx for TypeScript execution in development
- Replit-specific plugins for development experience (cartographer, dev-banner, runtime-error-modal)

**Design Tokens:**
- HSL color system with CSS custom properties
- Separate color definitions for light/dark themes
- Gradient colors specifically for hero CTAs and accents
- Elevation system using rgba overlays for hover/active states

### Project Structure

**Monorepo Layout:**
- `/client` - React frontend application
- `/server` - Express backend application  
- `/shared` - Shared TypeScript types and schemas
- `/attached_assets` - Static assets including generated images
- `/migrations` - Database migration files (empty, pending implementation)

**Path Aliases:**
- `@/*` resolves to `client/src/*`
- `@shared/*` resolves to `shared/*`
- `@assets/*` resolves to `attached_assets/*`

### Build & Deployment

**Development:**
- Concurrent Vite dev server with Express backend
- Hot module replacement for frontend changes
- tsx for TypeScript execution without compilation

**Production:**
- Vite builds frontend to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Single Node.js process serves both static files and API
- Environment-based configuration via NODE_ENV

**Database Management:**
- `npm run db:push` for schema synchronization with Drizzle Kit
- No migration generation workflow currently configured