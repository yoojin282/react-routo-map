/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export enum ControlPosition {
    /**
     * Equivalent to BOTTOM_CENTER in both LTR and RTL.
     */
    BLOCK_END_INLINE_CENTER = 0.0,
    /**
     * Equivalent to BOTTOM_RIGHT in LTR, or BOTTOM_LEFT in RTL.
     */
    BLOCK_END_INLINE_END = 1.0,
    /**
     * Equivalent to BOTTOM_LEFT in LTR, or BOTTOM_RIGHT in RTL.
     */
    BLOCK_END_INLINE_START = 2.0,
    /**
     * Equivalent to TOP_CENTER in both LTR and RTL.
     */
    BLOCK_START_INLINE_CENTER = 3.0,
    /**
     * Equivalent to TOP_RIGHT in LTR, or TOP_LEFT in RTL.
     */
    BLOCK_START_INLINE_END = 4.0,
    /**
     * Equivalent to TOP_LEFT in LTR, or TOP_RIGHT in RTL.
     */
    BLOCK_START_INLINE_START = 5.0,
    /**
     * Elements are positioned in the center of the bottom row. Consider using
     * BLOCK_END_INLINE_CENTER instead.
     */
    BOTTOM_CENTER = 6.0,
    /**
     * Elements are positioned in the bottom left and flow towards the middle.
     * Elements are positioned to the right of the Google logo. Consider using
     * BLOCK_END_INLINE_START instead.
     */
    BOTTOM_LEFT = 7.0,
    /**
     * Elements are positioned in the bottom right and flow towards the middle.
     * Elements are positioned to the left of the copyrights. Consider using
     * BLOCK_END_INLINE_END instead.
     */
    BOTTOM_RIGHT = 8.0,
    /**
     * Equivalent to RIGHT_CENTER in LTR, or LEFT_CENTER in RTL.
     */
    INLINE_END_BLOCK_CENTER = 9.0,
    /**
     * Equivalent to RIGHT_BOTTOM in LTR, or LEFT_BOTTOM in RTL.
     */
    INLINE_END_BLOCK_END = 10.0,
    /**
     * Equivalent to RIGHT_TOP in LTR, or LEFT_TOP in RTL.
     */
    INLINE_END_BLOCK_START = 11.0,
    /**
     * Equivalent to LEFT_CENTER in LTR, or RIGHT_CENTER in RTL.
     */
    INLINE_START_BLOCK_CENTER = 12.0,
    /**
     * Equivalent to LEFT_BOTTOM in LTR, or RIGHT_BOTTOM in RTL.
     */
    INLINE_START_BLOCK_END = 13.0,
    /**
     * Equivalent to LEFT_TOP in LTR, or RIGHT_TOP in RTL.
     */
    INLINE_START_BLOCK_START = 14.0,
    /**
     * Elements are positioned on the left, above bottom-left elements, and flow
     * upwards. Consider using INLINE_START_BLOCK_END instead.
     */
    LEFT_BOTTOM = 15.0,
    /**
     * Elements are positioned in the center of the left side. Consider using
     * INLINE_START_BLOCK_CENTER instead.
     */
    LEFT_CENTER = 16.0,
    /**
     * Elements are positioned on the left, below top-left elements, and flow
     * downwards. Consider using INLINE_START_BLOCK_START instead.
     */
    LEFT_TOP = 17.0,
    /**
     * Elements are positioned on the right, above bottom-right elements, and
     * flow upwards. Consider using INLINE_END_BLOCK_END instead.
     */
    RIGHT_BOTTOM = 18.0,
    /**
     * Elements are positioned in the center of the right side. Consider using
     * INLINE_END_BLOCK_CENTER instead.
     */
    RIGHT_CENTER = 19.0,
    /**
     * Elements are positioned on the right, below top-right elements, and flow
     * downwards. Consider using INLINE_END_BLOCK_START instead.
     */
    RIGHT_TOP = 20.0,
    /**
     * Elements are positioned in the center of the top row. Consider using
     * BLOCK_START_INLINE_CENTER instead.
     */
    TOP_CENTER = 21.0,
    /**
     * Elements are positioned in the top left and flow towards the middle.
     * Consider using BLOCK_START_INLINE_START instead.
     */
    TOP_LEFT = 22.0,
    /**
     * Elements are positioned in the top right and flow towards the middle.
     * Consider using BLOCK_START_INLINE_END instead.
     */
    TOP_RIGHT = 23.0,
  }

  export interface FullscreenControlOptions {
    position?: ControlPosition | null;
  }

  export interface MapRestriction {
    /**
     * When set, a user can only pan and zoom inside the given bounds. Bounds
     * can restrict both longitude and latitude, or can restrict latitude only.
     * For latitude-only bounds use west and east longitudes of -180 and 180,
     * respectively, for example, <code>latLngBounds: {north: northLat, south:
     * southLat, west: -180, east: 180}</code>.
     */
    latLngBounds: routo.maps.LatLngBounds | routo.maps.LatLngBoundsLiteral;
    /**
     * Bounds can be made more restrictive by setting the
     * <code>strictBounds</code> flag to <code>true</code>. This reduces how far
     * a user can zoom out, ensuring that everything outside of the restricted
     * bounds stays hidden. The default is <code>false</code>, meaning that a
     * user can zoom out until the entire bounded area is in view, possibly
     * including areas outside the bounded area.
     */
    strictBounds?: boolean;
  }

  export interface ScaleControlOptions {
    /**
     * Style id. Used to select what style of scale control to display.
     */
    style?: ScaleControlStyle | null;
  }

  export enum ScaleControlStyle {
    /**
     * The standard scale control.
     */
    DEFAULT = 0.0,
  }

  export interface ZoomControlOptions {
    /**
     * Position id. Used to specify the position of the control on the map.
     */
    position?: ControlPosition | null;
  }

  export interface MapTypeStyle {
    /**
     * The element to which a styler should be applied. An element is a visual
     * aspect of a feature on the map. Example: a label, an icon, the stroke or
     * fill applied to the geometry, and more. Optional. If
     * <code>elementType</code> is not specified, the value is assumed to be
     * <code>'all'</code>. For details of usage and allowed values, see the <a
     * href="https://developers.google.com/maps/documentation/javascript/style-reference#style-elements">style
     * reference</a>.
     */
    elementType?: string | null;
    /**
     * The feature, or group of features, to which a styler should be applied.
     * Optional. If <code>featureType</code> is not specified, the value is
     * assumed to be <code>'all'</code>. For details of usage and allowed
     * values, see the <a
     * href="https://developers.google.com/maps/documentation/javascript/style-reference#style-features">style
     * reference</a>.
     */
    featureType?: string | null;
    /**
     * The style rules to apply to the selected map features and elements. The
     * rules are applied in the order that you specify in this array. For
     * guidelines on usage and allowed values, see the <a
     * href="https://developers.google.com/maps/documentation/javascript/style-reference#stylers">style
     * reference</a>.
     */
    stylers: object[];
  }

  export interface LocationControlOptions {
    markerImageUrl: String;
    position: Object;
  }

  export interface MapOptions {
    /**
     * The initial Map center.
     */
    center?: routo.maps.LatLng | null | routo.maps.LatLngLiteral;
    /**
     * When <code>false</code>, map icons are not clickable. A map icon
     * represents a point of interest, also known as a POI.
     * @defaultValue <code>true</code>
     */
    clickableIcons?: boolean | null;

    /**
     * Enables/disables zoom and center on double click. Enabled by default.
     * <p><strong>Note</strong>: This property is <strong>not
     * recommended</strong>. To disable zooming on double click, you can use the
     * <code>gestureHandling</code> property, and set it to <code>"none"</code>.
     */
    disableDoubleClickZoom?: boolean | null;

    /**
     * The name or url of the cursor to display when mousing over a draggable
     * map. This property uses the css <code>cursor</code> attribute to change
     * the icon. As with the css property, you must specify at least one
     * fallback cursor that is not a URL. For example: <code>draggableCursor:
     * 'url(<a
     * href="http://www.example.com/icon.png">http://www.example.com/icon.png</a>),
     * auto;'</code>.
     */
    draggableCursor?: string | null;
    /**
     * The name or url of the cursor to display when the map is being dragged.
     * This property uses the css <code>cursor</code> attribute to change the
     * icon. As with the css property, you must specify at least one fallback
     * cursor that is not a URL. For example: <code>draggingCursor: 'url(<a
     * href="http://www.example.com/icon.png">http://www.example.com/icon.png</a>),
     * auto;'</code>.
     */
    draggingCursor?: string | null;
    /**
     * The enabled/disabled state of the Fullscreen control.
     */
    fullscreenControl?: boolean | null;
    /**
     * The display options for the Fullscreen control.
     */
    fullscreenControlOptions?: FullscreenControlOptions | null;

    /**
     * The heading for aerial imagery in degrees measured clockwise from
     * cardinal direction North. Headings are snapped to the nearest available
     * angle for which imagery is available.
     */
    heading?: number | null;

    /**
     * Whether the map should allow fractional zoom levels. Listen to
     * <code>isfractionalzoomenabled_changed</code> to know when the default has
     * been set.
     * @defaultValue <code>true</code> for vector maps and <code>false</code>
     * for raster maps
     */
    isFractionalZoomEnabled?: boolean | null;
    /**
     * If <code>false</code>, prevents the map from being controlled by the
     * keyboard. Keyboard shortcuts are enabled by default.
     */
    keyboardShortcuts?: boolean | null;

    mapTypeId?: string | null;
    /**
     * The maximum zoom level which will be displayed on the map. If omitted, or
     * set to <code>null</code>, the maximum zoom from the current map type is
     * used instead. Valid zoom values are numbers from zero up to the supported
     * <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>.
     */
    maxZoom?: number | null;
    /**
     * The minimum zoom level which will be displayed on the map. If omitted, or
     * set to <code>null</code>, the minimum zoom from the current map type is
     * used instead. Valid zoom values are numbers from zero up to the supported
     * <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>.
     */
    minZoom?: number | null;
    /**
     * If <code>true</code>, do not clear the contents of the Map div.
     */
    noClear?: boolean | null;

    /**
     * Defines a boundary that restricts the area of the map accessible to
     * users. When set, a user can only pan and zoom while the camera view stays
     * inside the limits of the boundary.
     */
    restriction?: MapRestriction | null;

    /**
     * The initial enabled/disabled state of the Scale control.
     */
    scaleControl?: boolean | null;
    /**
     * The initial display options for the Scale control.
     */
    scaleControlOptions?: ScaleControlOptions | null;
    /**
     * If <code>false</code>, disables zooming on the map using a mouse scroll
     * wheel. The scrollwheel is enabled by default. <p><strong>Note</strong>:
     * This property is <strong>not recommended</strong>. To disable zooming
     * using scrollwheel, you can use the <code>gestureHandling</code> property,
     * and set it to either <code>"cooperative"</code> or <code>"none"</code>.
     */
    scrollwheel?: boolean | null;

    styles?: MapTypeStyle[] | null;

    /**
     * The initial Map zoom level. Valid zoom values are numbers from zero up to
     * the supported <a
     * href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum
     * zoom level</a>. Larger zoom values correspond to a higher resolution.
     */
    zoom?: number | null;
    /**
     * The enabled/disabled state of the Zoom control.
     */
    zoomControl?: boolean | null;
    /**
     * The display options for the Zoom control.
     */
    zoomControlOptions?: ZoomControlOptions | null;

    enableRotation?: boolean | null;
    stopZoomInOut?: boolean | null;
    locationControl?: boolean | null;
    locationControlOptions?: LocationControlOptions | null;
  }

  export class Map extends routo.maps.MVCObject {
    constructor(target: HTMLElement, opts?: MapOptions);
    /**
     * Additional controls to attach to the map. To add a control to the map,
     * add the control&#39;s <code>&lt;div&gt;</code> to the
     * <code>MVCArray</code> corresponding to the <code>ControlPosition</code>
     * where it should be rendered.
     */
    controls: routo.maps.MVCArray<HTMLElement>[];
    /**
     * An instance of <code>Data</code>, bound to the map. Add features to this
     * <code>Data</code> object to conveniently display them on this map.
     */
    data: google.maps.Data;
    /**
     * Sets the viewport to contain the given bounds.</br>
     * <strong>Note:</strong> When the map is set to <code>display: none</code>,
     * the <code>fitBounds</code> function reads the map&#39;s size as 0x0, and
     * therefore does not do anything. To change the viewport while the map is
     * hidden, set the map to <code>visibility: hidden</code>, thereby ensuring
     * the map div has an actual size. For vector maps, this method sets the
     * map&#39;s tilt and heading to their default zero values. Calling this
     * method may cause a smooth animation as the map pans and zooms to fit the
     * bounds. Whether or not this method animates depends on an internal
     * heuristic.
     * @param bounds Bounds to show.
     * @param padding Padding in pixels. The bounds will be fit in the part of
     *     the map that remains after padding is removed. A number value will
     *     yield the same padding on all 4 sides. Supply 0 here to make a
     *     fitBounds idempotent on the result of getBounds.
     */
    fitBounds(
      bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
      padding?: number | google.maps.Padding,
    ): void;
    /**
     * Returns the lat/lng bounds of the current viewport. If more than one copy
     * of the world is visible, the bounds range in longitude from -180 to 180
     * degrees inclusive. If the map is not yet initialized or center and zoom
     * have not been set then the result is <code>undefined</code>. For vector
     * maps with non-zero tilt or heading, the returned lat/lng bounds
     * represents the smallest bounding box that includes the visible region of
     * the map&#39;s viewport. See {@link
     * google.maps.MapCanvasProjection.getVisibleRegion} for getting the exact
     * visible region of the map&#39;s viewport.
     */
    getBounds(): google.maps.LatLngBounds | undefined;
    /**
     * Returns the position displayed at the center of the map. Note that
     * this {@link google.maps.LatLng} object is <em>not</em> wrapped. See
     * <code><a href="#LatLng">LatLng</a></code> for more information. If the
     * center or bounds have not been set then the result is
     * <code>undefined</code>.
     */
    getCenter(): google.maps.LatLng | undefined;
    /**
     * Returns the clickability of the map icons. A map icon represents a point
     * of interest, also known as a POI. If the returned value is
     * <code>true</code>, then the icons are clickable on the map.
     */
    getClickableIcons(): boolean | undefined;
    /**
     * Available only in the v=beta channel: https://goo.gle/3oAthT3.
     * Returns the <code>FeatureLayer</code> for the specified
     * <code>datasetId</code>. Dataset IDs must be configured in the Google
     * Cloud Console. If the dataset ID is not associated with the map&#39;s map
     * style, or if Data-driven styling is not available (no map ID, no vector
     * tiles, no Data-Driven Styling feature layers or Datasets configured in
     * the Map Style), this logs an error, and the resulting
     * <code>FeatureLayer.isAvailable</code> will be false.
     */
    getDatasetFeatureLayer(datasetId: string): google.maps.FeatureLayer;
    getDiv(): HTMLElement;
    /**
     * Returns the <code>FeatureLayer</code> of the specific
     * <code>FeatureType</code>. A <code>FeatureLayer</code> must be enabled in
     * the Google Cloud Console. If a <code>FeatureLayer</code> of the specified
     * <code>FeatureType</code> does not exist on this map, or if Data-driven
     * styling is not available (no map ID, no vector tiles, and no
     * <code>FeatureLayer</code> enabled in the map style), this logs an error,
     * and the resulting <code>FeatureLayer.isAvailable</code> will be false.
     */
    getFeatureLayer(
      featureType: google.maps.FeatureType,
    ): google.maps.FeatureLayer;
    /**
     * Returns the compass heading of the map. The heading value is measured in
     * degrees (clockwise) from cardinal direction North. If the map is not yet
     * initialized then the result is <code>undefined</code>.
     */
    getHeading(): number | undefined;
    /**
     * Returns whether heading interactions are enabled. This option is only in
     * effect when the map is a vector map. If not set in code, then the cloud
     * configuration for the map ID will be used (if available).
     */
    getHeadingInteractionEnabled(): boolean | null;
    /**
     * Informs the caller of the current capabilities available to the map based
     * on the Map ID that was provided.
     */
    getMapCapabilities(): google.maps.MapCapabilities;
    getMapTypeId(): string | undefined;
    /**
     * Returns the current <code>Projection</code>. If the map is not yet
     * initialized then the result is <code>undefined</code>. Listen to the
     * <code>projection_changed</code> event and check its value to ensure it is
     * not <code>undefined</code>.
     */
    getProjection(): google.maps.Projection | undefined;
    /**
     * Returns the current RenderingType of the map.
     */
    getRenderingType(): google.maps.RenderingType;
    /**
     * Returns the default <code>StreetViewPanorama</code> bound to the map,
     * which may be a default panorama embedded within the map, or the panorama
     * set using <code>setStreetView()</code>. Changes to the map&#39;s
     * <code>streetViewControl</code> will be reflected in the display of such a
     * bound panorama.
     */
    getStreetView(): google.maps.StreetViewPanorama;
    /**
     * Returns the current angle of incidence of the map, in degrees from the
     * viewport plane to the map plane. For raster maps, the result will be
     * <code>0</code> for imagery taken directly overhead or <code>45</code> for
     * 45&deg; imagery. This method does not return the value set by
     * <code>setTilt</code>. See <code>setTilt</code> for details.
     */
    getTilt(): number | undefined;
    /**
     * Returns whether tilt interactions are enabled. This option is only in
     * effect when the map is a vector map. If not set in code, then the cloud
     * configuration for the map ID will be used (if available).
     */
    getTiltInteractionEnabled(): boolean | null;
    /**
     * Returns the zoom of the map. If the zoom has not been set then the result
     * is <code>undefined</code>.
     */
    getZoom(): number | undefined;
    /**
     * A registry of <code>MapType</code> instances by string ID.
     */
    mapTypes: google.maps.MapTypeRegistry;
    /**
     * Immediately sets the map&#39;s camera to the target camera options,
     * without animation.
     */
    moveCamera(cameraOptions: google.maps.CameraOptions): void;
    /**
     * Additional map types to overlay. Overlay map types will display on top of
     * the base map they are attached to, in the order in which they appear in
     * the <code>overlayMapTypes</code> array (overlays with higher index values
     * are displayed in front of overlays with lower index values).
     */
    overlayMapTypes: google.maps.MVCArray<google.maps.MapType | null>;
    /**
     * Changes the center of the map by the given distance in pixels. If the
     * distance is less than both the width and height of the map, the
     * transition will be smoothly animated. Note that the map coordinate system
     * increases from west to east (for x values) and north to south (for y
     * values).
     * @param x Number of pixels to move the map in the x direction.
     * @param y Number of pixels to move the map in the y direction.
     */
    panBy(x: number, y: number): void;
    /**
     * Changes the center of the map to the given <code>LatLng</code>. If the
     * change is less than both the width and height of the map, the transition
     * will be smoothly animated.
     * @param latLng The new center latitude/longitude of the map.
     */
    panTo(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void;
    /**
     * Pans the map by the minimum amount necessary to contain the given
     * <code>LatLngBounds</code>. It makes no guarantee where on the map the
     * bounds will be, except that the map will be panned to show as much of the
     * bounds as possible inside <code>{currentMapSizeInPx} - {padding}</code>.
     * For both raster and vector maps, the map&#39;s zoom, tilt, and heading
     * will not be changed.
     * @param latLngBounds The bounds to pan the map to.
     * @param padding Padding in pixels. A number value will yield the same
     *     padding on all 4 sides. The default value is 0.
     */
    panToBounds(
      latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
      padding?: number | google.maps.Padding,
    ): void;
    setCenter(latlng: google.maps.LatLng | google.maps.LatLngLiteral): void;
    /**
     * Controls whether the map icons are clickable or not. A map icon
     * represents a point of interest, also known as a POI. To disable the
     * clickability of map icons, pass a value of <code>false</code> to this
     * method.
     */
    setClickableIcons(value: boolean): void;
    /**
     * Sets the compass heading for map measured in degrees from cardinal
     * direction North. For raster maps, this method only applies to aerial
     * imagery.
     */
    setHeading(heading: number): void;
    /**
     * Sets whether heading interactions are enabled. This option is only in
     * effect when the map is a vector map. If not set in code, then the cloud
     * configuration for the map ID will be used (if available).
     */
    setHeadingInteractionEnabled(headingInteractionEnabled: boolean): void;
    setMapTypeId(mapTypeId: string): void;
    setOptions(options: google.maps.MapOptions | null): void;
    /**
     * Sets the current RenderingType of the map.
     */
    setRenderingType(renderingType: google.maps.RenderingType): void;
    /**
     * Binds a <code>StreetViewPanorama</code> to the map. This panorama
     * overrides the default <code>StreetViewPanorama</code>, allowing the map
     * to bind to an external panorama outside of the map. Setting the panorama
     * to <code>null</code> binds the default embedded panorama back to the map.
     * @param panorama The panorama to bind to the map.
     */
    setStreetView(panorama: google.maps.StreetViewPanorama | null): void;
    /**
     * For vector maps, sets the angle of incidence of the map. The allowed
     * values are restricted depending on the zoom level of the map. <br><br>
     * For raster maps, controls the automatic switching behavior for the angle
     * of incidence of the map. The only allowed values are <code>0</code> and
     * <code>45</code>. <code>setTilt(0)</code> causes the map to always use a
     * 0&deg; overhead view regardless of the zoom level and viewport.
     * <code>setTilt(45)</code> causes the tilt angle to automatically switch to
     * 45 whenever 45&deg; imagery is available for the current zoom level and
     * viewport, and switch back to 0 whenever 45&deg; imagery is not available
     * (this is the default behavior). 45&deg; imagery is only available for
     * <code>satellite</code> and <code>hybrid</code> map types, within some
     * locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code>
     * returns the current tilt angle, not the value set by
     * <code>setTilt</code>. Because <code>getTilt</code> and
     * <code>setTilt</code> refer to different things, do not
     * <code>bind()</code> the <code>tilt</code> property; doing so may yield
     * unpredictable effects.
     */
    setTilt(tilt: number): void;
    /**
     * Sets whether tilt interactions are enabled. This option is only in effect
     * when the map is a vector map. If not set in code, then the cloud
     * configuration for the map ID will be used (if available).
     */
    setTiltInteractionEnabled(tiltInteractionEnabled: boolean): void;
    /**
     * Sets the zoom of the map.
     * @param zoom Larger zoom values correspond to a higher resolution.
     */
    setZoom(zoom: number): void;
    /**
     * Map ID which can be used for code samples which require a Map ID. This
     * Map ID is not intended for use in production applications and cannot be
     * used for features which require cloud configuration (such as Cloud
     * Styling).
     */
    static readonly DEMO_MAP_ID: string;
  }
}
