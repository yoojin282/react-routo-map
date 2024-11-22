/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export class LatLngBounds {
    /**
     * A <code><a href="#LatLngBounds">LatLngBounds</a></code> instance
     * represents a rectangle in geographical coordinates, including one that
     * crosses the 180 degrees longitudinal meridian.
     */
    constructor(
      swOrLatLngBounds?:
        | routo.maps.LatLng
        | null
        | routo.maps.LatLngLiteral
        | LatLngBounds
        | LatLngBoundsLiteral,
      ne?: routo.maps.LatLng | null | routo.maps.LatLngLiteral,
    );
    /**
     * Returns <code>true</code> if the given lat/lng is in this bounds.
     */
    contains(latLng: routo.maps.LatLng | routo.maps.LatLngLiteral): boolean;
    /**
     * Returns <code>true</code> if this bounds approximately equals the given
     * bounds.
     */
    equals(other: LatLngBounds | null | LatLngBoundsLiteral): boolean;
    /**
     * Extends this bounds to contain the given point.
     */
    extend(point: routo.maps.LatLng | routo.maps.LatLngLiteral): LatLngBounds;
    /**
     * Computes the center of this LatLngBounds
     */
    getCenter(): routo.maps.LatLng;
    /**
     * Returns the north-east corner of this bounds.
     */
    getNorthEast(): routo.maps.LatLng;
    /**
     * Returns the south-west corner of this bounds.
     */
    getSouthWest(): routo.maps.LatLng;
    /**
     * Returns <code>true</code> if this bounds shares any points with the other
     * bounds.
     */
    intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
    /**
     * Returns if the bounds are empty.
     */
    isEmpty(): boolean;
    /**
     * Converts to JSON representation. This function is intended to be used via
     * <code>JSON.stringify</code>.
     */
    toJSON(): LatLngBoundsLiteral;
    /**
     * Converts the given map bounds to a lat/lng span.
     */
    toSpan(): routo.maps.LatLng;
    /**
     * Converts to string.
     */
    toString(): string;
    /**
     * Returns a string of the form &quot;lat_lo,lng_lo,lat_hi,lng_hi&quot; for
     * this bounds, where &quot;lo&quot; corresponds to the southwest corner of
     * the bounding box, while &quot;hi&quot; corresponds to the northeast
     * corner of that box.
     */
    toUrlValue(precision?: number): string;
    /**
     * Extends this bounds to contain the union of this and the given bounds.
     */
    union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    /**
     * LatLngBounds for the max bounds of the Earth. These bounds will encompass
     * the entire globe.
     */
    static readonly MAX_BOUNDS: LatLngBounds;
  }

  export interface LatLngBoundsLiteral {
    /**
     * East longitude in degrees. Values outside the range [-180, 180] will be
     * wrapped to the range [-180, 180). For example, a value of -190 will be
     * converted to 170. A value of 190 will be converted to -170. This reflects
     * the fact that longitudes wrap around the globe.
     */
    east: number;
    /**
     * North latitude in degrees. Values will be clamped to the range [-90, 90].
     * This means that if the value specified is less than -90, it will be set
     * to -90. And if the value is greater than 90, it will be set to 90.
     */
    north: number;
    /**
     * South latitude in degrees. Values will be clamped to the range [-90, 90].
     * This means that if the value specified is less than -90, it will be set
     * to -90. And if the value is greater than 90, it will be set to 90.
     */
    south: number;
    /**
     * West longitude in degrees. Values outside the range [-180, 180] will be
     * wrapped to the range [-180, 180). For example, a value of -190 will be
     * converted to 170. A value of 190 will be converted to -170. This reflects
     * the fact that longitudes wrap around the globe.
     */
    west: number;
  }
}
