import { type AdminInfoList } from "../types";
// make sure that it's not only 'import {...} ...'
// but instead add 'import type { AdminInfoList }' or through 'import {type AdminInfoList}'
interface AdminProp {
  admin: AdminInfoList;
}

const AdminInfo = ({ admin }: AdminProp) => {
  const { id, name, role, email, lastLogin } = admin;
  return (
    <div>
      <h1>Admin Information</h1>
      <h3>
        {name} ({role})
      </h3>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <small>Last Login: {lastLogin.toLocaleString()}</small>
    </div>
  );
};

export default AdminInfo;
