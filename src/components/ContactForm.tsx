import { useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  // 1. Initialize state with empty strings (not null) so the inputs are always "controlled"
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  // 2. The Type Annotation for Change Events
  // Use React.ChangeEvent and pass the specific HTML element type in brackets
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // 3. Functional update to keep existing state and update the specific field
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    // Submit logic here (API call, etc.)
  };

  return (
    <section>
      <h2>Contact Form (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name} // Binds the UI to the State
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Message:</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
