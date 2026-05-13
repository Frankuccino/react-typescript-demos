// hooks/useAdvice.ts
import { useState, useEffect } from "react";

export const useAdvice = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((err) => {
        // 🟢 THE FIX: Check if the error is an Abort
        if (err.name === "AbortError") {
          console.log("Fetch aborted: Component unmounted safely.");
        } else {
          // Handle actual network errors here
          console.error("Fetch error:", err);
        }
      });

    return () => controller.abort();
  }, []);

  return { advice }; // 👈 Return an object now
};
