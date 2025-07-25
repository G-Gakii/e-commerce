import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishList";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
