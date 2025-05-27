import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/features/auth/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();

  function logoutHandler() {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch((err) => console.log("Error", err));
  }

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
