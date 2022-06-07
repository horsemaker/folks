import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersService } from "../../services";

const initialUsersState = {
  data: [],
  loading: false,
  error: "",
};

const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsersService();
      return data;
    } catch (error) {
      return rejectWithValue({
        title: "Try reloading!",
        description: "Unable to fetch users. Try reloading.",
      });
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.data = payload.users;
      state.loading = false;
      state.error = "";
    },
    [getAllUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const usersReducer = usersSlice.reducer;

export { usersReducer, getAllUsers };
