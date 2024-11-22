/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface Symbol {
    /**
     * The position of the symbol relative to the marker or polyline. The
     * coordinates of the symbol&#39;s path are translated left and up by the
     * anchor&#39;s x and y coordinates respectively. The position is expressed
     * in the same coordinate system as the symbol&#39;s path.
     * @defaultValue <code>google.maps.Point(0,0)</code>
     */
    anchor?: routo.maps.Point | null;
    /**
     * The symbol&#39;s fill color. All CSS3 colors are supported except for
     * extended named colors. For symbol markers, this defaults to
     * &#39;black&#39;. For symbols on polylines, this defaults to the stroke
     * color of the corresponding polyline.
     */
    fillColor?: string | null;
    /**
     * The symbol&#39;s fill opacity.
     * @defaultValue <code>0</code>
     */
    fillOpacity?: number | null;
    /**
     * The origin of the label relative to the origin of the path, if label is
     * supplied by the marker. The origin is expressed in the same coordinate
     * system as the symbol&#39;s path. This property is unused for symbols on
     * polylines.
     * @defaultValue <code>google.maps.Point(0,0)</code>
     */
    labelOrigin?: routo.maps.Point | null;
    /**
     * The symbol&#39;s path, which is a built-in symbol path, or a custom path
     * expressed using <a
     * href="http://www.w3.org/TR/SVG/paths.html#PathData">SVG path
     * notation</a>. Required.
     */
    path: routo.maps.SymbolPath | string;
    /**
     * The angle by which to rotate the symbol, expressed clockwise in degrees.
     * A symbol in an <code>IconSequence</code> where <code>fixedRotation</code>
     * is <code>false</code> is rotated relative to the angle of the edge on
     * which it lies.
     * @defaultValue <code>0</code>
     */
    rotation?: number | null;
    /**
     * The amount by which the symbol is scaled in size. For symbol markers,
     * this defaults to 1; after scaling, the symbol may be of any size. For
     * symbols on a polyline, this defaults to the stroke weight of the
     * polyline; after scaling, the symbol must lie inside a square 22 pixels in
     * size centered at the symbol&#39;s anchor.
     */
    scale?: number | null;
    /**
     * The symbol&#39;s stroke color. All CSS3 colors are supported except for
     * extended named colors. For symbol markers, this defaults to
     * &#39;black&#39;. For symbols on a polyline, this defaults to the stroke
     * color of the polyline.
     */
    strokeColor?: string | null;
    /**
     * The symbol&#39;s stroke opacity. For symbol markers, this defaults to 1.
     * For symbols on a polyline, this defaults to the stroke opacity of the
     * polyline.
     */
    strokeOpacity?: number | null;
    /**
     * The symbol&#39;s stroke weight.
     */
    strokeWeight?: number | null;
  }

  export enum SymbolPath {
    /**
     * A backward-pointing closed arrow.
     */
    BACKWARD_CLOSED_ARROW = 0.0,
    /**
     * A backward-pointing open arrow.
     */
    BACKWARD_OPEN_ARROW = 1.0,
    /**
     * A circle.
     */
    CIRCLE = 2.0,
    /**
     * A forward-pointing closed arrow.
     */
    FORWARD_CLOSED_ARROW = 3.0,
    /**
     * A forward-pointing open arrow.
     */
    FORWARD_OPEN_ARROW = 4.0,
  }
}
