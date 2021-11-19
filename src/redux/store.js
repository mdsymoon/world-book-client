import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./BookList/BookListSlice";


export const store = configureStore({
  reducer: {
    bookListStore: bookListReducer,
  },
});
