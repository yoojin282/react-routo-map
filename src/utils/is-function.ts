import { Any } from "../types";

export type AnyFunction = (...args: unknown[]) => unknown;
export type IsFunction = <T = Any>(
  value: AnyFunction | T | undefined,
) => boolean;

export const isFunction: IsFunction = (value) => typeof value === "function";
