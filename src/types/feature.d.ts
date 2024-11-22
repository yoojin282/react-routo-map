/// <reference path="index.d.ts" />
declare namespace routo.maps.Data {
  export class Feature {
    /**
     * A feature has a geometry, an id, and a set of properties.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(options?: FeatureOptions | null);
    /**
     * Repeatedly invokes the given function, passing a property value and name
     * on each invocation. The order of iteration through the properties is
     * undefined.
     */
    forEachProperty(callback: (a: unknown, b: string) => void): void;
    /**
     * Returns the feature&#39;s geometry.
     */
    getGeometry(): Geometry | null;
    /**
     * Returns the feature ID.
     */
    getId(): number | string | undefined;
    /**
     * Returns the value of the requested property, or <code>undefined</code> if
     * the property does not exist.
     */
    getProperty(name: string): unknown;
    /**
     * Removes the property with the given name.
     */
    removeProperty(name: string): void;
    /**
     * Sets the feature&#39;s geometry.
     */
    setGeometry(
      newGeometry:
        | Geometry
        | null
        | routo.maps.LatLng
        | routo.maps.LatLngLiteral,
    ): void;
    /**
     * Sets the value of the specified property. If <code>newValue</code> is
     * <code>undefined</code> this is equivalent to calling
     * <code>removeProperty</code>.
     */
    setProperty(name: string, newValue: unknown): void;
    /**
     * Exports the feature to a GeoJSON object.
     */
    toGeoJson(callback: (a: object) => void): void;
  }

  export interface FeatureOptions {
    /**
     * The feature geometry. If none is specified when a feature is constructed,
     * the feature&#39;s geometry will be <code>null</code>. If a
     * <code>LatLng</code> object or <code>LatLngLiteral</code> is given, this
     * will be converted to a <code>Data.Point</code> geometry.
     */
    geometry?:
      | routo.maps.Data.Geometry
      | null
      | routo.maps.LatLng
      | routo.maps.LatLngLiteral;
    /**
     * Feature ID is optional. If provided, it can be used to look up the
     * feature in a <code>Data</code> object using the
     * <code>getFeatureById()</code> method. Note that a feature&#39;s ID cannot
     * be subsequently changed.
     */
    id?: number | string;
    /**
     * The feature properties. This is an arbitrary mapping of property names to
     * values.
     */
    properties?: object | null;
  }
}
