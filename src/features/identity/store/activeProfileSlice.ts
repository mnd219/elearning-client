import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile } from "../types/profile";


type ActiveProfileState = {
    activeProfile: Profile | null;
    restored: boolean;
};

const initialState: ActiveProfileState = {
    activeProfile: null,
    restored: false
};

const activeProfileSlice = createSlice({
    name: "activeProfile",
    initialState,
    reducers: {
        setActiveProfile(
            state,
            action: PayloadAction<Profile>
        ) {
            state.activeProfile = action.payload
        },
        clearActiveProfile(state) {
            state.activeProfile = null;
        },
        restoreProfile(
            state,
            action: PayloadAction<Profile | null>
        ) {
            state.activeProfile = action.payload;
            state.restored = true;
        }
    }
})

export const {
    setActiveProfile,
    clearActiveProfile,
    restoreProfile,
} = activeProfileSlice.actions;

export default activeProfileSlice.reducer;