# Contributing to MulmoCast

Thank you for your interest in contributing to MulmoCast App! This guide will help you understand the project structure and development workflow.

## Project Overview

MulmoCast is an Electron application with a React frontend and Express backend. The application provides a modern desktop interface for managing multimedia casting projects.

## Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express, Node.js
- **Desktop**: Electron
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components

## Project Structure

```
mulmocast-app/
├── src/
│   ├── express/          # Backend Express server
│   └── react/            # Frontend React application
│       ├── components/   # React components
│       │   └── ui/      # shadcn/ui base components
│       ├── lib/         # Utilities and helpers
│       └── styles/      # CSS styles
```

## Development Setup

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Start development server**:
   ```bash
   yarn start
   ```

3. **Run linting**:
   ```bash
   yarn lint
   ```

4. **Format code**:
   ```bash
   yarn format
   ```

## Adding shadcn/ui Components

To add new shadcn/ui components to the project:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```
