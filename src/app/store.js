import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishList";
import cartReducer from "../features/cart";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});
