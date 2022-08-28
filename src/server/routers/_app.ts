import superjson from 'superjson';

import { createRouter } from '../createRouter';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  /**
   */

  .query('test', {
    resolve() {
      return { test: 123 };
    },
  });

export type AppRouter = typeof appRouter;
