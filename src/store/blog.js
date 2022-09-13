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
  },
});

export default blogSlice.reducer;
export const { getAllBlog, createBlog } = blogSlice.actions;
