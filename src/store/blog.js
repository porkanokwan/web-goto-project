import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "getBlog",
  initialState: {
    blog: [],
    placeInblogs: {},
  },
  reducers: {
    getAllBlog(state, action) {
      state.blog = action.payload.blog;
      state.placeInblogs = action.payload.blog.reduce((acc, item) => {
        acc[item.id] = item.PlaceInBlogs;
        return acc;
      }, {});
    },
    createBlog(state, action) {
      state.blog = [action.payload.blog, ...state.blog];
      state.placeInblogs = action.payload.blog.PlaceInBlogs.reduce(
        (acc, item) => {
          acc[item.id] = item;
          return acc;
        },
        { ...state.placeInblogs }
      );
    },
    updateBlog(state, action) {
      const blogs = [...state.blog];
      const idx = blogs.findIndex((el) => el.id === action.payload.blog.id);
      blogs[idx] = action.payload.blog;
      state.blog = blogs;
      const place = { ...state.placeInblogs };
      place[idx] = action.payload.blog.PlaceInBlogs;
      state.placeInblogs = place;
    },
  },
});

export default blogSlice.reducer;
export const { getAllBlog, createBlog, updateBlog } = blogSlice.actions;
