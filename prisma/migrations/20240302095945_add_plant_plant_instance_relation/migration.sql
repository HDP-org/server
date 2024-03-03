-- AlterTable
ALTER TABLE "PlantInstance" ADD COLUMN     "plantId" TEXT;

-- AddForeignKey
ALTER TABLE "PlantInstance" ADD CONSTRAINT "PlantInstance_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
