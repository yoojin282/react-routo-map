import {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import {
  InfoWindowProps,
  InfoWindowRef,
  MarkerProps,
  MarkerRef,
} from "./types";
import { useMapContext } from "../context";
import { Nullable } from "../types";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";

/**
 * A marker component for map
 *
 * You can customize this marker with icon prop, see more detail here {@link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#toc37__anchor}
 */
const InfoWindowBase: ForwardRefRenderFunction<
  InfoWindowRef,
  InfoWindowProps
> = (
  { contents, position: { lat, lng }, disableAutoPan, pixelOffset },
  ref,
) => {
  const map = useMapContext();
  const infoWindow = useRef<Nullable<routo.maps.InfoWindow>>(null);

  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getInfoWindow: () => ({ infoWindow: infoWindow.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    infoWindow.current = new routo.maps.InfoWindow({
      content: contents,
      disableAutoPan,
      pixelOffset,
    });

    infoWindow.current.open({
      map,
      position: new routo.maps.LatLng(lat, lng),
    });

    return () => {
      if (infoWindow.current) {
        infoWindow.current.close();
        infoWindow.current = null;
      }
    };
  }, [map, lat, lng, disableAutoPan, pixelOffset]);

  return null;
};

export const Marker = memo(forwardRef(InfoWindowBase));
