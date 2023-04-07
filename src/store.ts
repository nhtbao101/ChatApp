import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './stores/message/messageSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer
  }
});
