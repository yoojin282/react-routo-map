import {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { useMapContext } from "../context";
import { Nullable } from "../types";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";
import { InfoWindowProps, InfoWindowRef } from "./types";

/**
 * A marker component for map
 *
 * You can customize this marker with icon prop, see more detail here {@link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#toc37__anchor}
 */
const InfoWindowBase: ForwardRefRenderFunction<
  InfoWindowRef,
  InfoWindowProps
> = (
  {
    content,
    position,
    disableAutoPan,
    // maxWidth,
    // minWidth,
    // pixelOffset,
    zIndex,
  }: InfoWindowProps,
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
      content,
      disableAutoPan,
      // pixelOffset: pixelOffset ? new routo.maps.Size(0, pixelOffset) : null,
      position,
      // maxWidth,
      // minWidth,
      zIndex,
    });

    infoWindow.current.open({
      map,
    });

    return () => {
      if (infoWindow.current) {
        infoWindow.current.close();
        infoWindow.current = null;
      }
    };
  }, [
    map,
    content,
    position,
    disableAutoPan,
    // maxWidth,
    // minWidth,
    // pixelOffset,
    zIndex,
  ]);

  return null;
};

export const InfoWindow = memo(forwardRef(InfoWindowBase));
