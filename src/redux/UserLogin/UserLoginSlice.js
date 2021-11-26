import { createSlice } from "@reduxjs/toolkit";

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loginData: {},
  },
  reducers: {
    loggedInUser: (state, { payload }) => {
      state.loginData = payload;
    },
  },
});

export const getLoggedInUser = (state) => state.logInStore.loginData;
export const { loggedInUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
