import { createSlice } from "@reduxjs/toolkit";

interface ScreenState {
  screenFrameChat: boolean;
}

const initialState: ScreenState = {
  screenFrameChat: false,
};

const ScreenSlice = createSlice({
  name: "Screen",
  initialState,
  reducers: {
    setScreenFrameChat: (state, action) => {
      state.screenFrameChat = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setScreenFrameChat } = ScreenSlice.actions;
export default ScreenSlice.reducer;
