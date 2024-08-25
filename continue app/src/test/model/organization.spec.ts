import { Organization } from "@prisma/client"
import { MockContext, Context, createMockContext } from "../../lib/context"
import { v7 as uuid } from 'uuid';
import { OwnerDBO } from "../../model/owner";
import { OrganizationDBO } from "../../model/organization";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should get existing organization ', async () => {
    const id = uuid();
    const currentDate = new Date();
    const args: Organization = {
      id,
      name: 'Google XDev',
      createdAt: currentDate,
      updatedAt: currentDate
    }

    const org = new OrganizationDBO(ctx.prisma);

    mockCtx.prisma.organization.findUnique.mockResolvedValue(args)
  
    await expect(org.getbyOrganizationId(args.id)).resolves.toEqual({
      id: id,
      name: 'Google XDev',
      createdAt: currentDate,
      updatedAt: currentDate
    })
  })