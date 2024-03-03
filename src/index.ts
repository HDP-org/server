import { schema } from "./schema/index.js";
import { createYoga } from "graphql-yoga";
import { config } from "@tinyhttp/dotenv";
import { app } from "./lib/index.js";
import "./routes/index.js";

config();

const yoga = createYoga({
  schema,
});

app.use(yoga.graphqlEndpoint, yoga).listen(4000);
