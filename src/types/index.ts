import { CSSProperties } from "react";

export type Padding = routo.maps.Padding;
export type LatLng = routo.maps.LatLngLiteral;
export type LatLngBounds = routo.maps.LatLngBoundsLiteral;
// export type Size = routo.maps.Size;
export type Nullable<T> = T | null;

export interface ComponentBase {
  className?: string;
  style?: CSSProperties;
}
