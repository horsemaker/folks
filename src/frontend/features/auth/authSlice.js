import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FOLKS_AUTH_USER_DATA, FOLKS_AUTH_USER_TOKEN } from "../../constants";
import { signInService, signUpService } from "../../services";
import { followUser, unfollowUser } from "../users";

const initialAuthState = {
  token: localStorage.getItem(FOLKS_AUTH_USER_TOKEN),
  user: JSON.parse(localStorage.getItem(FOLKS_AUTH_USER_DATA)),
  loading: false,
};

const signin = createAsyncThunk(
  "auth/signin",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signInService(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      state.loading = false;
    },
    [signin.rejected]: (state) => {
      state.loading = false;
    },
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.token = payload.createdUser;
      state.loading = false;
    },
    [signup.rejected]: (state) => {
      state.loading = false;
    },
    [followUser.fulfilled]: (state, { payload }) => {
      state.user = payload.currentUser;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.user = payload.currentUser;
    },
  },
});

const { signout, updateUser } = authSlice.actions;

const authReducer = authSlice.reducer;

export { authReducer, signin, signup, signout, updateUser };
