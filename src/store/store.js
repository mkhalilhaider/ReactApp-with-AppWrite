import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import postSlice from "./features/post/postSlice";


const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postSlice
  },
});

export default store;
