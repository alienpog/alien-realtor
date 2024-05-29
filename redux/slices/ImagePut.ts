import { PayloadAction, createSlice, } from "@reduxjs/toolkit";
import { isNull } from "util";

type ImageState = {
  value:string | boolean;
};

const initialState = {
  value: false,
} as ImageState;

export const ImageSet = createSlice({
  name: "ImageSet",
  initialState,
  reducers: {
    image: (state, action : PayloadAction<any>) => {
      state.value = action.payload;
    },
    imageclose: (state) => {
      state.value = false;
    },
  },
});

export const {
    image,
    imageclose,
} = ImageSet.actions;
export default ImageSet.reducer;