import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./BookList/BookListSlice";
import writerReducer from "./Writer/WriterSlice";


export const store = configureStore({
  reducer: {
    bookListStore: bookListReducer,
    writerStore: writerReducer,
  },
});
