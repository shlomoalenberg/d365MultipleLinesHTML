import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * @module store
 */

const editorSlice = createSlice({
    name: "multipleLinesHTML",
    initialState: {
      html: ""
    },
    reducers: {
      loadHTML(state, { payload }) {
        return { ...state, html: payload };
      }
    }
  }),
  store = configureStore({ reducer: editorSlice.reducer });

/**
 * @exports store/store
 */
export default store;

/**
 * @exports store/loadHTML
 */
export const { loadHTML } = editorSlice.actions;
