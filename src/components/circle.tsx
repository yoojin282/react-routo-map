import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { useMapContext } from "../context";
import { useIsomorphicLayoutEffect, useUUIDv4 } from "../hooks";
import { CircleRef, CircleProps } from "./types";

const CircleBase: ForwardRefRenderFunction<CircleRef, CircleProps> = (
  {
    center,
    radius = 200,
    fitBounds = false,
    fitBoundsPadding,
    ...rest
  }: CircleProps,
  ref,
) => {
  const map = useMapContext();
  const circleRef = useRef<routo.maps.Circle | null>(null);
  const id = useUUIDv4();

  useImperativeHandle(ref, () => ({
    getCircle: () => ({ circle: circleRef.current, id }),
  }));

  useIsomorphicLayoutEffect(() => {
    if (!map) return;

    // const center = new routo.maps.LatLng(lat, lng);

    circleRef.current = new routo.maps.Circle({
      map,
      center,
      radius,
      ...rest,
    });

    if (fitBounds) {
      map.fitBounds(circleRef.current.getBounds(), fitBoundsPadding);
    }

    return () => {
      if (circleRef.current) {
        circleRef.current.setMap(null);
        circleRef.current = null;
      }
    };
  }, [map, center, radius, fitBounds, fitBoundsPadding, rest]);

  return <></>;
};

export const Circle = memo(forwardRef(CircleBase));
