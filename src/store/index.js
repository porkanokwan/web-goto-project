import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";
import menuReducer from "./menu";
import placeRecucer from "./place";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    place: placeRecucer,
    menu: menuReducer,
  },
});
