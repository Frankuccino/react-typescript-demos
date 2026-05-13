import { useEffect, useState } from "react";

const DashboardWidget = () => {
  // 1. We wrap everything in a 'Parent' state.
  // If 'isAlive' is false, the Widget is deleted from memory.
  const [isAlive, setIsAlive] = useState(true);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>useEffect Sprint</h1>

      {isAlive ? (
        <ActualWidget killMe={() => setIsAlive(false)} />
      ) : (
        <div>
          <p>🛑 Widget is Dead. Memory is clear.</p>
          <button onClick={() => setIsAlive(true)}>REBORN (Reset Logic)</button>
        </div>
      )}
    </div>
  );
};

// 2. This is the component that holds the Timer and the Fetch
const ActualWidget = ({ killMe }: { killMe: () => void }) => {
  const [seconds, setSeconds] = useState(0);
  const [advice, setAdvice] = useState("");

  // TIMER EFFECT
  useEffect(() => {
    console.log("🟢 Timer Started");
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      console.log("🔴 Timer Cleaned Up");
      clearInterval(interval);
    };
  }, []);

  // FETCH EFFECT
  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.adviceslip.com/advice`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    return () => {
      console.log("🔴 Fetch Aborted");
      controller.abort();
    };
  }, []);

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>I am Alive!</h2>
      <p>
        Timer: <strong>{seconds}s</strong>
      </p>
      <p>
        Advice: <em>{advice || "Loading..."}</em>
      </p>

      <button
        onClick={killMe}
        style={{
          background: "red",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        KILL WIDGET
      </button>
    </div>
  );
};

export default DashboardWidget;
