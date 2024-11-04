// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state for user slice
const initialUserState = {
    user: null,
};

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// Export the setUser action
export const { setUser } = userSlice.actions;

// Create the store with only the user slice
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
