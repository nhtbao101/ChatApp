import { createSlice } from '@reduxjs/toolkit';

const messageSlide = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    addMessage(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text
      });
    }
  }
});

export const { addMessage } = messageSlide.actions;
export default messageSlide.reducer;
