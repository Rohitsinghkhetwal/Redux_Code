import { createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
        state.status = action.payload
    }
  },
});

export const { setProducts , setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;

// thunk

export function fetchProducts() {
  return async function getProductsThunk(dispatch, getstate) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
        console.log("Error in thunk",err);
       dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
