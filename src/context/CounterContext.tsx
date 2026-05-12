import { createContext } from "react";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});
