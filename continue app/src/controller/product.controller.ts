import { Product } from "@prisma/client"
import { Request, Response } from "express";
import { IProductService } from "../service/product.service";
import { BaseError } from "../HTTPError";

interface IProductController {
    getAllProducts(req: Request, res: Response): void;
}
export class ProductController implements IProductController {
    private readonly productService;

    constructor(productService: IProductService) {
        this.productService = productService;
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const result = await this.productService.getAllProducts()
            const productList = result.map((item: Product) => {
                return {
                    ...item,
                    colours: this._stringToArray(item.colours, ','),
                    additionalProductInformation: this._stringToArray(item.additionalProductInformation, ','),
                    additionalProductVariants: this._stringToArray(item.additionalProductVariants, ','),
                    engagementChecks: this._stringToArray(item.engagementChecks, ','),
                    marketplaceOffers: this._stringToArray(item.marketplaceOffers, ','),
                    organisationImageNames: this._stringToArray(item.organisationImageNames, ','),
                }
            })
            res.status(200).json({ result: productList })
        } catch (error) {
            const errorDetails = error as unknown as BaseError;
            res.status(errorDetails.getHttpStatus()).send({ message: errorDetails.getMessage() });
        }
    }

    private _stringToArray(str: string, delimiter: string) {
        return str ? str.split(delimiter) : []
    }
} 