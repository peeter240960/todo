# Next.js 15 Todo Application

A modern Todo application built with Next.js 15 using the App Router architecture, featuring a clean feature-based structure and TypeScript support.

## 🚀 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: Feature-based modular structure

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router directory
│   ├── favicon.ico        # Application favicon
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
├── features/              # Feature-based modules
│   ├── common/           # Shared feature utilities
│   │   ├── mock.ts       # Mock data and utilities
│   │   └── types.ts      # Shared model types
│   └── todo/             # Todo feature module
│       ├── index.ts      # Feature exports
│       ├── todo.container.tsx  # Todo container component
│       ├── todo.content.tsx    # Todo content component
│       └── todo.types.tsx      # Todo component types
├── functions/            # Utility functions and helpers
└── services/            # API services and external integrations
```

## 🏗️ Architecture Overview

### App Router (Next.js 15)
This project utilizes Next.js 15's App Router, which provides:
- File-based routing with enhanced features
- Server and Client Components
- Improved performance and developer experience
- Built-in TypeScript support

### Feature-Based Architecture
The application follows a feature-based structure where:
- Each feature is self-contained in its own directory
- Common utilities are shared across features
- Clean separation of concerns between features

### Component Structure
- **Containers**: Handle business logic and state management
- **Content**: Handle presentation and UI rendering
- **Types**: TypeScript definitions for type safety

## 🚦 Getting Started

### Prerequisites
- Node.js v22.15.0 
- pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:
```bash
corepack enable pnpm
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.