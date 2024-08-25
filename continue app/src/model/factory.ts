import ORM from "../lib/ORM"
import { BrandDBO } from "./brand"
import { OrganizationDBO } from "./organization"
import { OwnerDBO } from "./owner"
import { ProductDBO } from "./product"

export const instantiateOwner = () => new OwnerDBO(ORM)
export const instantiateBrand = () => new BrandDBO(ORM)
export const instantiateOrganization = () => new OrganizationDBO(ORM)
export const instantiateProduct = () => new ProductDBO(ORM)