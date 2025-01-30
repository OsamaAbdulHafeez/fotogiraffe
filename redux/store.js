"use client"
import { configureStore } from '@reduxjs/toolkit';
import filterBookSlice from './filterBookSlice';


const store = configureStore({
  reducer: {
    filterBook: filterBookSlice,
  },
});


export { store }