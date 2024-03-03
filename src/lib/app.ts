import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";

export const app = new App();

app.use(logger());
