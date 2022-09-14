import { createSlice } from "@reduxjs/toolkit";
import {
  createReview,
  deleteReview,
  getPlaceById,
  updateReview,
} from "../api/placeApi";

const placeSlice = createSlice({
  name: "place",
  initialState: {
    place: {},
    reviews: [],
  },
  reducers: {
    getPlaces(state, action) {
      state.place = action.payload.place;
      state.reviews = action.payload.place.Reviews;
    },
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
    updatedReviewPlace(state, action) {
      const idx = state.reviews.findIndex((el) => el.id === action.payload.id);
      state.reviews.splice(idx, 1, action.payload);
    },
    deletedReviewPlace(state, action) {
      const idx = state.reviews.findIndex(
        (el) => el.id === action.payload.reviewId
      );
      state.reviews.splice(idx, 1);
    },
  },
});

export default placeSlice.reducer;
export const { getPlaces, addReview, updatedReviewPlace, deletedReviewPlace } =
  placeSlice.actions;

export const fetchPlace = (placeId) => async (dispatch) => {
  try {
    const res = await getPlaceById(placeId);
    dispatch(getPlaces({ place: res.data.place }));
  } catch (err) {
    console.log(err);
  }
};

export const createdReview =
  (placeId, review, reviewPic) => async (dispatch) => {
    try {
      const res = await createReview(placeId, review, reviewPic);
      dispatch(addReview(res.data.review));
    } catch (err) {
      console.log(err);
    }
  };

export const updatedReview =
  (reviewId, placeId, review, reviewPic) => async (dispatch) => {
    try {
      const res = await updateReview(reviewId, placeId, review, reviewPic);
      console.log(res.data.review);
      dispatch(updatedReviewPlace(res.data.review));
    } catch (err) {
      console.log(err);
    }
  };

export const deletedReview = (reviewId, placeId) => async (dispatch) => {
  try {
    await deleteReview(reviewId, placeId);
    dispatch(deletedReviewPlace(reviewId));
  } catch (err) {
    console.log(err);
  }
};
