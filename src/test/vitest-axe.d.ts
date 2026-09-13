import type { AxeResults } from 'axe-core';

declare module 'vitest' {
  interface Matchers<R, T = unknown> {
    toHaveNoViolations: T extends AxeResults ? () => R : never;
  }
}
