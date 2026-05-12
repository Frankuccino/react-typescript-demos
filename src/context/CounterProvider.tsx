import { useState, type ReactNode } from "react";
import { CounterContext } from "./CounterContext";

interface CounterProviderProp {
  children: ReactNode;
}

const CounterProvider = ({ children }: CounterProviderProp) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
