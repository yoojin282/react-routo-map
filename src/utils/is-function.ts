export type AnyFunction = (...args: unknown[]) => unknown;
export type IsFunction = <T = any>(
  value: AnyFunction | T | undefined,
) => boolean;

export const isFunction: IsFunction = (value) => typeof value === "function";
