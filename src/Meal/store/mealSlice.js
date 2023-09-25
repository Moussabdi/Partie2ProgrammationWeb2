import { createSlice } from "@reduxjs/toolkit";
import reducers from "./mealReducers";

export const mealSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
  },
  reducers: reducers,
});

export const { updateMeal } = mealSlice.actions;

export default mealSlice.reducer;
