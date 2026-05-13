import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  // 1. Pluralized setter for clarity
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );

        // 2. Proper response validation
        if (!response.ok)
          throw new Error(`Error: ${response.status} - Failed to fetch users`);

        const result: User[] = await response.json();
        setUsers(result);
      } catch (err) {
        // 3. Fixed "AbortError" string (No space)
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function: Essential for React StrictMode
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading Users data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <h1>Users List</h1>
      <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {users?.map(({ id, name, username, email, phone }) => (
          <div
            key={id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              flex: "1 1 300px",
            }}
          >
            <h2 style={{ fontSize: "1.2rem", margin: "0" }}>
              {name}{" "}
              <span style={{ color: "#666", fontSize: "0.9rem" }}>
                @{username}
              </span>
            </h2>
            <hr />
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default UserList;
