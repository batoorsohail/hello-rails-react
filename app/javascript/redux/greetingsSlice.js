import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  error: null,
}

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
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