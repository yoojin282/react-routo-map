/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Point {
    constructor(x: number, y: number);
    /**
     * Compares two Points
     */
    equals(other: Point | null): boolean;
    /**
     * Returns a string representation of this Point.
     */
    toString(): string;
    /**
     * The X coordinate
     */
    x: number;
    /**
     * The Y coordinate
     */
    y: number;
  }
}
