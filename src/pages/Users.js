import { useEffect } from "react";
import "./user.css";
import useUsersFacade from "../facades/useUsersFacade";

const Users = () => {
  const { users, loading, error, fetchUsers } = useUsersFacade();

  useEffect(() => fetchUsers(), []);

  return (
    <div>
      {loading && <p data-testid="loading">Loading...</p>}
      {error && <p data-testid="error">{error}</p>}
      {users?.length > 0 && (
        <div>
          <ul data-testid="users-list" className="users-list">
            {users.map((user) => (
              <li className="user-card" key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Users;
