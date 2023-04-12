import { createSlice } from '@reduxjs/toolkit';

const authSlide = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = authSlide.actions;
export default authSlide.reducer;
