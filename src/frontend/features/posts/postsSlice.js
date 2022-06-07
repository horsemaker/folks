import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  dislikePostService,
  getAllPostsService,
  likePostService,
} from "../../services";

const initialPostsState = {
  data: [],
  loading: false,
  error: "",
};

const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPostsService();
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading!",
        description: "Unable to fetch posts. Try reloading.",
      });
    }
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        isOnlyPostError: true,
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(postId, token);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        isOnlyPostError: true,
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.loading = false;
      state.error = "";
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [likePost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [likePost.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.data = payload.posts;
      state.error = "";
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const postsReducer = postsSlice.reducer;

export { postsReducer, getAllPosts, likePost, dislikePost };
