/// <reference path="index.d.ts" />
declare namespace routo.maps {
  export interface Icon {
    /**
     * The position at which to anchor an image in correspondence to the
     * location of the marker on the map. By default, the anchor is located
     * along the center point of the bottom of the image.
     */
    anchor?: routo.maps.Point | null;
    /**
     * The origin of the label relative to the top-left corner of the icon
     * image, if a label is supplied by the marker. By default, the origin is
     * located in the center point of the image.
     */
    labelOrigin?: routo.maps.Point | null;
    /**
     * The position of the image within a sprite, if any. By default, the origin
     * is located at the top left corner of the image <code>(0, 0)</code>.
     */
    origin?: routo.maps.Point | null;
    /**
     * The size of the entire image after scaling, if any. Use this property to
     * stretch/shrink an image or a sprite.
     */
    scaledSize?: routo.maps.Size | null;
    /**
     * The display size of the sprite or image. When using sprites, you must
     * specify the sprite size. If the size is not provided, it will be set when
     * the image loads.
     */
    size?: routo.maps.Size | null;
    /**
     * The URL of the image or sprite sheet.
     */
    url: string;
  }

  export interface IconSequence {
    /**
     * If <code>true</code>, each icon in the sequence has the same fixed
     * rotation regardless of the angle of the edge on which it lies. If
     * <code>false</code>, case each icon in the sequence is rotated to align
     * with its edge.
     * @defaultValue <code>false</code>
     */
    fixedRotation?: boolean;
    /**
     * The icon to render on the line.
     */
    icon?: routo.maps.Symbol | null;
    /**
     * The distance from the start of the line at which an icon is to be
     * rendered. This distance may be expressed as a percentage of line&#39;s
     * length (e.g.
     * &#39;50%&#39;) or in pixels (e.g. &#39;50px&#39;).
     * @defaultValue <code>&#39;100%&#39;</code>
     */
    offset?: string;
    /**
     * The distance between consecutive icons on the line. This distance may be
     * expressed as a percentage of the line&#39;s length (e.g. &#39;50%&#39;)
     * or in pixels (e.g. &#39;50px&#39;). To disable repeating of the icon,
     * specify
     * &#39;0&#39;.
     * @defaultValue <code>0</code>
     */
    repeat?: string;
  }
}
