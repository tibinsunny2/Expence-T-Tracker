import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./tackerReducer";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
