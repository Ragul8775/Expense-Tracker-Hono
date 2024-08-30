import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./routes/expenses";
import { cors } from "hono/cors";
import { serveStatic } from "hono/bun";
const app = new Hono();

app.use("*", logger());
app.use("*", cors());

const apiRoutes = app.basePath("/api").route("/expenses", expenseRoute);

app.get("*", serveStatic({ root: "./public" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
