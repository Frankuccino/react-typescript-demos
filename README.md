# ⚛️ React + TypeScript: The Evolution

This repository is the direct successor to my [React Monsterclass](https://github.com/Frankuccino/react-monsterclass) journey. It marks the transition from standard JavaScript (`.jsx`) to type-safe development (`.tsx`), focusing on building robust, crash-proof components.

> **Status:** Active Evolution | Leveling up from React Fundamentals to Enterprise TypeScript Patterns.

---

## ⏱️ Technical Progress Log (Successor Phase)

This log tracks the active engineering effort since crossing the 10-hour mark of the curriculum.

| Phase  | Milestone                    | Video Progress      | Actual Effort | Status       |
| :----- | :--------------------------- | :------------------ | :------------ | :----------- |
| **01** | **TSX Fundamentals & State** | 10:12:00 - 10:51:00 | **2h 05m**    | ✅ Completed |

**Session Stats:**

- **Video Span:** 39 Minutes
- **Engineering Time:** 125 Minutes
- **Focus:** State Generics, Form Events, and Prop Intersections.

---

## 🚀 Recent Implementations

I have successfully migrated core React patterns into the TypeScript ecosystem, focusing on state management and event handling.

### 1. Type-Safe Todo List

- **State Management:** Implemented `useState<Todo[]>([])` to ensure the collection strictly adheres to the Todo interface.
- **Form Event Handling:** Mastered `React.FormEvent` and `React.ChangeEvent<HTMLInputElement>` to handle data flow and submission logic.
- **Current Scope:** Focuses on type-safe creation and rendering of list items (Update/Delete logic to follow).

### 2. User Profile Architecture

- **Component Props:** Utilized **Intersection Types** (`&`) to create a hierarchical data structure (`Info` base type + `Admin` specific fields).
- **Conditional Rendering:** Type-safe boolean checks for status and roles.

### 3. Advanced State & Counters

- Simple and complex state management using Generics to prevent runtime type mismatches.

---

## 🧠 Technical Deep-Dive

### TypeScript Patterns Mastered:

- **Props Typing:** Moving away from `PropTypes` to compile-time `interface` and `type` definitions.
- **Event Typing:**
  - `React.ChangeEvent<HTMLInputElement>` for real-time input tracking.
  - `React.FormEvent` for secure form submissions.
- **Intersection Types:** Leveraging `type AdminProps = UserInfo & { role: string }` to keep code DRY (Don't Repeat Yourself).
- **Verbatim Module Syntax:** Configured the environment for strict type-only imports (`import type { ... }`).

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
