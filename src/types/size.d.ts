/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Size {
    constructor(
      width: number,
      height: number,
      widthUnit?: string,
      heightUnit?: string,
    );
    /**
     * Compares two Sizes.
     */
    equals(other: Size | null): boolean;
    /**
     * The height along the y-axis, in pixels.
     */
    height: number;
    /**
     * Returns a string representation of this Size.
     */
    toString(): string;
    /**
     * The width along the x-axis, in pixels.
     */
    width: number;
  }
}
