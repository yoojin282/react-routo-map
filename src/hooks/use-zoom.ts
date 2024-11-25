import { useCallback } from "react";
import { useMapContext } from "../context";

export const useZoom = () => {
  const map = useMapContext();

  const zoomIn = useCallback(() => {
    map.setZoom((map.getZoom() ?? 15) + 1);
  }, [map]);

  const zoomOut = useCallback(() => {
    map.setZoom((map.getZoom() ?? 15) - 1);
  }, [map]);

  return { zoomIn, zoomOut, setZoom: map.setZoom };
};
