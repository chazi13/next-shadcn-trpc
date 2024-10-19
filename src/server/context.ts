import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  token?: string;
}

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(opts?: CreateInnerContextOptions) {
  if (opts?.token) {
    // save token to api sdk
  }

  return { ...opts };
}

/**
 * Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContext(opts: CreateNextContextOptions) {
  let token;

  if (opts.req.headers.authorization?.startsWith("Bearer")) {
    token = opts.req.headers.authorization.split(" ")[1];
  } else if (opts.req.cookies.token) {
    token = opts.req.cookies.token;
  }

  const contextInner = await createContextInner({ ...opts, token });

  return {
    ...contextInner,
    req: opts.req,
    res: opts.res,
  };
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;
