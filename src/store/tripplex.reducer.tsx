import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: '',
};

const tripplexReducers = createSlice({
  name: 'tripplex',
  initialState,
  reducers: {
    login: (state, { payload: { isLoggedIn } }) => {
      if (!isLoggedIn) {
        state.isLoggedIn = true;
      }
    },
  },
});

export const { login } = tripplexReducers.actions;
export default tripplexReducers.reducer;
