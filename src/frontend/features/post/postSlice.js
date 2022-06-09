import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostService } from "../../services";

const initialPostState = {
  data: null,
  loading: false,
  error: "",
};

const getPost = createAsyncThunk(
  "post/getPost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getPostService(postId);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try again!",
        description: "Something went wrong. Please try again.",
      });
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    postCleanup: (state) => {
      state.data = null;
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.data = payload.post;
      state.loading = false;
      state.error = "";
    },
    [getPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const { postCleanup } = postSlice.actions;

const postReducer = postSlice.reducer;

export { postReducer, getPost, postCleanup };
