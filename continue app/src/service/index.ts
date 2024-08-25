import { instantiateProduct } from "../model/factory";
import { ProductService } from "./product.service"

export const instantiateProductService = () => {
    const productDBO = instantiateProduct();
    return new ProductService(productDBO);
}