import { ElementType, ReactElement } from "react";
import { ComponentBase, LatLng, Nullable } from "../types";

export interface MapProps extends routo.maps.MapOptions, ComponentBase {
  as?: ElementType;
  center?: LatLng;
  boundsPath?: LatLng[];
  boundsPadding?:
    | { top: number; left: number; right: number; bottom: number }
    | number;
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
  pixelOffset?: number | null;
  maxWidth?: number | null;
  minWidth?: number | null;
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
