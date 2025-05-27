import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: true,
  error: null,
  status: true
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {},
    updatePost: (state, action) => {},
    deletePost: (state, action) => {},
    getPost: (state, action) => {},
    getPosts: (state, action) => {},
    uploadFile: (state, action) => {},
    deleteFile: (state, action) => {},
    getFilePreview: (state, action) => {},
  },
});

export const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  uploadFile,
  deleteFile,
  getFilePreview,
} = postSlice.actions;

export default postSlice;
