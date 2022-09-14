import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";
import menuReducer from "./menu";
import placeReducer from "./place";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    menu: menuReducer,
    place: placeReducer,
  },
});
