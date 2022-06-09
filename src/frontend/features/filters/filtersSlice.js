const { createSlice } = require("@reduxjs/toolkit");

const initialFiltersState = {
  sortBy: "New to Old",
  show: "Trending",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFiltersState,
  reducers: {
    filterSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
    filterShow: (state, { payload }) => {
      state.show = payload;
    },
  },
});

const { filterSortBy, filterShow } = filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export { filtersReducer, filterSortBy, filterShow };
