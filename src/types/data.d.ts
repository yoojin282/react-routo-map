/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Data extends routo.maps.MVCObject {
    /**
     * A layer for displaying geospatial data. Points, line-strings and polygons
     * can be displayed. <p> Every <code>Map</code> has a <code>Data</code>
     * object by default, so most of the time there is no need to construct one.
     * For example: <pre> var myMap = new google.maps.Map(...);<br>
     * myMap.data.addGeoJson(...);<br> myMap.data.setStyle(...); </pre> The
     * <code>Data</code> object is a collection of <a
     * href="#Data.Feature"><code>Features</code></a>.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(options?: google.maps.Data.DataOptions | null);
    /**
     * Adds a feature to the collection, and returns the added feature. <p> If
     * the feature has an ID, it will replace any existing feature in the
     * collection with the same ID. If no feature is given, a new feature will
     * be created with null geometry and no properties. If
     * <code>FeatureOptions</code> are given, a new feature will be created with
     * the specified properties. <p> Note that the IDs <code>1234</code> and
     * <code>'1234'</code> are equivalent. Adding a feature with ID
     * <code>1234</code> will replace a feature with ID <code>'1234'</code>, and
     * vice versa.
     */
    add(feature?: Data.Feature | null | Data.FeatureOptions): Data.Feature;
    /**
     * Adds GeoJSON features to the collection. Give this method a parsed JSON.
     * The imported features are returned. Throws an exception if the GeoJSON
     * could not be imported.
     */
    addGeoJson(
      geoJson: object,
      options?: Data.GeoJsonOptions | null,
    ): Data.Feature[];
    /**
     * Checks whether the given feature is in the collection.
     */
    contains(feature: Data.Feature): boolean;
    /**
     * Repeatedly invokes the given function, passing a feature in the
     * collection to the function on each invocation. The order of iteration
     * through the features is undefined.
     */
    forEach(callback: (a: Data.Feature) => void): void;
    /**
     * Returns the position of the drawing controls on the map.
     */
    getControlPosition(): routo.maps.ControlPosition;
    /**
     * Returns which drawing modes are available for the user to select, in the
     * order they are displayed. This does not include the <code>null</code>
     * drawing mode, which is added by default. Possible drawing modes are
     * <code>"Point"</code>, <code>"LineString"</code> or
     * <code>"Polygon"</code>.
     */
    getControls(): string[] | null;
    /**
     * Returns the current drawing mode of the given Data layer. A drawing mode
     * of <code>null</code> means that the user can interact with the map as
     * normal, and clicks do not draw anything. Possible drawing modes are
     * <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or
     * <code>"Polygon"</code>.
     */
    getDrawingMode(): string | null;
    /**
     * Returns the feature with the given ID, if it exists in the collection.
     * Otherwise returns <code>undefined</code>. <p> Note that the IDs
     * <code>1234</code> and <code>'1234'</code> are equivalent. Either can be
     * used to look up the same feature.
     */
    getFeatureById(id: number | string): Data.Feature | undefined;
    /**
     * Returns the map on which the features are displayed.
     */
    getMap(): routo.maps.Map | null;
    /**
     * Gets the style for all features in the collection.
     */
    getStyle(): Data.StylingFunction | Data.StyleOptions | null;
    /**
     * Loads GeoJSON from a URL, and adds the features to the collection. <p>
     * NOTE: The GeoJSON is fetched using XHR, and may not work cross-domain. If
     * you have issues, we recommend you fetch the GeoJSON using your choice of
     * AJAX library, and then call <code>addGeoJson()</code>.
     */
    loadGeoJson(
      url: string,
      options?: Data.GeoJsonOptions | null,
      callback?: (a: Data.Feature[]) => void,
    ): void;
    /**
     * Changes the style of a feature. These changes are applied on top of the
     * style specified by <code>setStyle()</code>. Style properties set to
     * <code>null</code> revert to the value specified via
     * <code>setStyle()</code>.
     */
    overrideStyle(feature: Data.Feature, style: Data.StyleOptions): void;
    /**
     * Removes a feature from the collection.
     */
    remove(feature: Data.Feature): void;
    /**
     * Removes the effect of previous <code>overrideStyle()</code> calls. The
     * style of the given feature reverts to the style specified by
     * <code>setStyle()</code>. <p>If no feature is given, all features have
     * their style reverted.</p>
     */
    revertStyle(feature?: Data.Feature | null): void;
    /**
     * Sets the position of the drawing controls on the map.
     */
    setControlPosition(controlPosition: routo.maps.ControlPosition): void;
    /**
     * Sets which drawing modes are available for the user to select, in the
     * order they are displayed. This should not include the <code>null</code>
     * drawing mode, which is added by default. If <code>null</code>, drawing
     * controls are disabled and not displayed. Possible drawing modes are
     * <code>"Point"</code>, <code>"LineString"</code> or
     * <code>"Polygon"</code>.
     */
    setControls(controls: string[] | null): void;
    /**
     * Sets the current drawing mode of the given Data layer. A drawing mode of
     * <code>null</code> means that the user can interact with the map as
     * normal, and clicks do not draw anything. Possible drawing modes are
     * <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or
     * <code>"Polygon"</code>.
     */
    setDrawingMode(drawingMode: string | null): void;
    /**
     * Renders the features on the specified map. If map is set to
     * <code>null</code>, the features will be removed from the map.
     */
    setMap(map: routo.maps.Map | null): void;
    /**
     * Sets the style for all features in the collection. Styles specified on a
     * per-feature basis via <code>overrideStyle()</code> continue to apply.
     * <p>Pass either an object with the desired style options, or a function
     * that computes the style for each feature. The function will be called
     * every time a feature&#39;s properties are updated.
     */
    setStyle(style: Data.StylingFunction | Data.StyleOptions | null): void;
    /**
     * Exports the features in the collection to a GeoJSON object.
     */
    toGeoJson(callback: (a: object) => void): void;
  }
}

declare namespace routo.maps.Data {
  export interface DataOptions {
    /**
     * The position of the drawing controls on the map.
     */
    controlPosition?: routo.maps.ControlPosition;
    /**
     * Describes which drawing modes are available for the user to select, in
     * the order they are displayed. This should not include the
     * <code>null</code> drawing mode, which is added by default. If
     * <code>null</code>, drawing controls are disabled and not displayed.
     * Possible drawing modes are <code>"Point"</code>,
     * <code>"LineString"</code> or <code>"Polygon"</code>.
     * @defaultValue <code>null</code>
     */
    controls?: string[] | null;
    /**
     * The current drawing mode of the given Data layer. A drawing mode of
     * <code>null</code> means that the user can interact with the map as
     * normal, and clicks do not draw anything. Possible drawing modes are
     * <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or
     * <code>"Polygon"</code>.
     * @defaultValue <code>null</code>
     */
    drawingMode?: string | null;
    /**
     * When drawing is enabled and a user draws a Geometry (a Point, Line String
     * or Polygon), this function is called with that Geometry and should return
     * a Feature that is to be added to the Data layer. If a featureFactory is
     * not supplied, a Feature with no id and no properties will be created from
     * that Geometry instead. Defaults to <code>null</code>.
     */
    featureFactory?: ((a: Geometry) => Feature) | null;
    /**
     * Map on which to display the features in the collection.
     */
    map: routo.maps.Map;
    /**
     * Style for all features in the collection. For more details, see the
     * <code><a href='#Data'>setStyle()</a></code> method above.
     */
    style?: routo.maps.Data.StylingFunction | routo.maps.Data.StyleOptions;
  }

  export class Point implements routo.maps.Data.Geometry {
    /**
     * A Point geometry contains a single <code>LatLng</code>.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(latLng: routo.maps.LatLng | routo.maps.LatLngLiteral);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns the contained <code>LatLng</code>.
     */
    get(): routo.maps.LatLng;
    /**
     * Returns the string <code>"Point"</code>.
     */
    getType(): string;
  }

  export interface GeoJsonOptions {
    /**
     * The name of the Feature property to use as the feature ID. If not
     * specified, the GeoJSON Feature id will be used.
     */
    idPropertyName?: string | null;
  }

  export interface Geometry {
    /**
     * Repeatedly invokes the given function, passing a point from the geometry
     * to the function on each invocation.
     */
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns the type of the geometry object. Possibilities are
     * <code>"Point"</code>, <code>"MultiPoint"</code>,
     * <code>"LineString"</code>, <code>"MultiLineString"</code>,
     * <code>"LinearRing"</code>, <code>"Polygon"</code>,
     * <code>"MultiPolygon"</code>, or <code>"GeometryCollection"</code>.
     */
    getType(): string;
  }

  export class GeometryCollection implements Geometry {
    /**
     * A GeometryCollection contains a number of geometry objects. Any
     * <code>LatLng</code> or <code>LatLngLiteral</code> objects are
     * automatically converted to <code>Data.Point</code> geometry objects.
     */
    constructor(
      elements: (Geometry | routo.maps.LatLng | routo.maps.LatLngLiteral)[],
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained geometry objects. A new array is
     * returned each time <code>getArray()</code> is called.
     */
    getArray(): Geometry[];
    /**
     * Returns the <code>n</code>-th contained geometry object.
     */
    getAt(n: number): Geometry;
    /**
     * Returns the number of contained geometry objects.
     */
    getLength(): number;
    /**
     * Returns the string <code>"GeometryCollection"</code>.
     */
    getType(): string;
  }

  export interface StyleOptions {
    /**
     * The animation to play when marker is added to a map. Only applies to
     * point geometries.
     */
    animation?: routo.maps.Animation;
    /**
     * If <code>true</code>, the marker receives mouse and touch events.
     * @defaultValue <code>true</code>
     */
    clickable?: boolean;
    /**
     * Mouse cursor to show on hover. Only applies to point geometries.
     */
    cursor?: string;
    /**
     * If <code>true</code>, the object can be dragged across the map and the
     * underlying feature will have its geometry updated.
     * @defaultValue <code>false</code>
     */
    draggable?: boolean;
    /**
     * If <code>true</code>, the object can be edited by dragging control points
     * and the underlying feature will have its geometry updated. Only applies
     * to LineString and Polygon geometries.
     * @defaultValue <code>false</code>
     */
    editable?: boolean;
    /**
     * The fill color. All CSS3 colors are supported except for extended named
     * colors. Only applies to polygon geometries.
     */
    fillColor?: string;
    /**
     * The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.
     */
    fillOpacity?: number;
    /**
     * Icon for the foreground. If a string is provided, it is treated as though
     * it were an <code>Icon</code> with the string as <code>url</code>. Only
     * applies to point geometries.
     */
    icon?: string | routo.maps.Icon | routo.maps.Symbol;
    /**
     * The icons to be rendered along a polyline. Only applies to line
     * geometries.
     */
    icons?: routo.maps.IconSequence[];
    /**
     * Adds a label to the marker. The label can either be a string, or a
     * <code>MarkerLabel</code> object. Only applies to point geometries.
     */
    label?: string | routo.maps.MarkerLabel;
    /**
     * The marker&#39;s opacity between 0.0 and 1.0. Only applies to point
     * geometries.
     */
    opacity?: number;
    /**
     * Defines the image map used for hit detection. Only applies to point
     * geometries.
     */
    shape?: routo.maps.MarkerShape;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named
     * colors. Only applies to line and polygon geometries.
     */
    strokeColor?: string;
    /**
     * The stroke opacity between 0.0 and 1.0. Only applies to line and polygon
     * geometries.
     */
    strokeOpacity?: number;
    /**
     * The stroke width in pixels. Only applies to line and polygon geometries.
     */
    strokeWeight?: number;
    /**
     * Rollover text. Only applies to point geometries.
     */
    title?: string;
    /**
     * Whether the feature is visible.
     * @defaultValue <code>true</code>
     */
    visible?: boolean;
    /**
     * All features are displayed on the map in order of their zIndex, with
     * higher values displaying in front of features with lower values. Markers
     * are always displayed in front of line-strings and polygons.
     */
    zIndex?: number;
  }
  export type StylingFunction = (a: Feature) => StyleOptions;

  export class Polygon implements routo.maps.Data.Geometry {
    /**
     * A Polygon geometry contains a number of <code>Data.LinearRing</code>s.
     * The first linear-ring must be the polygon exterior boundary and
     * subsequent linear-rings must be interior boundaries, also known as holes.
     * See the <a
     * href="https://developers.google.com/maps/documentation/javascript/examples/layer-data-polygon">sample
     * polygon with a hole</a>.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(
      elements: (
        | routo.maps.Data.LinearRing
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      )[],
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>Data.LinearRing</code>s. A new
     * array is returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.Data.LinearRing[];
    /**
     * Returns the <code>n</code>-th contained <code>Data.LinearRing</code>.
     */
    getAt(n: number): routo.maps.Data.LinearRing;
    /**
     * Returns the number of contained <code>Data.LinearRing</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"Polygon"</code>.
     */
    getType(): string;
  }

  export class LinearRing implements routo.maps.Data.Geometry {
    /**
     * A LinearRing geometry contains a number of <code>LatLng</code>s,
     * representing a closed LineString. There is no need to make the first
     * <code>LatLng</code> equal to the last <code>LatLng</code>. The LinearRing
     * is closed implicitly.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>LatLng</code>s. A new array is
     * returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.LatLng[];
    /**
     * Returns the <code>n</code>-th contained <code>LatLng</code>.
     */
    getAt(n: number): routo.maps.LatLng;
    /**
     * Returns the number of contained <code>LatLng</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"LinearRing"</code>.
     */
    getType(): string;
  }

  export class LineString implements routo.maps.Data.Geometry {
    /**
     * A LineString geometry contains a number of <code>LatLng</code>s.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>LatLngs</code>. A new array is
     * returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.LatLng[];
    /**
     * Returns the <code>n</code>-th contained <code>LatLng</code>.
     */
    getAt(n: number): routo.maps.LatLng;
    /**
     * Returns the number of contained <code>LatLng</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"LineString"</code>.
     */
    getType(): string;
  }

  export class MultiLineString implements routo.maps.Data.Geometry {
    /**
     * A MultiLineString geometry contains a number of <code>LineString</code>s.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(
      elements: (
        | routo.maps.Data.LineString
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      )[],
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>Data.LineString</code>s. A new
     * array is returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.Data.LineString[];
    /**
     * Returns the <code>n</code>-th contained <code>Data.LineString</code>.
     */
    getAt(n: number): routo.maps.Data.LineString;
    /**
     * Returns the number of contained <code>Data.LineString</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"MultiLineString"</code>.
     */
    getType(): string;
  }
  /**
   * A MultiPoint geometry contains a number of <code>LatLng</code>s.
   *
   * Access by calling `const {Data} = await google.maps.importLibrary("maps")`.
   * See https://developers.google.com/maps/documentation/javascript/libraries.
   */
  export class MultiPoint implements routo.maps.Data.Geometry {
    /**
     * A MultiPoint geometry contains a number of <code>LatLng</code>s.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(elements: (routo.maps.LatLng | routo.maps.LatLngLiteral)[]);
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>LatLng</code>s. A new array is
     * returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.LatLng[];
    /**
     * Returns the <code>n</code>-th contained <code>LatLng</code>.
     */
    getAt(n: number): routo.maps.LatLng;
    /**
     * Returns the number of contained <code>LatLng</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"MultiPoint"</code>.
     */
    getType(): string;
  }
  /**
   * A MultiPolygon geometry contains a number of <code>Data.Polygon</code>s.
   *
   * Access by calling `const {Data} = await google.maps.importLibrary("maps")`.
   * See https://developers.google.com/maps/documentation/javascript/libraries.
   */
  export class MultiPolygon implements routo.maps.Data.Geometry {
    /**
     * A MultiPolygon geometry contains a number of <code>Data.Polygon</code>s.
     *
     * Access by calling `const {Data} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(
      elements: (
        | routo.maps.Data.Polygon
        | (
            | routo.maps.Data.LinearRing
            | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
          )[]
      )[],
    );
    forEachLatLng(callback: (a: routo.maps.LatLng) => void): void;
    /**
     * Returns an array of the contained <code>Data.Polygon</code>s. A new array
     * is returned each time <code>getArray()</code> is called.
     */
    getArray(): routo.maps.Data.Polygon[];
    /**
     * Returns the <code>n</code>-th contained <code>Data.Polygon</code>.
     */
    getAt(n: number): routo.maps.Data.Polygon;
    /**
     * Returns the number of contained <code>Data.Polygon</code>s.
     */
    getLength(): number;
    /**
     * Returns the string <code>"MultiPolygon"</code>.
     */
    getType(): string;
  }
}
