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
  { path, fitBounds = false, fitBoundsPadding, ...rest }: PolylineProps,
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
      ...rest,
    });

    if (fitBounds) {
      map.fitBounds(polylineRef.current.getBounds(), fitBoundsPadding);
    }

    return () => {
      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }
    };
  }, [map, path, fitBounds, fitBoundsPadding, rest]);

  return <></>;
};

export const Polyline = memo(forwardRef(PolylineBase));
