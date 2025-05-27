import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/features/auth/authSlice.js";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log("error agaya hai yahan pe", error))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-amber-400">
      <div className="w-full block">
        <Header></Header>
        <main>
          TODO:<Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
