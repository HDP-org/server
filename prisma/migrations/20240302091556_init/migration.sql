-- CreateTable
CREATE TABLE "Installation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Installation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "lifespan" INTEGER NOT NULL,
    "pHCurve" DOUBLE PRECISION[],
    "nutrientCurve" DOUBLE PRECISION[],

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantInstance" (
    "id" TEXT NOT NULL,
    "plantDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "removalDate" TIMESTAMP(3),
    "installationId" TEXT,

    CONSTRAINT "PlantInstance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlantInstance" ADD CONSTRAINT "PlantInstance_installationId_fkey" FOREIGN KEY ("installationId") REFERENCES "Installation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
