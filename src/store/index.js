import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
