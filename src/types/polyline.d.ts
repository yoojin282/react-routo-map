/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Polyline extends routo.maps.MVCObject {
    /**
     * A polyline is a linear overlay of connected line segments on the map.
     *
     * Access by calling `const {Polyline} = await
     * google.maps.importLibrary("maps")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(opts?: routo.maps.PolylineOptions | null);
    /**
     * Returns whether this shape can be dragged by the user.
     */
    getDraggable(): boolean;
    /**
     * Returns whether this shape can be edited by the user.
     */
    getEditable(): boolean;
    /**
     * Returns the map on which this shape is attached.
     */
    getMap(): routo.maps.Map | null;
    /**
     * Retrieves the path.
     */
    getPath(): routo.maps.MVCArray<routo.maps.LatLng>;
    /**
     * Returns whether this poly is visible on the map.
     */
    getVisible(): boolean;
    /**
     * If set to <code>true</code>, the user can drag this shape over the map.
     * The <code>geodesic</code> property defines the mode of dragging.
     */
    setDraggable(draggable: boolean): void;
    /**
     * If set to <code>true</code>, the user can edit this shape by dragging the
     * control points shown at the vertices and on each segment.
     */
    setEditable(editable: boolean): void;
    /**
     * Renders this shape on the specified map. If map is set to
     * <code>null</code>, the shape will be removed.
     */
    setMap(map: routo.maps.Map | null): void;
    setOptions(options: routo.maps.PolylineOptions | null): void;
    /**
     * Sets the path. See <em><code><a
     * href="#PolylineOptions">PolylineOptions</a></code></em> for more details.
     */
    setPath(
      path:
        | routo.maps.MVCArray<google.maps.LatLng>
        | (routo.maps.LatLng | routo.maps.LatLngLiteral)[],
    ): void;
    /**
     * Hides this poly if set to <code>false</code>.
     */
    setVisible(visible: boolean): void;
  }

  export interface PolylineOptions {
    /**
     * Indicates whether this <code>Polyline</code> handles mouse events.
     * @defaultValue <code>true</code>
     */
    clickable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can drag this shape over the map.
     * The <code>geodesic</code> property defines the mode of dragging.
     * @defaultValue <code>false</code>
     */
    draggable?: boolean | null;
    /**
     * If set to <code>true</code>, the user can edit this shape by dragging the
     * control points shown at the vertices and on each segment.
     * @defaultValue <code>false</code>
     */
    editable?: boolean | null;
    /**
     * When <code>true</code>, edges of the polygon are interpreted as geodesic
     * and will follow the curvature of the Earth. When <code>false</code>,
     * edges of the polygon are rendered as straight lines in screen space. Note
     * that the shape of a geodesic polygon may appear to change when dragged,
     * as the dimensions are maintained relative to the surface of the earth.
     * @defaultValue <code>false</code>
     */
    geodesic?: boolean | null;
    /**
     * The icons to be rendered along the polyline.
     */
    icons?: routo.maps.IconSequence[] | null;
    /**
     * Map on which to display Polyline.
     */
    map?: routo.maps.Map | null;
    /**
     * The ordered sequence of coordinates of the Polyline. This path may be
     * specified using either a simple array of <code>LatLng</code>s, or an
     * <code>MVCArray</code> of <code>LatLng</code>s. Note that if you pass a
     * simple array, it will be converted to an <code>MVCArray</code> Inserting
     * or removing LatLngs in the <code>MVCArray</code> will automatically
     * update the polyline on the map.
     */
    path?:
      | routo.maps.MVCArray<routo.maps.LatLng>
      | (routo.maps.LatLng | routo.maps.LatLngLiteral)[]
      | null;
    /**
     * The stroke color. All CSS3 colors are supported except for extended named
     * colors.
     */
    strokeColor?: string | null;
    /**
     * The stroke opacity between 0.0 and 1.0.
     */
    strokeOpacity?: number | null;
    /**
     * The stroke width in pixels.
     */
    strokeWeight?: number | null;
    /**
     * Whether this polyline is visible on the map.
     * @defaultValue <code>true</code>
     */
    visible?: boolean | null;
    /**
     * The zIndex compared to other polys.
     */
    zIndex?: number | null;
  }
}
