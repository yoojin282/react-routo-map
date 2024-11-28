import { ElementType, ReactElement } from "react";
import {
  ComponentBase,
  LatLng,
  LatLngBounds,
  Nullable,
  Padding,
  PixelOffset,
} from "../types";

export interface MapProps extends routo.maps.MapOptions, ComponentBase {
  as?: ElementType;
  center?: LatLng;
  onLoad?: (map: routo.maps.Map) => void;
  children?: ReactElement;
}

export interface MarkerProps
  extends Omit<routo.maps.MarkerOptions, "map" | "clickable"> {
  position: LatLng;
  onClick?: () => void;
  reactIcon?: ReactElement;
}

export interface MarkerRef {
  getMarker: () => { marker: Nullable<routo.maps.Marker>; id: string };
}

export interface InfoWindowProps {
  content?: string | Element | Text | null;
  position: LatLng;
  pixelOffset?: PixelOffset | null; // 작동안하는듯
  maxWidth?: number | null; // 작동안하는듯
  minWidth?: number | null; // 작동안하는듯
  ariaLabel?: string | null;
  disableAutoPan?: boolean | null;
  zIndex?: number | null;
}

export interface InfoWindowRef {
  getInfoWindow: () => {
    infoWindow: Nullable<routo.maps.InfoWindow>;
    id: string;
  };
}

export interface PolylineProps
  extends Omit<routo.maps.PolygonOptions, "map" | "clickable" | "paths"> {
  path: LatLng[];
  fitBounds?: boolean | undefined;
  fitBoundsPadding?: Padding | undefined;
}

export interface PolylineRef {
  getPolyline: () => { polyline: Nullable<routo.maps.Polyline>; id: string };
}

export interface PolygonProps
  extends Omit<routo.maps.PolygonOptions, "map" | "clickable"> {
  paths: LatLng[][];
  fitBounds?: boolean | undefined;
  fitBoundsPadding?: Padding | undefined;
}

export interface PolygonRef {
  getPolygon: () => { polygon: Nullable<routo.maps.Polygon>; id: string };
}

export interface CircleProps
  extends Omit<routo.maps.CircleOptions, "map" | "clickable"> {
  center: LatLng;
  fitBounds?: boolean | undefined;
  fitBoundsPadding?: Padding | undefined;
}

export interface CircleRef {
  getCircle: () => { circle: Nullable<routo.maps.Circle>; id: string };
}

export interface RectangleProps
  extends Omit<routo.maps.RectangleOptions, "map" | "clickable"> {
  bounds: LatLngBounds;
  fitBounds?: boolean | undefined;
  fitBoundsPadding?: Padding | undefined;
}

export interface RectangleRef {
  getRectangle: () => { rectangle: Nullable<routo.maps.Rectangle>; id: string };
}
