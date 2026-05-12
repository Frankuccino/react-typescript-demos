import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h2>Focus Input</h2>
      <div style={{ display: "flex", gap: 15, width: "100%" }}>
        <input
          type="text"
          placeholder="Click the button to focus"
          ref={inputRef}
          style={{ padding: "20px 60px" }}
        />
        <button onClick={() => inputRef.current?.focus()}>Click me</button>
      </div>
    </div>
  );
};

export default FocusInput;
