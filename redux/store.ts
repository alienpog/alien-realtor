import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "./slices/ImagePut";

export const store = configureStore({

  reducer: {
    ImageReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;