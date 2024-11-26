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
    ariaLabel,
    position,
    disableAutoPan,
    maxWidth, // 작동안함
    minWidth, // 작동안함
    pixelOffset, // 작동안함
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
      ariaLabel,
      pixelOffset: pixelOffset
        ? new routo.maps.Size(pixelOffset.width, pixelOffset.height)
        : null,
      position,
      maxWidth,
      minWidth,
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
    ariaLabel,
    position,
    disableAutoPan,
    maxWidth,
    minWidth,
    pixelOffset,
    zIndex,
  ]);

  return null;
};

export const InfoWindow = memo(forwardRef(InfoWindowBase));
