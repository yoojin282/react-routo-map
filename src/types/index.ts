import { CSSProperties } from "react";

export type LatLng = routo.maps.LatLngLiteral;
export type Size = routo.maps.Size;
export type Nullable<T> = T | null;

export interface ComponentBase {
  className?: string;
  style?: CSSProperties;
}
