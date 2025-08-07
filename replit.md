# Resume Website

## Overview

This is a professional resume website for S Sugale Christo, an MBA candidate in Marketing and Human Resources. The application is built as a modern web portfolio showcasing professional experience, education, skills, and community involvement. It features a responsive design with interactive elements, contact form functionality, and print-friendly layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

### Recent Updates (August 7, 2025)
- Integrated user's professional photo in hero section with attractive animated background
- Enhanced mobile-first design with proper spacing and borders for all white background boxes
- Added floating action buttons for quick contact (email, phone, WhatsApp, PDF download)
- Implemented creative animations including typing effect and skill progress bars
- All sections now use mobile-optimized spacing and responsive design patterns

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Components**: Extensive use of Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with Shadcn/ui component library for consistent design system
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints for contact form submissions
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Storage Pattern**: Abstracted storage interface with in-memory fallback for development
- **Middleware**: Custom logging, JSON parsing, and error handling middleware

### Component Structure
- **Layout Components**: Navigation, Hero, Footer with responsive design
- **Content Sections**: About, Experience, Education, Skills, Community involvement
- **Interactive Elements**: Contact form, back-to-top button, mobile navigation
- **Print Optimization**: CSS classes to hide non-essential elements during printing

### Styling System
- **Design Tokens**: CSS custom properties for colors, spacing, and typography
- **Component Variants**: Class Variance Authority for consistent component styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Font Loading**: Google Fonts integration with Inter and Font Awesome icons

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter), React Query
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Development Tools**: tsx for development server, runtime error overlays

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Font Awesome, Lucide React icons
- **Animations**: Framer Motion for transitions and scroll animations

### Backend Services  
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation and schema validation

### Form and Data Handling
- **Form Management**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date formatting and manipulation
- **Utilities**: clsx and tailwind-merge for conditional styling

### Development and Deployment
- **Replit Integration**: Custom Replit plugins for development environment
- **Error Handling**: Runtime error modal for development debugging
- **Code Quality**: TypeScript strict mode for type safety