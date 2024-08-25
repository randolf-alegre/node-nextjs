import { Brand } from "@prisma/client";
import ORM from "../lib/ORM";

interface IBrandDBO {
    getBrandById(id: string): Promise<Brand | null>
}

export class BrandDBO implements IBrandDBO {
    private ORM: typeof ORM;

    constructor(orm: typeof ORM) {
        this.ORM = orm;
    }

    public async getBrandById(id: string): Promise<Brand | null> {
        return await this.ORM.brand.findUnique({
            where: {
                id
            }
        });
    }
}