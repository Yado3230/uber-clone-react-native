import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LocationType, TimeTravelType } from "../types/types";

export interface NavState {
  origin: LocationType;
  destination: LocationType;
  travelTimeInformation: TimeTravelType;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
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
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navReducer.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navReducer.reducer;
