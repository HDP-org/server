import { builder, prisma } from "../lib/index.js";
import "./data.js";
import "./installation.js";
import "./plant.js";
import "./plantInstance.js";

// builder.queryType({
//   fields: (t) => ({
//     hello: t.string({
//       args: {
//         name: t.arg.string(),
//       },
//       resolve: (parent, { name }) => `hello, ${name || "World"}`,
//     }),
//   }),
// });

export const schema = builder.toSchema();
