# ⚛️ React + TypeScript: The Evolution

This repository is the direct successor to my [React Monsterclass](https://github.com/Frankuccino/react-monsterclass) journey. It marks the transition from standard JavaScript (`.jsx`) to type-safe development (`.tsx`), focusing on building robust, crash-proof components.

> **Status:** Active Evolution | Leveling up from React Fundamentals to Enterprise TypeScript Patterns.

---

## ⏱️ Technical Progress Log (Successor Phase)

This log tracks the active engineering effort since crossing the 10-hour mark of the curriculum.

| Phase  | Milestone                     | Video Progress      | Actual Effort | Status       |
| :----- | :---------------------------- | :------------------ | :------------ | :----------- |
| **01** | **TSX Fundamentals & State**  | 10:12:00 - 10:51:00 | **2h 05m**    | ✅ Completed |
| **02** | **Hooks, Context & Fetching** | 10:51:00 - 11:29:00 | **2h 15m**    | ✅ Completed |

**Session Stats:**

- **Video Span:** 39m (Phase 1) + 38m (Phase 2) = 77 Minutes (1h 17m)
- **Engineering Time:** 25m (Phase 1) + 135m (Phase 2) = 260 Minutes (4h 20m)
- **Focus:** State Generics, Form Events, Hooks Mastery, Context API, and Zod Validation.

---

## 🚀 Recent Implementations

I have successfully migrated core React patterns into the TypeScript ecosystem, focusing on type-safe architecture and optimized data flow.

### 1. Type-Safe Todo List

- **State Management:** Implemented `useState<Todo[]>([])` to ensure the collection strictly adheres to a defined `interface`.
- **Modern Event Handling:** Mastered `React.SubmitEvent` and `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>` for robust user interaction.

### 2. User Profile Architecture

- **Component Props:** Utilized **Intersection Types** (`&`) to create a hierarchical data structure (`Info` base type + `Admin` specific fields) for cleaner, DRYer code.
- **Conditional Rendering:** Implemented type-safe boolean checks for user status and roles.

### 3. Advanced State & Global Context

- **Context API:** Built a global state provider using `createContext` and `useContext`, properly typing the `ReactNode` children.
- **useReducer Logic:** Engineered a state machine utilizing **Discriminated Unions** for strict `Action` and `Dispatch` typing.

### 4. Form Performance & Validation

- **Uncontrolled Components:** Leveraged `useRef` and the **Native FormData API** (`Object.fromEntries`) to handle data without unnecessary re-renders.
- **Runtime Validation (Zod):** Integrated **Zod** schemas to bridge the gap between runtime DOM data and static TypeScript types.
- **Type Inference:** Utilized `z.infer` to maintain a "Single Source of Truth," generating TS types directly from validation schemas.

### 5. Async Data & API Integration

- **Product Architecture:** Engineered a system that fetches and types external data from `dummyjson.com`.
- **Lifecycle Management:** Managed **AbortController** clean-up functions and loading/error states within `useEffect` to ensure memory-safe API calls.

---

## 🧠 Technical Deep-Dive

### TypeScript Patterns Mastered:

- **Props Typing:** Moving away from `PropTypes` to compile-time `interface` and `type` definitions.
- **Granular Event Typing:**
  - `React.SubmitEvent`: Leveraged modern submission types for precise form handling.
  - `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`: Managed real-time state synchronization across multiple input types.
  - `React.MouseEvent<HTMLButtonElement>`: Handled complex click and hover interactions with specific element targeting.
  - `React.KeyboardEvent`: Implemented accessibility patterns and keyboard-driven navigation.
- **Intersection Types:** Leveraging `type AdminProps = UserInfo & { role: string }` to keep code DRY (Don't Repeat Yourself).
- **Verbatim Module Syntax:** Configured the environment for strict type-only imports (`import type { ... }`).
- **Provider Pattern:** Typing `Context` values and ensuring `null` safety for consumers.
- **Reducer Actions:** Using Union Types for action payloads to ensure exhaustive switch-case handling.
- **Zod Coercion:** Handling the "String-to-Number" gap between HTML inputs and TypeScript logic using `z.coerce`.
- **Children Props:** Utilizing `React.ReactNode` for flexible, type-safe component nesting.

---

## 🛠️ Tech Stack & Setup

- **Framework:** React 18/19 (Vite-powered)
- **Language:** TypeScript (Strict Mode)
- **Runtime:** Node.js v24.13.0
- **Key Extensions:** JS & TS Nightly, ESLint, Prettier

### Getting Started

```bash
# Clone the evolution
git clone https://github.com/Frankuccino/react-typescript-demos.git

# Install dependencies
npm install

# Run development server
npm run dev
```

### Up Next:

- [ ] **Tailwind CSS Styling** (Starting at 11:29:00)
