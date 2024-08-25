import { Product } from "@prisma/client";
import { IProductDBO } from "../model/product";

export interface IProductService {
    getAllProducts(): Promise<Product[]>;
}

export class ProductService implements IProductService {
    private readonly productDBO: IProductDBO;

    constructor(productDBO: IProductDBO) {
        this.productDBO = productDBO;
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            return await this.productDBO.getAllProducts()
        } catch (error) {
            throw error;
        }
    }
}