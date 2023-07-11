import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'api/greetings';

const initialState = {
  message: '',
  error: null,
}

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  // try {
  //   const response = await axios.get(url);
  //   const data = response.data;
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   return error.message
  // }
    const response = await fetch('api/greetings');
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return 'fails';
    }
    return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => ({
        ...state,
        message: action.payload.message,
      }));
    builder.addCase(
      getGreetings.rejected,
      (state, action) => {
        state.error = action.payload;
      }
    );
  },
});

export default greetingsSlice.reducer;