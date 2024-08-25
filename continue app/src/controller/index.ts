import { instantiateProductService } from "../service";
import { ProductController } from "./product.controller"

export const instantiateProductController = () => {
    const productService = instantiateProductService()
    return new ProductController(productService);
}