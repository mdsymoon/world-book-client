import { createSlice } from "@reduxjs/toolkit";

const writerSlice = createSlice({
  name: "writer",
  initialState: {
    writerList: [],
  },
  reducers: {
    addWriter: (state,  {payload} ) => {
      state.writerList = payload;
    },
  },
});


export default writerSlice.reducer;
export const {addWriter} = writerSlice.actions;
