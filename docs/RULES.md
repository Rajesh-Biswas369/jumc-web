# Development Rules & Guidelines

## 1. TypeScript Strictness
- Enforce strict typing across the entire codebase.
- Avoid the use of `any`. Define interfaces and types for all props, states, and API responses.
- Enable `strict: true` in `tsconfig.json`.

## 2. Component Reusability
- Keep components small and focused.
- Extract repeated logic into custom hooks.
- Use atomic design principles for UI elements (Buttons, Inputs, Cards).

## 3. Tailwind Styling
- Follow utility-first principles.
- Use `clsx` or `tailwind-merge` for dynamic class assignment.
- Keep standard breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) consistent.

## 4. State Management
- Prefer React Context for global UI state.
- Use server state management (like React Query or SWR) for API fetching and caching.
