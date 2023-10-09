import { configureStore } from "@reduxjs/toolkit";
import appSplice from "./appSplice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSplice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
