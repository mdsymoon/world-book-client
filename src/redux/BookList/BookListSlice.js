import { createSlice } from "@reduxjs/toolkit";

const bookListSlice = createSlice({
  name: "Book List",
  initialState: {
    bookList: [],
  },
  reducers: {
    addBooks: (state, { payload }) => {
      state.bookList = payload;
    },
  },
});

export const getBookList = (state) => state.bookListStore.bookList;
export const { addBooks } = bookListSlice.actions;
export default bookListSlice.reducer;
