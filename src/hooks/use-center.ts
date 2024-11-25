import { useCallback } from "react";
import { useMapContext } from "../context";
import { LatLng } from "../types";

export const useCenter = () => {
  const map = useMapContext();

  const getCenter = useCallback(() => {
    return map.getCenter();
  }, [map]);

  const setCenter = useCallback(
    ({ lat, lng }: LatLng) => {
      map.setCenter(new routo.maps.LatLng(lat, lng));
    },
    [map],
  );

  const panTo = useCallback(
    ({ lat, lng }: LatLng) => {
      map.setCenter(new routo.maps.LatLng(lat, lng));
    },
    [map],
  );

  return { getCenter, setCenter, panTo };
};
