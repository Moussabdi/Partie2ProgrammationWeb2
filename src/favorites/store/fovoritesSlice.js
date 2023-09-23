import { createSlice } from "@reduxjs/toolkit";
import reducers from "./favoritesReducers";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favories: [],
  },
  reducers: reducers,
});
export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;
