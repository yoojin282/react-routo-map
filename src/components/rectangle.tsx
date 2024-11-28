import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { useMapContext } from "../context";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";
import { RectangleRef, RectangleProps } from "./types";

const RectangleBase: ForwardRefRenderFunction<RectangleRef, RectangleProps> = (
  { bounds, fitBounds = false, fitBoundsPadding, ...rest }: RectangleProps,
  ref,
) => {
  const map = useMapContext();
  const rectangleRef = useRef<routo.maps.Rectangle | null>(null);
  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getRectangle: () => ({ rectangle: rectangleRef.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    if (!map) return;

    // const center = new routo.maps.LatLng(lat, lng);

    rectangleRef.current = new routo.maps.Rectangle({
      map,
      bounds,
      ...rest,
    });

    if (fitBounds) {
      map.fitBounds(rectangleRef.current.getBounds(), fitBoundsPadding);
    }

    return () => {
      if (rectangleRef.current) {
        rectangleRef.current.setMap(null);
        rectangleRef.current = null;
      }
    };
  }, [map, bounds, fitBounds, fitBoundsPadding, rest]);

  return <></>;
};

export const Rectangle = memo(forwardRef(RectangleBase));
