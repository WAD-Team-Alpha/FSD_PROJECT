import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  idToken : "",
  localId : "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.isAuthenticated = true;
      state.idToken = action.payload.idToken;
      state.localId = action.payload.localId;
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("localId", action.payload.localId);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.idToken = "";
      state.localId = "";
      localStorage.removeItem("idToken");
      localStorage.removeItem("localId");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
