import { Hono } from "hono";
import { logger } from "hono/logger";
import app from "./app";

const port = Bun.env.PORT || 8000;

export default {
  port,
  fetch: app.fetch,
};

console.log("server running!!");
