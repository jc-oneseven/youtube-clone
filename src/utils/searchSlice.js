import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, actions) => {
      // state = { ...state, ...actions.payload };
      // console.log({ ...actions.payload });
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
