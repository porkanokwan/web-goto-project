import axios from "../config/axios";

export const getBlog = () => {
  return axios.get("/blog");
};

export const getBlogById = (blogId) => {
  return axios.get(`/blog/${blogId}`);
};

export const createLike = (id) => {
  return axios.post(`/blog/${id}/like`);
};

export const deleteLike = (id) => {
  return axios.delete(`/blog/${id}/like`);
};

export const createNewBlog = (form, titleShow, place) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("provinceId", form.provinceId);
  formData.append("categoryId", form.categoryId);
  formData.append("content", form.content);
  formData.append("cover_pic", form.coverPic);
  formData.append("titleShow", titleShow);
  formData.append("place", JSON.stringify(place));
  for (let item of place) {
    formData.append("picture", item.picture);
  }
  return axios.post("/blog", formData);
};

export const updatedBlog = (blogId, form, titleShow, place) => {
  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("provinceId", form.provinceId);
  formData.append("categoryId", form.categoryId);
  formData.append("content", form.content);
  formData.append("cover_pic", form.coverPic);
  formData.append("titleShow", titleShow);
  formData.append("place", JSON.stringify(place));
  for (let item of place) {
    formData.append("picture", item.picture);
  }
  return axios.patch(`/blog/${blogId}`, formData);
};

export const deleteBlog = (blogId) => {
  return axios.delete(`/blog/${blogId}`);
};
