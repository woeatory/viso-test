-- CreateEnum
CREATE TYPE "AuthMode" AS ENUM ('NONE', 'CUSTOM_FUNCTION', 'LIMITED', 'FULL');

-- CreateTable
CREATE TABLE "EditSheetCell" (
    "id" INTEGER NOT NULL,
    "authMode" "AuthMode" NOT NULL,
    "oldValue" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "triggerUid" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "EditSheetCell_pkey" PRIMARY KEY ("id")
);
