import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { DateResolver } from "graphql-scalars";
import { prisma } from "./prisma.js";
import WithInputPlugin from "@pothos/plugin-with-input";
import ErrorsPlugin from "@pothos/plugin-errors";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [WithInputPlugin, ErrorsPlugin, PrismaPlugin],
  withInput: {},
  errorOptions: {},
  prisma: {
    client: prisma,
    exposeDescriptions: true,
    filterConnectionTotalCount: true,
    onUnusedQuery: process.env.NODE_ENV === "production" ? null : "warn",
  },
});

builder.addScalarType("Date", DateResolver, {});

builder.objectType(Error, {
  name: "Error",
  fields: (t) => ({
    message: t.exposeString("message"),
  }),
});

builder.queryType({});
builder.mutationType({});
