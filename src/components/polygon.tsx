import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { useMapContext } from "../context";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";
import { PolygonProps, PolygonRef } from "./types";

const PolygonBase: ForwardRefRenderFunction<PolygonRef, PolygonProps> = (
  { paths, fitBounds = false, fitBoundsPadding, ...rest }: PolygonProps,
  ref,
) => {
  const map = useMapContext();
  const polygonRef = useRef<routo.maps.Polygon | null>(null);
  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getPolygon: () => ({ polygon: polygonRef.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    if (!map) return;

    const elements = paths.map((path) => {
      return path.map(
        (latlng) => new routo.maps.LatLng(latlng.lat, latlng.lng),
      );
    });

    polygonRef.current = new routo.maps.Polygon({
      map: map,
      paths: elements,
      ...rest,
    });
    if (fitBounds) {
      map.fitBounds(polygonRef.current.getBounds(), fitBoundsPadding);
    }

    return () => {
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }
    };
  }, [map, fitBounds, rest]);

  return <></>;
};

export const Polygon = memo(forwardRef(PolygonBase));
