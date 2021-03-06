import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./BookList/BookListSlice";
import favoriteReducer from "./FavoriteList/FavoriteSlice";
import loginReducer from "./UserLogin/UserLoginSlice";
import drawerReducer from "./Drawer/DrawerSlice";

export const store = configureStore({
  reducer: {
    bookListStore: bookListReducer,
    favoriteStore: favoriteReducer,
    logInStore: loginReducer,
    drawerStore: drawerReducer,
  },
});
