import { useState } from "react";
import { z } from "zod";

// 1. Define Schema
const UserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  // Note: We use coerce here because input values are always strings
  age: z.coerce.number().min(18, "You must be at least 18 years old"),
});

// Infer the type from the schema for our success state
type UserData = z.infer<typeof UserSchema>;

const ZodForm = () => {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [successData, setSuccessData] = useState<UserData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Grab data from the form
    const formData = new FormData(e.currentTarget);
    const dataToValidate = Object.fromEntries(formData.entries());

    // 2. Validate with Zod
    const result = UserSchema.safeParse(dataToValidate);

    if (!result.success) {
      // Handle Failure
      setErrors(result.error.flatten().fieldErrors);
      setSuccessData(null);
    } else {
      // Handle Success
      setErrors({});
      setSuccessData(result.data); // result.data is typed as UserData
      e.currentTarget.reset(); // Clear the form on success
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Zod Validation Lab</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <label>Username:</label>
          <input
            name="username"
            type="text"
            style={{ display: "block", width: "100%" }}
          />
          {errors.username && (
            <small style={{ color: "red" }}>{errors.username[0]}</small>
          )}
        </div>

        <div>
          <label>Age:</label>
          <input
            name="age"
            type="number"
            style={{ display: "block", width: "100%" }}
          />
          {errors.age && (
            <small style={{ color: "red" }}>{errors.age[0]}</small>
          )}
        </div>

        <button
          type="submit"
          style={{ marginTop: "10px", padding: "8px", cursor: "pointer" }}
        >
          Register
        </button>
      </form>

      {/* 3. Display Success State */}
      {successData && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#e6fffa",
            border: "1px solid #38b2ac",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#2c7a7b", margin: "0 0 10px 0" }}>
            ✅ Success!
          </h3>
          <p>
            <strong>Username:</strong> {successData.username}
          </p>
          <p>
            <strong>Age:</strong> {successData.age}
          </p>
        </div>
      )}
    </div>
  );
};

export default ZodForm;
