import { createSlice } from "@reduxjs/toolkit";

interface SocketState {
  isLoading: boolean;
  socket: any;
}

const initialState: SocketState = {
  isLoading: false,
  socket: null,
};

const socketSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;
