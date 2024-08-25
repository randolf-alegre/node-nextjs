import { Brand, Product } from "@prisma/client";
import ORM from "../lib/ORM";

export interface IProductDBO {
    getProductById(id: string): Promise<Product | null>
    getAllProducts(): Promise<Product[]>
}

export class ProductDBO implements IProductDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getProductById(id: string): Promise<Product | null> {
        return await this.ORM.product.findUnique({
            where: {
                id
            }
        });
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.ORM.product.findMany();
    }
}