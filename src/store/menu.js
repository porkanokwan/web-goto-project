import { createSlice } from "@reduxjs/toolkit";
import { createMenu, deleteMenu, getMenu, updateMenuId } from "../api/placeApi";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: {},
  },
  reducers: {
    getMenuByPlaceId(state, action) {
      state.menus[action.payload.menus.id] = action.payload.menus.Menus;
    },
    createdNewMenu(state, action) {
      state.menus[action.payload.placeId].push(action.payload.menus);
    },
    updatedMenu(state, action) {
      const idx = state.menus[action.payload.placeId].findIndex(
        (el) => el.id === action.payload.menus.id
      );
      state.menus[action.payload.placeId][idx] = { ...action.payload.menus };
    },
    deletedMenu(state, action) {
      const idx = state.menus[action.payload.placeId].findIndex(
        (el) => el.id === action.payload.menuId
      );
      state.menus[action.payload.placeId].splice(idx, 1);
    },
  },
});

export default menuSlice.reducer;
export const { getMenuByPlaceId, createdNewMenu, updatedMenu, deletedMenu } =
  menuSlice.actions;

export const getAllMenu = (placeId) => async (dispatch) => {
  try {
    const res = await getMenu(placeId);
    dispatch(getMenuByPlaceId({ menus: res.data.placeMenu }));
  } catch (err) {
    console.log(err);
  }
};

export const addMenu = (placeId, title, menuPic) => async (dispatch) => {
  try {
    const res = await createMenu(placeId, title, menuPic);
    dispatch(createdNewMenu({ menus: res.data.newMenu, placeId }));
  } catch (err) {
    console.log(err);
  }
};

export const updateMenu =
  (menuId, placeId, title, menuPic) => async (dispatch) => {
    try {
      const res = await updateMenuId(menuId, placeId, title, menuPic);
      dispatch(updatedMenu({ menus: res.data.menu, placeId }));
    } catch (err) {
      console.log(err);
    }
  };

export const removeMenu = (menuId, placeId) => async (dispatch) => {
  try {
    await deleteMenu(menuId, placeId);
    dispatch(deletedMenu({ menuId, placeId }));
  } catch (err) {
    console.log(err);
  }
};
