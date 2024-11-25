import React, { useRef } from "react";
import { useMapContext } from "../context";
import { useIsomorphicLayoutEffect } from "../hooks";
import { LatLng } from "../types";

interface PolylineProps {
  path: LatLng[];
  strokeColor?: string;
  strokeWeight?: number;
  strokeOpacity?: number;
}

/**
 * Set polyline into Map obejct without rendering anything in VirtualDOM
 * @returns <></>
 */
export const Polyline = ({
  path,
  strokeColor = "#FF0000",
  strokeWeight = 4,
  strokeOpacity = 0.8,
}: PolylineProps) => {
  const map = useMapContext();
  const polylineRef = useRef<routo.maps.Polyline | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!map) return;

    const polylinePath = path.map((point) => new routo.maps.LatLng(point));

    polylineRef.current = new routo.maps.Polyline({
      map,
      path: polylinePath,
      strokeColor,
      strokeWeight,
      strokeOpacity,
    });

    return () => {
      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }
    };
  }, [map, path, strokeColor, strokeWeight, strokeOpacity]);

  return <></>;
};
