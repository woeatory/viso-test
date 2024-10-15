-- AlterTable
CREATE SEQUENCE editsheetcell_id_seq;
ALTER TABLE "EditSheetCell" ALTER COLUMN "id" SET DEFAULT nextval('editsheetcell_id_seq');
ALTER SEQUENCE editsheetcell_id_seq OWNED BY "EditSheetCell"."id";
