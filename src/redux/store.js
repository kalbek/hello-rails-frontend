import { configureStore } from '@reduxjs/toolkit';
import greetingsMessagesSlice from './messageSlice';

const store = configureStore({
  reducer: {
    messages: greetingsMessagesSlice.reducer,
  },
});

export default store;
