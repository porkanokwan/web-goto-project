import { createSlice } from "@reduxjs/toolkit";
import {
  createReview,
  deleteReview,
  getPlaceById,
  updatePlace,
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
      state.reviews.unshift(action.payload);
    },
    updatedReviewPlace(state, action) {
      const idx = state.reviews.findIndex((el) => el.id === action.payload.id);
      state.reviews.splice(idx, 1, action.payload);
    },
    deletedReviewPlace(state, action) {
      const idx = state.reviews.findIndex((el) => el.id === action.payload);
      state.reviews.splice(idx, 1);
    },
    updatePlaceId(state, action) {
      state.place = action.payload;
    },
  },
});

export default placeSlice.reducer;
export const {
  getPlaces,
  addReview,
  updatedReviewPlace,
  deletedReviewPlace,
  updatePlaceId,
} = placeSlice.actions;

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

export const updatedPlace =
  (placeForm, placePic, placeId) => async (dispatch) => {
    try {
      const res = await updatePlace(placeForm, placePic, placeId);
      dispatch(updatePlaceId(res.data.place));
    } catch (err) {
      console.log(err);
    }
  };
