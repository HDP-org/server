import { builder, prisma } from "../lib/index.js";

builder.prismaObject("Installation", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    updatedAt: t.expose("updatedAt", { type: "Date" }),
    plants: t.relation("plants"),
  }),
});

builder.queryField("installation", (t) =>
  t.prismaField({
    type: "Installation",
    resolve: async (query, root, args, ctx, info) =>
      prisma.installation.findUniqueOrThrow({
        ...query,
        where: { id: "" },
      }),
  }),
);
