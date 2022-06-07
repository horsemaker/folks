import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUserPostsService, getUserService } from "../../services";

const initialUserState = {
  profile: {
    data: null,
    loading: false,
    error: "",
  },
  posts: {
    data: null,
    loading: false,
    error: "",
  },
};

const getUser = createAsyncThunk(
  "user/getUser",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserService(username);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading!",
        description: "Unable to fetch user. Try reloading again.",
      });
    }
  }
);

const getAllUserPosts = createAsyncThunk(
  "user/getAllUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getAllUserPostsService(username);
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading!",
        description: "Unable to fetch user posts. Try reloading again.",
      });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    userCleanup: (state) => {
      state = initialUserState;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.profile.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.profile.data = payload.user;
      state.profile.loading = false;
      state.profile.error = "";
    },
    [getUser.rejected]: (state, { payload }) => {
      state.profile.loading = false;
      state.profile.error = payload;
    },
    [getAllUserPosts.pending]: (state) => {
      state.posts.loading = true;
    },
    [getAllUserPosts.fulfilled]: (state, { payload }) => {
      state.posts.data = payload.posts;
      state.posts.loading = false;
      state.posts.error = "";
    },
    [getAllUserPosts.rejected]: (state, { payload }) => {
      state.posts.loading = false;
      state.posts.error = payload;
    },
  },
});

const { userCleanup } = userSlice.actions;

const userReducer = userSlice.reducer;

export { userReducer, getUser, getAllUserPosts, userCleanup };
