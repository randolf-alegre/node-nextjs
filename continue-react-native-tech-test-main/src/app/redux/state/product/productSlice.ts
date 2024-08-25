"use client";

import { Product } from "@/types/product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, reducer } from "./reducer";

export interface IProductState {
  list: Product[];
  activeProduct: Product | null;
}

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    activeProduct: null,
  } as IProductState,
  reducers: {
    ...reducer,
  },
  extraReducers(builder) {
    builder
    .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<{result: Product[]}>) => {
        const { result } = action.payload;
      state.list = [...result];
    })
    .addCase(getAllProducts.rejected, (state, action) => {
      const { payload } = action;
    });
  }
});

export const { setActiveProduct } = productSlice.actions;

export default productSlice.reducer;
