import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "2px solid #3a38cd",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Counter with Context API:</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
