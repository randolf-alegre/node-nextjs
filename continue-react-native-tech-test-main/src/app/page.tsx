"use client";

import { useEffect } from "react";
import { getAllProducts } from "./redux/state/product/reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { Product } from "@/types/product.type";

export default function Home() {
  const products = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          {products.list.map((item: Product) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <span className="m-5">Price: ${item.value} </span>
                <p className="text-gray-700 text-base">
                  Product Description: <br /> {item.organisationDescription}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="flex mb-4">
                  {item.organisationImageNames.map((link: string) => (
                    <div className="w-1/2 bg-gray-500">
                      <img
                        className="h-auto max-w-full rounded-lg p-5"
                        src={link}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
