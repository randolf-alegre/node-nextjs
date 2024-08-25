import { Owner } from "@prisma/client"
import { MockContext, Context, createMockContext } from "../../lib/context"
import { v7 as uuid } from 'uuid';
import { OwnerDBO } from "../../model/owner";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should get existing user/owner ', async () => {
    const id = uuid();
    const currentDate = new Date();
    const args: Owner = {
      id,
      name: 'Rich',
      email: 'hello@prisma.io',
      createdAt: currentDate,
      updatedAt: currentDate
    }

    const owner = new OwnerDBO(ctx.prisma);

    mockCtx.prisma.owner.findUnique.mockResolvedValue(args)
  
    await expect(owner.getOwner(args.email)).resolves.toEqual({
      id: id,
      name: 'Rich',
      email: 'hello@prisma.io',
      createdAt: currentDate,
      updatedAt: currentDate
    })
  })