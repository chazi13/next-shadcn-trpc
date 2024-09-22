import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import type { Context } from "./context";

/**
 * Avoid exporting the entire t-object
 * since it's not very descriptive.
 * For instance, the use of a t variable
 * is common in i18n libraries.
 */
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
});

/**
 * Base router and procedure helpers
 */
export const router = t.router;

/**
 * General Procedure
 */
export const procedure = t.procedure.use((opts) => {
  if (!opts.ctx.req || !opts.ctx.res) {
    throw new Error("You are missing `req` or `res` in your call.");
  }

  return opts.next({
    ctx: {
      req: opts.ctx.req,
      res: opts.ctx.res,
    },
  });
});

/**
 * Router merging function
 */
export const mergeRouters = t.mergeRouters;
