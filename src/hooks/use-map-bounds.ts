import { useCallback } from "react";
import { useMapContext } from "../context";
import { LatLng, LatLngBounds, Padding } from "../types";

export const useMapBounds = () => {
  const map = useMapContext();

  // const getBounds = useCallback(() => {
  //   return map.getBounds();
  // }, [map]);

  const fitBounds = useCallback(
    ({ east, north, south, west }: LatLngBounds, padding: Padding) => {
      if (!map) return;
      map.fitBounds({ east, north, south, west }, padding);
    },
    [map],
  );

  const fitBoundsWithPath = useCallback(
    (path: LatLng[], padding?: Padding | undefined) => {
      if (!map) return;
      const bounds = new routo.maps.LatLngBounds();
      for (let i = 0; i < path.length; i++) {
        bounds.extend(path[i]);
      }

      map.fitBounds(bounds, padding);
    },
    [map],
  );

  return { fitBounds, fitBoundsWithPath };
};
