import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      const exists = state.item.some(
        (wish) => wish.name === action.payload.name
      );
      if (!exists) {
        state.item.push(action.payload);
      } else {
        alert("item already in wish list");
      }
    },
    RemoveItem: (state, action) => {
      state.item = state.item.filter(
        (wish) => wish.name !== action.payload.name
      );
    },
    ClearWishlist: (state) => {
      state.item = [];
    },
  },
});

export const { AddItem, RemoveItem, ClearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
