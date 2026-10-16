import { configureStore } from "@reduxjs/toolkit";
import activeProfileReducer from"../../features/identity/store/activeProfileSlice";


export const store = configureStore({
    reducer: {
        activeProfile: activeProfileReducer
    },
});

export type RootState = ReturnType<
    typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;