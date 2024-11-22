declare namespace routo.maps {
  export class InfoWindow extends routo.maps.MVCObject {
    /**
     * An overlay that looks like a bubble and is often connected to a marker.
     *
     * Access by calling `const {InfoWindow} = await
     * routo.maps.importLibrary("maps")` or `const {InfoWindow} = await
     * routo.maps.importLibrary("streetView")`. See
     * https://developers.google.com/maps/documentation/javascript/libraries.
     */
    constructor(opts?: routo.maps.InfoWindowOptions | null);
    /**
     * Closes this InfoWindow by removing it from the DOM structure.
     */
    close(): void;
    /**
     * Sets focus on this <code>InfoWindow</code>. You may wish to consider
     * using this method along with a <code>visible</code> event to make sure
     * that <code>InfoWindow</code> is visible before setting focus on it. An
     * <code>InfoWindow</code> that is not visible cannot be focused.
     */
    focus(): void;
    getContent(): string | Element | null | Text | undefined;
    getHeaderContent(): string | Element | null | Text | undefined;
    getHeaderDisabled(): boolean | undefined;
    getPosition(): routo.maps.LatLng | null | undefined;
    getZIndex(): number;
    /**
     * Checks if the InfoWindow is open.
     */
    isOpen: boolean;
    /**
     * Opens this InfoWindow on the given map. Optionally, an InfoWindow can be
     * associated with an anchor. In the core API, the only anchor is the Marker
     * class. However, an anchor can be any MVCObject that exposes a LatLng
     * <code>position</code> property and optionally a Point
     * <code>anchorPoint</code> property for calculating the
     * <code>pixelOffset</code> (see InfoWindowOptions). The
     * <code>anchorPoint</code> is the offset from the anchor&#39;s position to
     * the tip of the InfoWindow. It is recommended to use the {@link
     * routo.maps.InfoWindowOpenOptions} interface as the single argument for
     * this method. To prevent changing browser focus on open, set {@link
     * routo.maps.InfoWindowOpenOptions.shouldFocus} to <code>false</code>.
     * @param options Either an InfoWindowOpenOptions object (recommended) or
     *     the map|panorama on which to render this InfoWindow.
     * @param anchor The anchor to which this InfoWindow will be positioned. If
     *     the anchor is non-null, the InfoWindow will be positioned at the
     *     top-center of the anchor. The InfoWindow will be rendered on the same
     *     map or panorama as the anchor <strong>(when available)</strong>.
     */
    open(
      options?:
        | routo.maps.InfoWindowOpenOptions
        | null
        | routo.maps.Map
        | routo.maps.StreetViewPanorama,
      anchor?:
        | routo.maps.MVCObject
        | null
        | routo.maps.marker.AdvancedMarkerElement,
    ): void;
    /**
     * @param content The content to be displayed by this InfoWindow.
     */
    setContent(content?: string | Element | null | Text): void;
    /**
     * @param headerContent The header content to be displayed by this
     *     InfoWindow. See {@link routo.maps.InfoWindowOptions.headerContent}.
     */
    setHeaderContent(headerContent?: string | Element | null | Text): void;
    /**
     * @param headerDisabled Specifies whether to disable the whole header row.
     *     See {@link routo.maps.InfoWindowOptions.headerDisabled}.
     */
    setHeaderDisabled(headerDisabled?: boolean | null): void;
    setOptions(options?: routo.maps.InfoWindowOptions | null): void;
    /**
     * @param position The LatLng position at which to display this InfoWindow.
     */
    setPosition(
      position?: routo.maps.LatLng | null | routo.maps.LatLngLiteral,
    ): void;
    /**
     * @param zIndex The z-index for this InfoWindow. An InfoWindow with a
     *     greater z-index will be displayed in front of all other InfoWindows
     *     with a lower z-index.
     */
    setZIndex(zIndex: number): void;
  }
  /**
   * Options for opening an InfoWindow
   */
  export interface InfoWindowOpenOptions {
    /**
     * The anchor to which this InfoWindow will be positioned. If the anchor is
     * non-null, the InfoWindow will be positioned at the top-center of the
     * anchor. The InfoWindow will be rendered on the same map or panorama as
     * the anchor <strong>(when available)</strong>.
     */
    anchor?:
      | routo.maps.MVCObject
      | null
      | routo.maps.marker.AdvancedMarkerElement;
    /**
     * The map or panorama on which to render this InfoWindow.
     */
    map?: routo.maps.Map | null | routo.maps.StreetViewPanorama;
    /**
     * Whether or not focus should be moved inside the InfoWindow when it is
     * opened. When this property is unset or when it is set to
     * <code>null</code> or <code>undefined</code>, a heuristic is used to
     * decide whether or not focus should be moved. It is recommended to
     * explicitly set this property to fit your needs as the heuristic is
     * subject to change and may not work well for all use cases.
     */
    shouldFocus?: boolean | null;
  }
  /**
   * InfoWindowOptions object used to define the properties that can be set on a
   * InfoWindow.
   */
  export interface InfoWindowOptions {
    /**
     * AriaLabel to assign to the InfoWindow.
     */
    ariaLabel?: string | null;
    /**
     * Content to display in the InfoWindow. This can be an HTML element, a
     * plain-text string, or a string containing HTML. The InfoWindow will be
     * sized according to the content. To set an explicit size for the content,
     * set content to be a HTML element with that size.
     */
    content?: string | Element | Text | null;
    /**
     * Disable panning the map to make the InfoWindow fully visible when it
     * opens.
     * @defaultValue <code>false</code>
     */
    disableAutoPan?: boolean | null;
    /**
     * The content to display in the InfoWindow header row. This can be an HTML
     * element, or a string of plain text. The InfoWindow will be sized
     * according to the content. To set an explicit size for the header content,
     * set headerContent to be a HTML element with that size.
     */
    headerContent?: string | Element | Text | null;
    /**
     * Disables the whole header row in the InfoWindow. When set to true, the
     * header will be removed so that the header content and the close button
     * will be hidden.
     */
    headerDisabled?: boolean | null;
    /**
     * Maximum width of the InfoWindow, regardless of content&#39;s width. This
     * value is only considered if it is set before a call to
     * <code>open()</code>. To change the maximum width when changing content,
     * call <code>close()</code>, <code>setOptions()</code>, and then
     * <code>open()</code>.
     */
    maxWidth?: number | null;
    /**
     * Minimum width of the InfoWindow, regardless of the content&#39;s width.
     * When using this property, it is strongly recommended to set the
     * <code>minWidth</code> to a value less than the width of the map (in
     * pixels). This value is only considered if it is set before a call to
     * <code>open()</code>. To change the minimum width when changing content,
     * call <code>close()</code>, <code>setOptions()</code>, and then
     * <code>open()</code>.
     */
    minWidth?: number | null;
    /**
     * The offset, in pixels, of the tip of the info window from the point on
     * the map at whose geographical coordinates the info window is anchored. If
     * an InfoWindow is opened with an anchor, the <code>pixelOffset</code> will
     * be calculated from the anchor&#39;s <code>anchorPoint</code> property.
     */
    pixelOffset?: routo.maps.Size | null;
    /**
     * The LatLng at which to display this InfoWindow. If the InfoWindow is
     * opened with an anchor, the anchor&#39;s position will be used instead.
     */
    position?: routo.maps.LatLng | routo.maps.LatLngLiteral | null;
    /**
     * All InfoWindows are displayed on the map in order of their zIndex, with
     * higher values displaying in front of InfoWindows with lower values. By
     * default, InfoWindows are displayed according to their latitude, with
     * InfoWindows of lower latitudes appearing in front of InfoWindows at
     * higher latitudes. InfoWindows are always displayed in front of markers.
     */
    zIndex?: number | null;
  }
}
