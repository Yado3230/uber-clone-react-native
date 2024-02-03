import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavState {
  origin: number;
  destination: number;
  travelTimeInformation: number;
}

const initialState: NavState = {
  origin: 0,
  destination: 0,
  travelTimeInformation: 0,
};

const navReducer = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<number>) => {
      state.origin = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navReducer.actions;

export default navReducer.reducer;
