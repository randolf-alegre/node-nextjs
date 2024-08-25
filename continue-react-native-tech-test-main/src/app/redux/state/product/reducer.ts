'use client';
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import HttpService from "../../../../service/http.service";
import { IProductState } from "./productSlice";
import { Product } from "@/types/product.type";

export const getAllProducts = createAsyncThunk<{result: Product[]}, { rejectValue: {error: string} }>(
  "product/all",
  async (_, thunkAPI) => {
    try {
      const data = await HttpService.get(`/products`);
      return data as {result: Product[]};
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const setActiveProduct = (state: IProductState, action: PayloadAction<Product>) => {
  const payload = action.payload;
  const selectedProduct = state.list.find(
    (item) => item.id === payload.id
  );

  state.activeProduct = null;

  if (selectedProduct) {
    state.activeProduct = { ...selectedProduct };
  }
};

export const reducer = {
  setActiveProduct,
};
