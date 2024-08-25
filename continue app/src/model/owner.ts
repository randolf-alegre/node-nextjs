import { Owner } from "@prisma/client";
import ORM from "../lib/ORM";

interface IOwnerDBO {
    getOwner(email: string): Promise<Owner | null>
}


export class OwnerDBO implements IOwnerDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getOwner(email: string): Promise<Owner | null> {
        return await this.ORM.owner.findUnique({
            where: {
                email
            }
        });
    }
}