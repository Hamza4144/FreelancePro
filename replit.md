# SHARP SOL Web Agency

## Overview

This is a professional web development agency portfolio website built with a modern full-stack architecture. The application showcases SHARP SOL's services, portfolio, and provides a contact form for potential clients. It uses a clean, responsive design with a focus on user experience and modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API endpoints for contact form submissions
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Development Setup
- **Monorepo Structure**: Client, server, and shared code in organized folders
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend development
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Company branding with call-to-action buttons
- **Services Section**: Grid layout showcasing web development services
- **Portfolio Section**: Filterable project showcase with technology tags
- **About Section**: Company information with statistics
- **Technologies Section**: Technology stack display
- **Contact Form**: Validated contact form with budget selection
- **Footer**: Company links and social media

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed API request logging for debugging

### Shared Resources
- **Database Schema**: Drizzle schema definitions for users and contact submissions
- **Validation**: Zod schemas for runtime type validation
- **Types**: Shared TypeScript types across client and server

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validates using Zod schema
   - React Hook Form handles form state
   - TanStack Query manages API request
   - Backend validates and stores submission
   - Success/error feedback via toast notifications

2. **Content Rendering**:
   - Static content rendered from React components
   - Responsive design adapts to different screen sizes
   - Smooth scrolling navigation between sections
   - Dynamic filtering in portfolio section

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icons via CSS classes

### Development Tools
- **Drizzle Kit**: Database migrations and schema management
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TSX**: TypeScript execution for development server

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database
- **Express.js**: Web framework for Node.js
- **Connect PG Simple**: PostgreSQL session store

## Deployment Strategy

### Development
- Vite dev server for frontend with hot module replacement
- TSX for backend development with auto-restart
- Environment variables for database configuration
- Replit-specific development tools and banners

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild compiles TypeScript server to `dist/index.js`
- Database: Drizzle migrations handle schema updates
- Single-command build process for both frontend and backend

### Database Management
- PostgreSQL dialect with Drizzle ORM
- Migration files stored in `./migrations`
- Schema defined in `shared/schema.ts`
- Environment variable configuration for database URL

The application follows modern web development best practices with a focus on type safety, performance, and maintainability. The architecture supports easy scaling and modification while maintaining clean separation of concerns between frontend, backend, and shared resources.