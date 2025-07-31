import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode:
        localStorage.getItem("isDarkMode") != undefined
            ? JSON.parse(localStorage.getItem("isDarkMode"))
            : false,    //light mode is the default
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
            localStorage.setItem("isDarkMode", state.isDarkMode);
        },
    },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;