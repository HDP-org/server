import {
  pgSchema,
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const schema = pgSchema("HDP");

export const installations = schema.table("installations", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const plantInstances = schema.table("plantInstances", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const plants = pgTable("plants", {
  id: serial("id").primaryKey(),
  name: text("name"),
  
});


// declaring enum in database
export const popularityEnum = pgEnum("popularity", [
  "unknown",
  "known",
  "popular",
]);



