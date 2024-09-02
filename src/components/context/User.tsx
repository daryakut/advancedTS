import { useContext } from "react";
import { UserContext } from "./UserContext";
export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({ name: "daria", email: "qwe@.com" });
      console.log("Logged in as:", userContext.user);
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
      console.log("Logged out");
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};
