import { exampleRouter } from "../modules/example";
import { mergeRouters } from "../trpc";

export const appRouter = mergeRouters(exampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
