import { useState } from "react";
import { useTimer } from "../advance/useTimer";
import { useAdvice } from "../advance/useAdvice";
import { Button } from "../advance/Button";
// Import your hooks and button here

// 1. THE WIDGET (The "Child")
// This component holds the logic. When this component is removed,
// the hooks inside it (useTimer, useAdvice) ARE KILLED.
const ActualWidget = () => {
  const seconds = useTimer(true); // Always true because if this renders, it's active
  const { advice } = useAdvice();

  const isLoading = !advice;

  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <p>Timer: {seconds}s</p>
      {isLoading ? (
        <p style={{ color: "#64748b" }}>Fetching wisdom...</p>
      ) : (
        <p style={{ fontWeight: "500" }}>"{advice}"</p>
      )}
    </div>
  );
};

// 2. THE DASHBOARD (The "Parent")
const DashboardWidget = () => {
  const [showWidget, setShowWidget] = useState(true);

  return (
    <div style={{ padding: "40px" }}>
      {showWidget ? (
        <>
          <ActualWidget />
          <Button variant="danger" onClick={() => setShowWidget(false)}>
            KILL WIDGET
          </Button>
        </>
      ) : (
        <Button onClick={() => setShowWidget(true)}>
          REBORN (Reset Everything)
        </Button>
      )}
    </div>
  );
};

export default DashboardWidget;
