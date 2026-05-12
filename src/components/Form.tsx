import { useRef, useState } from "react";

// Renamed to avoid name collision with the Component
type FormFields = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormFields | null>(null);

  // Using specific HTML types for better VS Code autocomplete
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // GUARD CLAUSE: Ensure all refs exist before proceeding
    // This is safer than using the '!' (non-null assertion) operator
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      return;
    }

    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    // CLEANER RESET: Resets the entire form UI at once
    e.currentTarget.reset();
  };

  return (
    <section>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h2>Submitted Info:</h2>
        <p>
          <strong>Name:</strong> {submittedData?.name}
        </p>
        <p>
          <strong>Email:</strong> {submittedData?.email}
        </p>
        <p>
          <strong>Password:</strong> {submittedData?.password}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} required />
        <input type="email" placeholder="Email" ref={emailRef} required />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Form;
