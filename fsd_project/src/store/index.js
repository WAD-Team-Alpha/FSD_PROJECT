import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";

const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer },
});

export default store;
