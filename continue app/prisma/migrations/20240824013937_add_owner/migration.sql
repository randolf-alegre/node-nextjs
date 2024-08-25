/*
  Warnings:

  - Added the required column `ownerid` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "additionalProductInformation" TEXT NOT NULL,
    "additionalProductVariants" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "colours" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "insertTime" DATETIME NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "isLocked" BOOLEAN NOT NULL,
    "isVisible" BOOLEAN NOT NULL,
    "marketStatus" TEXT NOT NULL,
    "originOrganisationOrderId" TEXT NOT NULL,
    "organisationDescription" TEXT NOT NULL,
    "organisationDescriptionHtml" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "ownerid" TEXT NOT NULL,
    "organisationImageNames" TEXT NOT NULL,
    "organisationProductType" TEXT NOT NULL,
    "originLineItemId" TEXT NOT NULL,
    "originProductId" TEXT NOT NULL,
    "purchaseTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rrp" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "engagementChecks" TEXT NOT NULL,
    "marketplaceOffers" TEXT NOT NULL,
    "payoutOption" TEXT NOT NULL,
    "parcelSize" TEXT NOT NULL,
    CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("additionalProductInformation", "additionalProductVariants", "brandId", "categoryId", "colours", "condition", "engagementChecks", "id", "insertTime", "isDeleted", "isLocked", "isVisible", "marketStatus", "marketplaceOffers", "organisationDescription", "organisationDescriptionHtml", "organisationImageNames", "organisationProductType", "organizationId", "originLineItemId", "originOrganisationOrderId", "originProductId", "parcelSize", "payoutOption", "purchaseTime", "rrp", "size", "title", "value") SELECT "additionalProductInformation", "additionalProductVariants", "brandId", "categoryId", "colours", "condition", "engagementChecks", "id", "insertTime", "isDeleted", "isLocked", "isVisible", "marketStatus", "marketplaceOffers", "organisationDescription", "organisationDescriptionHtml", "organisationImageNames", "organisationProductType", "organizationId", "originLineItemId", "originOrganisationOrderId", "originProductId", "parcelSize", "payoutOption", "purchaseTime", "rrp", "size", "title", "value" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
