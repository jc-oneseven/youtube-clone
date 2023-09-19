import { configureStore } from "@reduxjs/toolkit";
import appSplice from "./appSplice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSplice,
    search: searchSlice,
  },
});

export default store;
