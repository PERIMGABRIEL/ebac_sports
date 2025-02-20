import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';
import { api } from './api';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
