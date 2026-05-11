import { type Info } from "../types";

interface UserProp {
  user: Info;
}

const UserInfo = ({ user }: UserProp) => {
  const { id, name, email } = user;

  return (
    <div>
      <h1>User Information</h1>
      <h3>{name} </h3>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
