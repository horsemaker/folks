import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  bookmarksReducer,
  postsReducer,
  userReducer,
  usersReducer,
} from "./features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarksReducer,
    posts: postsReducer,
    user: userReducer,
    users: usersReducer,
  },
});

export { store };
