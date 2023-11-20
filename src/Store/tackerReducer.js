// Reducer function
import {  createSlice } from '@reduxjs/toolkit';

// Define a user slice with initial state and reducers
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// Export the action creator
export const { setUserDetails } = userSlice.actions;
export default userSlice;