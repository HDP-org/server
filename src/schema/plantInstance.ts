import { builder, prisma } from "../lib/index.js";

builder.prismaObject("PlantInstance", {
  fields: (t) => ({
    id: t.exposeID("id"),
    plantDate: t.expose("plantDate", { type: "Date" }),
    removalDate: t.expose("removalDate", { type: "Date", nullable: true }),

    installation: t.relation("Installation"),
    plant: t.relation("Plant"),
  }),
});
