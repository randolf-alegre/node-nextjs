import { Brand, Product } from "@prisma/client";
import { MockContext, Context, createMockContext } from "../../lib/context";
import { v7 as uuid } from "uuid";
import { ProductDBO } from "../../model/product";
import { BrandDBO } from "../../model/brand";

let mockCtx: MockContext;
let ctx: Context;

const id = uuid();
const brand = uuid();
const category = uuid();
const org = uuid();
const owner = uuid();

const products: Product[] = [
  {
    additionalProductInformation: "",
    additionalProductVariants: "",
    brandId: brand,
    categoryId: category,
    colours: "Blue",
    condition: "NewWithTags",
    insertTime: new Date(),
    isDeleted: false,
    isLocked: false,
    isVisible: true,
    marketStatus: "Selling",
    originOrganisationOrderId: "idg-2024-08-08-001",
    organisationDescription:
      'View our Crossbody Strap Drop Page to better understand what strap drop is right for you.With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.Model 1 wears the Short strap drop.Model 2 wears the Long strap drop.\nModel 3 is 5"7, UK 18-20 and wears the Long strap drop.Model 4 is 5"3, UK 6 and wears the Short strap drop.',
    organisationDescriptionHtml:
      '<p> </p>\n<div data-mce-fragment="1"><span data-mce-fragment="1">View our <strong><a rel="noopener" href="https://isladegar.com/pages/the-crossbody-strap-drop-explained" target="_blank">Crossbody Strap Drop Page</a></strong> to better understand what strap drop is right for you.<br><br>With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.<br><br><meta charset="utf-8">Model 1 wears the Short strap drop.<br>Model 2 wears the Long strap drop.<br></span></div>\n<div data-mce-fragment="1"><span data-mce-fragment="1">Model 3 is 5"7, UK 18-20 and wears the Long strap drop.<br>Model 4 is 5"3, UK 6 and wears the Short strap drop.<br></span></div>',
    organizationId: org,
    organisationImageNames: ["https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-7d791ca5-a6ee-4961-afc5-024a66c854f9"].toString(),
    organisationProductType: "Regular",
    originLineItemId: "1000000000000",
    originProductId: "8508250947824",
    ownerid: owner,
    purchaseTime: new Date(),
    rrp: 22000,
    size: "One Size",
    title: "Scallop - Electric Blue",
    value: 17400,
    engagementChecks: "",
    marketplaceOffers: "",
    payoutOption: "Cash",
    parcelSize: "medium",
    shippingLabelCost: 0,
    id: uuid(),
  },
  {
    additionalProductInformation: "",
    additionalProductVariants: "",
    brandId: brand,
    categoryId: category,
    colours: "Blue",
    condition: "NewWithTags",
    insertTime: new Date(),
    isDeleted: false,
    isLocked: false,
    isVisible: true,
    marketStatus: "Selling",
    originOrganisationOrderId: "idg-2024-08-08-001",
    organisationDescription:
      'View our Crossbody Strap Drop Page to better understand what strap drop is right for you.With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.Model 1 wears the Short strap drop.Model 2 wears the Long strap drop.\nModel 3 is 5"7, UK 18-20 and wears the Long strap drop.Model 4 is 5"3, UK 6 and wears the Short strap drop.',
    organisationDescriptionHtml:
      '<p> </p>\n<div data-mce-fragment="1"><span data-mce-fragment="1">View our <strong><a rel="noopener" href="https://isladegar.com/pages/the-crossbody-strap-drop-explained" target="_blank">Crossbody Strap Drop Page</a></strong> to better understand what strap drop is right for you.<br><br>With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.<br><br><meta charset="utf-8">Model 1 wears the Short strap drop.<br>Model 2 wears the Long strap drop.<br></span></div>\n<div data-mce-fragment="1"><span data-mce-fragment="1">Model 3 is 5"7, UK 18-20 and wears the Long strap drop.<br>Model 4 is 5"3, UK 6 and wears the Short strap drop.<br></span></div>',
    organizationId: org,
    organisationImageNames: [
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-7d791ca5-a6ee-4961-afc5-024a66c854f9",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024052416443319-06134643-fd47-4031-bae9-6f1bfd49e00c",
    ].toString(),
    organisationProductType: "Regular",
    originLineItemId: "1000000000000",
    originProductId: "8508250947824",
    ownerid: owner,
    purchaseTime: new Date(),
    rrp: 22000,
    size: "One Size",
    title: "Scallop - Electric Blue",
    value: 17400,
    engagementChecks: "",
    marketplaceOffers: "",
    payoutOption: "Cash",
    parcelSize: "medium",
    shippingLabelCost: 0,
    id: uuid(),
  }
];

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test("should get existing product ", async () => {
  const args: Product = {
    additionalProductInformation: "",
    additionalProductVariants: "",
    brandId: brand,
    categoryId: category,
    colours: "Blue",
    condition: "NewWithTags",
    insertTime: new Date(),
    isDeleted: false,
    isLocked: false,
    isVisible: true,
    marketStatus: "Selling",
    originOrganisationOrderId: "idg-2024-08-08-001",
    organisationDescription:
      'View our Crossbody Strap Drop Page to better understand what strap drop is right for you.With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.Model 1 wears the Short strap drop.Model 2 wears the Long strap drop.\nModel 3 is 5"7, UK 18-20 and wears the Long strap drop.Model 4 is 5"3, UK 6 and wears the Short strap drop.',
    organisationDescriptionHtml:
      '<p> </p>\n<div data-mce-fragment="1"><span data-mce-fragment="1">View our <strong><a rel="noopener" href="https://isladegar.com/pages/the-crossbody-strap-drop-explained" target="_blank">Crossbody Strap Drop Page</a></strong> to better understand what strap drop is right for you.<br><br>With the body of our iconic Clam bag and the strap of our best selling Squid, the Scallop is your next crossbody companion.<br><br><meta charset="utf-8">Model 1 wears the Short strap drop.<br>Model 2 wears the Long strap drop.<br></span></div>\n<div data-mce-fragment="1"><span data-mce-fragment="1">Model 3 is 5"7, UK 18-20 and wears the Long strap drop.<br>Model 4 is 5"3, UK 6 and wears the Short strap drop.<br></span></div>',
    organizationId: org,
    organisationImageNames: [
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-7d791ca5-a6ee-4961-afc5-024a66c854f9",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024052416443319-06134643-fd47-4031-bae9-6f1bfd49e00c",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024052416442481-c63546b4-10ac-46dc-8bd9-e4acfa133171",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-14ca0e84-752b-46f9-90b0-19e1d881c6d1",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-767c49f2-fc92-4476-9b61-50e1d1351947",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-0c88d75d-ae9d-4f64-bad3-c298e7a06360",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-1ef81e52-298a-4a84-afcc-4ad09481923d",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-2dcd8ad8-078a-4277-ad89-98c136eb902f",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-879eec26-56d5-4305-aaf9-a655b8141c9b",
      "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-6cc2602a-4d57-4f69-a479-1bd4c518b0c2",
    ].toString(),
    organisationProductType: "Regular",
    originLineItemId: "1000000000000",
    originProductId: "8508250947824",
    ownerid: owner,
    purchaseTime: new Date(),
    rrp: 22000,
    size: "One Size",
    title: "Scallop - Electric Blue",
    value: 17400,
    engagementChecks: "",
    marketplaceOffers: "",
    payoutOption: "Cash",
    parcelSize: "medium",
    shippingLabelCost: 0,
    id,
  };

  const product = new ProductDBO(ctx.prisma);

  mockCtx.prisma.product.findUnique.mockResolvedValue(args);

  await expect(product.getProductById(args.id)).resolves.toEqual({ ...args });
});

test("should get all products ", async () => {

  const product = new ProductDBO(ctx.prisma);

  mockCtx.prisma.product.findMany.mockResolvedValue([...products]);

  await expect(product.getAllProducts()).resolves.toHaveLength(2);
});



