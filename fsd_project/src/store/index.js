import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counterReducer";
import profileReducer from "./profile";

const store = configureStore({
  reducer: { auth: authReducer, profile: profileReducer, counter : counterReducer },
});

export default store;
