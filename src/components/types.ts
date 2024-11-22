import { ReactElement } from "react";
import { LatLng, Nullable, Size } from "../types";

export interface MarkerProps
  extends Omit<routo.maps.MarkerOptions, "position" | "map" | "clickable"> {
  position: LatLng;
  onClick?: () => void;
  reactIcon?: ReactElement;
}

export interface MarkerRef {
  getMarker: () => { marker: Nullable<routo.maps.Marker>; id: string };
}

export interface InfoWindowProps
  extends Omit<
    routo.maps.InfoWindowOptions,
    "contents" | "disableAutoPan" | "pixelOffset"
  > {
  contents: string;
  position: LatLng;
  disableAutoPan: boolean;
  pixelOffset: Size;
}

export interface InfoWindowRef {
  getInfoWindow: () => {
    infoWindow: Nullable<routo.maps.InfoWindow>;
    id: string;
  };
}
