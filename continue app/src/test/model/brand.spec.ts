import { Brand } from "@prisma/client";
import { MockContext, Context, createMockContext } from "../../lib/context";
import { v7 as uuid } from "uuid";
import { BrandDBO } from "../../model/brand";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test("should get existing brand ", async () => {
  const id = uuid();
  const currentDate = new Date();
  const args: Brand = {
    id,
    name: "ISLA DE GAR",
    createdAt: currentDate,
    updatedAt: currentDate,
  };

  const brand = new BrandDBO(ctx.prisma);

  mockCtx.prisma.brand.findUnique.mockResolvedValue(args);

  await expect(brand.getBrandById(args.id)).resolves.toEqual({
    id: id,
    name: "ISLA DE GAR",
    createdAt: currentDate,
    updatedAt: currentDate,
  });
});
