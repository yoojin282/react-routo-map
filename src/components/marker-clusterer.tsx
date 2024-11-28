import {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { MarkerClustererProps, MarkerClustererRef } from "./types";
import { useMapContext } from "../context";
import { Nullable } from "../types";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";

const MarkerClustererBase: ForwardRefRenderFunction<
  MarkerClustererRef,
  MarkerClustererProps
> = ({ markers, ...rest }: MarkerClustererProps, ref) => {
  const map = useMapContext();
  const clustererRef = useRef<Nullable<routo.maps.MarkerClusterer>>(null);

  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getMarkerClusterer: () => ({ markerClusterer: clustererRef.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    clustererRef.current = new routo.maps.MarkerClusterer({
      map,
      markers,
      ...rest,
    });

    return () => {
      if (clustererRef.current) {
        // clustererRef.current.removeMarkers(markers);
        clustererRef.current = null;
      }
    };
  }, [markers, map, rest]);

  return null;
};

export const MarkerClusterer = memo(forwardRef(MarkerClustererBase));
