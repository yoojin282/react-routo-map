/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export class Marker extends routo.maps.MVCObject {
    constructor(opts?: routo.maps.MarkerOptions | null);
    /**
     * Get the currently running animation.
     */
    getAnimation(): routo.maps.Animation | null | undefined;
    /**
     * Get the clickable status of the {@link routo.maps.Marker}.
     */
    getClickable(): boolean;
    /**
     * Get the mouse cursor type shown on hover.
     */
    getCursor(): string | null | undefined;
    /**
     * Get the draggable status of the {@link routo.maps.Marker}.
     */
    getDraggable(): boolean;
    /**
     * Get the icon of the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.icon}.
     */
    getIcon(): string | routo.maps.Icon | null | routo.maps.Symbol | undefined;
    /**
     * Get the label of the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.label}.
     */
    getLabel(): routo.maps.MarkerLabel | null | string | undefined;
    /**
     * Get the map or panaroama the {@link google.maps.Marker} is rendered on.
     */
    getMap(): google.maps.Map | null | routo.maps.StreetViewPanorama;
    /**
     * Get the opacity of the {@link routo.maps.Marker}.
     */
    getOpacity(): number | null | undefined;
    /**
     * Get the position of the {@link routo.maps.Marker}.
     */
    getPosition(): routo.maps.LatLng | null | undefined;
    /**
     * Get the shape of the {@link routo.maps.Marker} used for interaction.
     * See {@link routo.maps.MarkerOptions.shape} and {@link
     * routo.maps.MarkerShape}.
     */
    getShape(): routo.maps.MarkerShape | null | undefined;
    /**
     * Get the title of the {@link routo.maps.Marker} tooltip. See {@link
     * routo.maps.MarkerOptions.title}.
     */
    getTitle(): string | null | undefined;
    /**
     * Get the visibility of the {@link routo.maps.Marker}.
     */
    getVisible(): boolean;
    /**
     * Get the zIndex of the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.zIndex}.
     */
    getZIndex(): number | null | undefined;
    /**
     * Start an animation. Any ongoing animation will be cancelled. Currently
     * supported animations are: {@link routo.maps.Animation.BOUNCE}, {@link
     * routo.maps.Animation.DROP}. Passing in <code>null</code> will cause any
     * animation to stop.
     * @param animation The animation to play.
     */
    setAnimation(animation?: routo.maps.Animation | null): void;
    /**
     * Set if the {@link routo.maps.Marker} is clickable.
     * @param flag If <code>true</code>, the Marker can be clicked.
     */
    setClickable(flag: boolean): void;
    /**
     * Set the mouse cursor type shown on hover.
     * @param cursor Mouse cursor type.
     */
    setCursor(cursor?: string | null): void;
    /**
     * Set if the {@link routo.maps.Marker} is draggable.
     * @param flag If <code>true</code>, the Marker can be dragged.
     */
    setDraggable(flag: boolean | null): void;
    /**
     * Set the icon for the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.icon}.
     */
    setIcon(icon?: string | routo.maps.Icon | null | routo.maps.Symbol): void;
    /**
     * Set the label for the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.label}.
     * @param label The label can either be a character string or a {@link
     *     routo.maps.MarkerLabel} object.
     */
    setLabel(label?: string | routo.maps.MarkerLabel | null): void;
    /**
     * Renders the {@link routo.maps.Marker} on the specified map or panorama.
     * If map is set to <code>null</code>, the marker will be removed.
     */
    setMap(map: routo.maps.Map | null | routo.maps.StreetViewPanorama): void;
    /**
     * Set the opacity of the {@link routo.maps.Marker}.
     * @param opacity A number between 0.0, transparent, and 1.0, opaque.
     */
    setOpacity(opacity?: number | null): void;
    /**
     * Set the options for the {@link routo.maps.Marker}.
     */
    setOptions(options: routo.maps.MarkerOptions | null): void;
    /**
     * Set the postition for the {@link routo.maps.Marker}.
     * @param latlng The new position.
     */
    setPosition(
      latlng?: routo.maps.LatLng | null | routo.maps.LatLngLiteral,
    ): void;
    /**
     * Set the shape of the {@link routo.maps.Marker} used for interaction.
     * See {@link routo.maps.MarkerOptions.shape} and {@link
     * routo.maps.MarkerShape}.
     */
    setShape(shape?: routo.maps.MarkerShape | null): void;
    /**
     * Set the title of the {@link routo.maps.Marker} tooltip. See {@link
     * routo.maps.MarkerOptions.title}.
     */
    setTitle(title?: string | null): void;
    /**
     * Set if the {@link routo.maps.Marker} is visible.
     * @param visible If <code>true</code>, the Marker is visible
     */
    setVisible(visible: boolean): void;
    /**
     * Set the zIndex of the {@link routo.maps.Marker}. See {@link
     * routo.maps.MarkerOptions.zIndex}.
     */
    setZIndex(zIndex?: number | null): void;
    /**
     * The maximum default z-index that the API will assign to a marker. You may
     * set a higher z-index to bring a marker to the front.
     */
    static readonly MAX_ZINDEX: number;
  }

  export interface MarkerLabel {
    /**
     * The className property of the label&#39;s element (equivalent to the
     * element&#39;s class attribute). Multiple space-separated CSS classes can
     * be added. The font color, size, weight, and family can only be set via
     * the other properties of <code>MarkerLabel</code>. CSS classes should not
     * be used to change the position nor orientation of the label (e.g. using
     * translations and rotations) if also using <a
     * href="https://developers.google.com/maps/documentation/javascript/examples/marker-collision-management">marker
     * collision management</a>.
     * @defaultValue <code>&#39;&#39;</code> (empty string)
     */
    className?: string;
    /**
     * The color of the label text.
     * @defaultValue <code>&#39;black&#39;</code>
     */
    color?: string;
    /**
     * The font family of the label text (equivalent to the CSS font-family
     * property).
     */
    fontFamily?: string;
    /**
     * The font size of the label text (equivalent to the CSS font-size
     * property).
     * @defaultValue <code>&#39;14px&#39;</code>
     */
    fontSize?: string;
    /**
     * The font weight of the label text (equivalent to the CSS font-weight
     * property).
     */
    fontWeight?: string;
    /**
     * The text to be displayed in the label.
     */
    text: string;
  }

  export interface MarkerOptions {
    /**
     * The offset from the marker&#39;s position to the tip of an InfoWindow
     * that has been opened with the marker as anchor.
     */
    anchorPoint?: routo.maps.Point | null;
    /**
     * Which animation to play when marker is added to a map.
     * @defaultValue <code>null</code>
     */
    animation?: routo.maps.Animation | null;
    /**
     * If <code>true</code>, the marker receives mouse and touch events.
     * @defaultValue <code>true</code>
     */
    clickable?: boolean | null;
    /**
     * Available only in the v=beta channel: https://goo.gle/3oAthT3.
     * Set a collision behavior for markers on vector maps.
     * @defaultValue <code>null</code>
     * @deprecated <code>collisionBehavior</code> is deprecated as of July 2023.
     *     Use {@link
     *     routo.maps.marker.AdvancedMarkerElement.collisionBehavior} instead.
     */
    collisionBehavior?: string | null;
    /**
     * If <code>false</code>, disables cross that appears beneath the marker
     * when dragging.
     * @defaultValue <code>true</code>
     */
    crossOnDrag?: boolean | null;
    /**
     * Mouse cursor type to show on hover.
     * @defaultValue <code>pointer</code>
     */
    cursor?: string | null;
    /**
     * If <code>true</code>, the marker can be dragged.
     * @defaultValue <code>false</code>
     */
    draggable?: boolean | null;
    /**
     * Icon for the foreground. If a string is provided, it is treated as though
     * it were an <code>Icon</code> with the string as <code>url</code>.
     */
    icon?: string | routo.maps.Icon | null | routo.maps.Symbol;
    /**
     * Adds a label to the marker. A marker label is a letter or number that
     * appears inside a marker. The label can either be a string, or a
     * <code>MarkerLabel</code> object. If provided and {@link
     * routo.maps.MarkerOptions.title} is not provided, an accessibility text
     * (e.g. for use with screen readers) will be added to the marker with the
     * provided label&#39;s text. Please note that the <code>label</code> is
     * currently only used for accessibility text for non-optimized markers.
     * @defaultValue <code>null</code>
     */
    label?: string | routo.maps.MarkerLabel | null;
    /**
     * Map on which to display Marker. The map is required to display the marker
     * and can be provided with {@link routo.maps.Marker.setMap} if not
     * provided at marker construction.
     */
    map?: routo.maps.Map | null | routo.maps.StreetViewPanorama;
    /**
     * A number between 0.0, transparent, and 1.0, opaque.
     * @defaultValue 1.0
     */
    opacity?: number | null;
    /**
     * Optimization enhances performance by rendering many markers as a single
     * static element. This is useful in cases where a large number of markers
     * is required. Read more about <a
     * href="https://developers.google.com/maps/documentation/javascript/markers#optimize">marker
     * optimization</a>.
     */
    optimized?: boolean | null;
    /**
     * Sets the marker position. A marker may be constructed but not displayed
     * until its position is provided - for example, by a user&#39;s actions or
     * choices. A marker position can be provided with {@link
     * routo.maps.Marker.setPosition} if not provided at marker construction.
     */
    position?: routo.maps.LatLng | null | routo.maps.LatLngLiteral;
    /**
     * Image map region definition used for drag/click.
     */
    shape?: routo.maps.MarkerShape | null;
    /**
     * Rollover text. If provided, an accessibility text (e.g. for use with
     * screen readers) will be added to the marker with the provided value.
     * Please note that the <code>title</code> is currently only used for
     * accessibility text for non-optimized markers.
     * @defaultValue <code>undefined</code>
     */
    title?: string | null;
    /**
     * If <code>true</code>, the marker is visible.
     * @defaultValue <code>true</code>
     */
    visible?: boolean | null;
    /**
     * All markers are displayed on the map in order of their zIndex, with
     * higher values displaying in front of markers with lower values. By
     * default, markers are displayed according to their vertical position on
     * screen, with lower markers appearing in front of markers further up the
     * screen.
     */
    zIndex?: number | null;
  }

  export interface MarkerShape {
    /**
     * The format of this attribute depends on the value of the
     * <code>type</code> and follows the w3 AREA <code>coords</code>
     * specification found at <a
     * href="http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords">
     * http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords</a>.
     * <br>The <code>coords</code> attribute is an array of integers that
     * specify the pixel position of the shape relative to the top-left corner
     * of the target image. The coordinates depend on the value of
     * <code>type</code> as follows: <br>&nbsp;&nbsp;- <code>circle</code>:
     * coords is <code>[x1,y1,r]</code> where x1,y2 are the coordinates of the
     * center of the circle, and r is the radius of the circle.
     * <br>&nbsp;&nbsp;- <code>poly</code>: coords is
     * <code>[x1,y1,x2,y2...xn,yn]</code> where each x,y pair contains the
     * coordinates of one vertex of the polygon. <br>&nbsp;&nbsp;-
     * <code>rect</code>: coords is <code>[x1,y1,x2,y2]</code> where x1,y1 are
     * the coordinates of the upper-left corner of the rectangle and x2,y2 are
     * the coordinates of the lower-right coordinates of the rectangle.
     */
    coords: number[] | null;
    /**
     * Describes the shape&#39;s type and can be <code>circle</code>,
     * <code>poly</code> or <code>rect</code>.
     */
    type: string;
  }
}
