import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/App/Store";

const initialState = {
    isDrawerOpen: false,
};

const globalSlice = createSlice({
    name: "cartDrawer",
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isDrawerOpen = true;
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false;
        },
    },
});

export const { openDrawer, closeDrawer } = globalSlice.actions;

export const selectDrawer = (state: RootState) => state.cartDrawer;

export default globalSlice.reducer;
