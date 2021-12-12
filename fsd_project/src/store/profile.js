import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  firstName: "",
  lastName: "",
  email: "",
  university: "",
  degree: "",
  graduationYear: "",
  location: "",
  bio: "",
};

const profileSlice = createSlice({
  name: "profileData",
  initialState: initialProfileState,
  reducers: {
    update(state, action) {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.university = action.payload.university;
      state.degree = action.payload.degree;
      state.graduationYear = action.payload.degree;
      state.location = action.payload.location;
      state.bio = action.payload.bio;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
