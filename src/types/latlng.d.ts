/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export class LatLng {
    constructor(
      latOrLatLngOrLatLngLiteral: number | LatLngLiteral | LatLng,
      lngOrNoClampNoWrap?: number | boolean | null,
      noClampNoWrap?: boolean,
    );
    /**
     * Comparison function.
     */
    equals(other: LatLng | null): boolean;
    /**
     * Returns the latitude in degrees.
     */
    lat(): number;
    /**
     * Returns the longitude in degrees.
     */
    lng(): number;
    /**
     * Converts to JSON representation. This function is intended to be used via
     * <code>JSON.stringify</code>.
     */
    toJSON(): LatLngLiteral;
    /**
     * Converts to string representation.
     */
    toString(): string;
    /**
     * Returns a string of the form &quot;lat,lng&quot; for this LatLng. We
     * round the lat/lng values to 6 decimal places by default.
     */
    toUrlValue(precision?: number): string;
  }

  export interface LatLngLiteral {
    /**
     * Latitude in degrees. Values will be clamped to the range [-90, 90]. This
     * means that if the value specified is less than -90, it will be set to
     * -90. And if the value is greater than 90, it will be set to 90.
     */
    lat: number;
    /**
     * Longitude in degrees. Values outside the range [-180, 180] will be
     * wrapped so that they fall within the range. For example, a value of -190
     * will be converted to 170. A value of 190 will be converted to -170. This
     * reflects the fact that longitudes wrap around the globe.
     */
    lng: number;
  }
}
