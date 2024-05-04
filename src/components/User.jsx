import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    return logout();
  }

  return (
    <div className={styles.user}>
      <img
        src={user.avatar}
        alt={user.name}
      />
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
