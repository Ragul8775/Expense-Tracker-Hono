import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

export const expenseRoute = new Hono();

type Expenses = z.infer<typeof expenseSchema>;
export const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

const createPostSchema = expenseSchema.omit({ id: true });
const fakeExpenses: Expenses[] = [
  { id: 1, title: "Groceries", amount: 150.75 },
  { id: 2, title: "Internet Bill", amount: 45.99 },
  { id: 3, title: "Public Transport", amount: 20.0 },
  { id: 4, title: "New Laptop", amount: 1200.0 },
  { id: 5, title: "Cinema Tickets", amount: 30.5 },
  { id: 6, title: "Restaurant Meal", amount: 75.25 },
  { id: 7, title: "Gym Membership", amount: 25.0 },
  { id: 8, title: "Book Purchase", amount: 47.6 },
  { id: 9, title: "Mobile Phone Bill", amount: 29.9 },
  { id: 10, title: "Utility Bills", amount: 95.35 },
];

expenseRoute.get("/", (c) => {
  return c.json({ expenses: fakeExpenses });
});

expenseRoute.post("/", zValidator("json", createPostSchema), async (c) => {
  const expense = await c.req.valid("json");
  fakeExpenses.push({ ...expense, id: fakeExpenses.length });
  console.log({ expense });
  c.status(201);
  return c.json({});
});
expenseRoute.get("/total-spent", (c) => {
  const totalSpent = fakeExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  return c.json({ totalSpent });
});
expenseRoute.get("/:id{[0-9]+}", (c) => {
  const id = Number.parseInt(c.req.param("id"));

  const expense = fakeExpenses.find((expense) => expense.id === id);
  if (!expense) {
    return c.notFound();
  }
  return c.json({ expense });
});

expenseRoute.delete("/:id{[0-9]+}", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const index = fakeExpenses.findIndex((expense) => expense.id === id);
  if (index === -1) {
    return c.notFound();
  }
  const deleteExpense = fakeExpenses.splice(index, 1)[0];
  return c.json({ expense: deleteExpense });
});
