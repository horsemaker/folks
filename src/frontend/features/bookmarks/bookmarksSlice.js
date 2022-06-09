import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPostService,
  getBookmarkPostsService,
  removePostFromBookmarkService,
} from "../../services";

const initialBookmarksState = {
  data: [],
  loading: false,
  error: "",
};

const getBookmarkPosts = createAsyncThunk(
  "bookmarks/getBookmarkPosts",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getBookmarkPostsService(token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading",
        description: "Unable to fetch bookmarks. Please try reloading.",
      });
    }
  }
);

const bookmarkPost = createAsyncThunk(
  "bookmarks/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await bookmarkPostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const removePostFromBookmark = createAsyncThunk(
  "bookmarks/removePostFromBookmark",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await removePostFromBookmarkService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: initialBookmarksState,
  extraReducers: {
    [getBookmarkPosts.pending]: (state) => {
      state.loading = true;
    },
    [getBookmarkPosts.fulfilled]: (state, { payload }) => {
      state.data = payload.bookmarks;
      state.loading = false;
      state.error = "";
    },
    [getBookmarkPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [bookmarkPost.fulfilled]: (state, { payload }) => {
      state.data = payload.bookmarks;
      state.error = "";
    },
    [bookmarkPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [removePostFromBookmark.fulfilled]: (state, { payload }) => {
      state.data = payload.bookmarks;
      state.error = "";
    },
    [removePostFromBookmark.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const bookmarksReducer = bookmarksSlice.reducer;

export {
  bookmarksReducer,
  getBookmarkPosts,
  bookmarkPost,
  removePostFromBookmark,
};
