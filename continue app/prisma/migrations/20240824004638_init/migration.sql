-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
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
    CONSTRAINT "Product_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
