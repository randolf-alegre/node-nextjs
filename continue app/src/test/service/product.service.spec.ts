import { Product } from "@prisma/client";
import { instantiateProduct } from "../../model/factory";
import { IProductDBO, ProductDBO } from "../../model/product";
import { ProductService } from "../../service/product.service";

jest.fn()
test('should get all existing products', async () => {
  let productDBO: IProductDBO = instantiateProduct();

  const productDBOMock = jest
        .spyOn(ProductDBO.prototype, 'getAllProducts')
        .mockImplementation( () => Promise.resolve([]));
  const productService = new ProductService(productDBO)

  await productService.getAllProducts()
  expect(productDBOMock).toHaveBeenCalledTimes(1)
})