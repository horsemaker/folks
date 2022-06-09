import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  bookmarksReducer,
  filtersReducer,
  postReducer,
  postsReducer,
  userReducer,
  usersReducer,
} from "./features";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarksReducer,
    filters: filtersReducer,
    post: postReducer,
    posts: postsReducer,
    user: userReducer,
    users: usersReducer,
  },
});

export { store };
