import {createSlice} from "@reduxjs/toolkit";

const userLoginSlice = createSlice({
    name: "userLogin",
    initialState: {
        loginData : []
    },
    reducers:{
        loggedInUser : (state, { payload}) => {
                state.loginData = payload
        }
    }
})

export default userLoginSlice.reducer
export const {loggedInUser} = userLoginSlice.actions