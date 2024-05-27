import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      }).catch(err => {
        console.error("Failed to parse JSON response:", err);
        setUserInfo(null);
      });
    }).catch(err => {
      console.error("Failed to fetch profile:", err);
      setUserInfo(null);
    });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    }).then(() => {
      setUserInfo(null);
    }).catch(err => {
      console.error("Failed to logout:", err);
    });
  }

  const username = userInfo?.username;
  console.log(username);

  return (
    <header>
      <Link to="/" className="logo">My Blog</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create</Link>
            <Link onClick={logout}>Logout {username}</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
