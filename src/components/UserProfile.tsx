import { useState } from "react";

interface UserInfoState {
  id: number;
  name: string;
  isActive: boolean;
}

const UserProfile = () => {
  const userProfile: UserInfoState = {
    id: 1,
    name: "Frank",
    isActive: true,
  };

  const [user, setUser] = useState<UserInfoState | null>(userProfile);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { id, name, isActive } = user;

  return (
    <div>
      <h1>UserProfile</h1>
      <h3>
        User: {name} | ID: {id} | Status: {isActive ? "Active" : "Inactive"}
      </h3>
      <input
        type="text"
        onChange={({ target: { value } }) =>
          setUser((prev) => (prev ? { ...prev, name: value } : null))
        }
        placeholder="Enter new name..."
      />
    </div>
  );
};

export default UserProfile;
