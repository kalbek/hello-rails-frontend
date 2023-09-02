import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  body: '',
  error: null,
};

export const getRandomGeneratedMessage = createAsyncThunk(
  'messages/getRandomGeneratedMessage',
  async () => {
    const response = await fetch('http://localhost:3000/rand_greeting');
    const messageData = await response.json();
    return messageData.body;
  },
);

const greetingsMessagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomGeneratedMessage.fulfilled, (state, action) => {
      state.body = action.payload;
    });

    builder.addCase(getRandomGeneratedMessage.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default greetingsMessagesSlice;
