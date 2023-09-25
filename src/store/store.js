import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "../Meal/store/mealSlice";
import favoriteReducer from "../favorites/store/favoritesSlice";

export default configureStore({
  reducer: {
    meals: mealReducer,
    favorites: favoriteReducer,
  },
});
