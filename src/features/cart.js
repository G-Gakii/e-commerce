import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItem.find((i) => i.name === item.name);
      if (!existingItem) {
        state.cartItem.push({ ...item, quantity: 1 });
      } else {
        alert(
          "Item already in Cart. would you like to increase  the quantity?"
        );
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.cartItem.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { AddItemToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
