import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawerOpen: false,
  },
  reducers: {
    setDrawerOpen: (state, { payload }) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export default drawerSlice.reducer;
export const { setDrawerOpen } = drawerSlice.actions;
export const getDrawer = (state) => state.drawerStore.drawerOpen;
