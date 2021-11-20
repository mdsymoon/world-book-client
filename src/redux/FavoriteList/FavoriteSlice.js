import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "writer",
  initialState: {
    favoriteBook: [],
  },
  reducers: {
    addFavorite: (state,  {payload} ) => {
      state.favoriteBook.push(payload);
    },
  },
});


export default favoriteSlice.reducer;
export const {addFavorite} = favoriteSlice.actions;
