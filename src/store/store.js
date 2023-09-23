import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../favorites/store/fovoritesSlice";

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
