import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const owner = await prisma.owner.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });

  const brand = await prisma.brand.create({
    data: {
      name: "ISLA DE GAR",
    },
  });

  const category = await prisma.category.create({
    data: {
      name: "Crossbody Bag",
    },
  });

  const org = await prisma.organization.create({
    data: {
      name: "Google XDev",
    },
  });

  const products = [
    {
      additionalProductInformation: "",
      additionalProductVariants: "",
      brandId: brand.id,
      categoryId: category.id,
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
      organizationId: org.id,
      "organisationImageNames": [
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8229496586480/2024042609550508-9e00a6ba-3003-4635-9a54-6e9a9246ee56",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8229496586480/2024042609550508-8ae6f50d-a83b-416c-b1bb-12c6ea5bacf5",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8229496586480/2024042609550508-aa80e4f4-51a4-45a7-8425-115089938c33"
      ].toString(),
      organisationProductType: "Regular",
      originLineItemId: "1000000000000",
      originProductId: "8508250947824",
      ownerid: owner.id,
      purchaseTime: new Date(),
      rrp: 22000,
      size: "One Size",
      title: "Hive Crossbody - Golden Olive",
      value: 17400,
      engagementChecks: "",
      marketplaceOffers: "",
      payoutOption: "Cash",
      parcelSize: "medium",
    },
    {
      additionalProductInformation: "",
      additionalProductVariants: "",
      brandId: brand.id,
      categoryId: category.id,
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
      organizationId: org.id,
      organisationImageNames: [
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/7875673030896/2024042609550508-115c5ba5-f58b-488f-8dc5-aefa7fe65474",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/7875673030896/2024042609550508-42f17306-e656-4b33-8974-c6363bd4a26f",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/7875673030896/2024042609550508-659ab2c5-96cf-4e12-9bf1-a304ff27b3b2"
      ].toString(),
      organisationProductType: "Regular",
      originLineItemId: "1000000000000",
      originProductId: "8508250947824",
      ownerid: owner.id,
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
    },
    {
      additionalProductInformation: "",
      additionalProductVariants: "",
      brandId: brand.id,
      categoryId: category.id,
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
      organizationId: org.id,
      "organisationImageNames": [
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-7d791ca5-a6ee-4961-afc5-024a66c854f9",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024052416443319-06134643-fd47-4031-bae9-6f1bfd49e00c",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024052416442481-c63546b4-10ac-46dc-8bd9-e4acfa133171",
        "https://eu-west-1-prod-continue-product-images.s3.eu-west-1.amazonaws.com/organisations/662b7f506423b723c09e99d4/8508250947824/2024042609550508-14ca0e84-752b-46f9-90b0-19e1d881c6d1",
      ].toString(),
      organisationProductType: "Regular",
      originLineItemId: "1000000000000",
      originProductId: "8508250947824",
      ownerid: owner.id,
      purchaseTime: new Date(),
      rrp: 22000,
      size: "One Size",
      title: "Squid - Shamrock",
      value: 17400,
      engagementChecks: "",
      marketplaceOffers: "",
      payoutOption: "Cash",
      parcelSize: "medium",
      shippingLabelCost: 0,
    }
  ]

  products.map(async (item: any) => {
    await prisma.product.create({
      data: {...item}
    });
  });

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
