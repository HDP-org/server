import { builder, prisma } from "../lib/index.js";

builder.prismaObject("Plant", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    variety: t.exposeString("variety"),
    lifespan: t.exposeInt("lifespan"),
    pHCurve: t.exposeFloatList("pHCurve"),
    nutrientCurve: t.exposeFloatList("nutrientCurve"),

    instances: t.relation("instances"),
  }),
});

builder.queryFields((t) => ({
  plant: t.prismaFieldWithInput({
    type: "Plant",
    input: {
      id: t.input.string({ required: true }),
    },
    errors: {
      types: [Error],
    },
    async resolve(query, _, { input }) {
      const model = await prisma.plant.findFirst({
        ...query,
        where: {
          id: input.id,
        },
      });
      if (!model) {
        console.log("Plant not found");

        throw new Error("Plant not found");
      }
      return model;
    },
  }),

  plants: t.prismaField({
    type: ["Plant"],
    resolve: (query) => {
      return prisma.plant.findMany({
        ...query,
      });
    },
  }),
}));

// builder.mutationFields((t) => ({
//   addPlant: t.prismaFieldWithInput({
//     type: "Plant",
//     // input: {
//     //   name: t.input.string({ required: true }),
//     //   variety: t.input.string({ required: true }),
//     //   lifespan: t.input.int({ required: true }),
//     //   pHCurve: t.input.floatList({ required: true }),
//     //   nutrientCurve: t.input.floatList({ required: true }),
//     // },
//     input: ,
//     resolve: async (query, _, args) => {
//       return await prisma.plant.create({
//         ...query,
//         data: {
//           name: args.input.name,
//           variety: args.input.variety,
//           lifespan: args.input.lifespan,
//           pHCurve: { set: args.input.pHCurve },
//           nutrientCurve: { set: args.input.nutrientCurve },
//         },
//       });
//     },
//   }),
// }));

builder.mutationFields((t) => ({
  createPost: t.prismaFieldWithInput({
    type: "Plant",
    input: {
      name: t.input.string({ required: true }),
      variety: t.input.string({ required: true }),
      lifespan: t.input.int({ required: true }),
      pHCurve: t.input.floatList({ required: true }),
      nutrientCurve: t.input.floatList({ required: true }),
    },
    // validate: {
    //   schema: createPostSchema,
    // },
    resolve: (_query, _parent, args) => {
      return prisma.plant.create({
        data: {
          name: args.input.name,
          variety: args.input.variety,
          lifespan: args.input.lifespan,
          pHCurve: { set: args.input.pHCurve },
          nutrientCurve: { set: args.input.nutrientCurve },
        },
      });
    },
  }),
}));
