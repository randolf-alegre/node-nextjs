import { Organization } from "@prisma/client";
import ORM from "../lib/ORM";

interface IOrganizationDBO {
    getbyOrganizationId(id: string): Promise<Organization | null>
}

export class OrganizationDBO implements IOrganizationDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getbyOrganizationId(id: string): Promise<Organization | null> {
        return await this.ORM.organization.findUnique({
            where: {
                id
            }
        });
    }
}