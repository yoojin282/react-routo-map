import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { useMapContext } from "../context";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";
import { PolylineRef, PolylineProps } from "./types";

const PolylineBase: ForwardRefRenderFunction<PolylineRef, PolylineProps> = (
  {
    path,
    strokeColor = "#FF0000",
    strokeWeight = 4,
    strokeOpacity = 0.8,
  }: PolylineProps,
  ref,
) => {
  const map = useMapContext();
  const polylineRef = useRef<routo.maps.Polyline | null>(null);
  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getPolyline: () => ({ polyline: polylineRef.current, id }),
  }));

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

export const Polyline = memo(forwardRef(PolylineBase));
