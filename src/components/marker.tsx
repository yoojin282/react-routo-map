import {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { MarkerProps, MarkerRef } from "./types";
import { useMapContext } from "../context";
import { Nullable } from "../types";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";

/**
 * A marker component for map
 *
 * You can customize this marker with icon prop, see more detail here {@link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#toc37__anchor}
 */
const MarkerBase: ForwardRefRenderFunction<MarkerRef, MarkerProps> = (
  { position: { lat, lng }, onClick, icon, ...rest }: MarkerProps,
  ref,
) => {
  const map = useMapContext();
  const marker = useRef<Nullable<routo.maps.Marker>>(null);

  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getMarker: () => ({ marker: marker.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    marker.current = new routo.maps.Marker({
      map,
      position: new routo.maps.LatLng(lat, lng),
      icon: icon,
      clickable: !!onClick,
      ...rest,
    });

    let listener: routo.maps.MapsEventListener;
    if (onClick) {
      listener = marker.current.addListener("click", onClick);
    }

    return () => {
      if (!marker.current) return;
      if (listener) {
        // marker.current.removeListener(listener);
      }
      marker.current.setMap(null);
      marker.current = null;
    };
  }, [lat, lng, map, onClick, rest]);

  return null;
};

export const Marker = memo(forwardRef(MarkerBase));