import React, { createElement as e, useMemo, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../hooks";
import { MapContextProvider } from "../context";
import { MapProps } from "./types";

const INITIAL_LEVEL = 15;

/**
 * Rendering a routo map
 *
 * This component will take className as a prop, so that you can style this component using any styling libraries.(e.g. css, styled-components, etc.)
 *
 */
export const Map = ({
  as = "div",
  children,
  center = { lat: 37.507009, lng: 127.0586339 },
  boundsPath,
  boundsPadding,
  zoom = INITIAL_LEVEL,
  className,
  style,
  ...rest
}: MapProps) => {
  const centerRef = useRef(new routo.maps.LatLng(center.lat, center.lng));
  const ref = useRef<HTMLDivElement>(null);
  const initializing = useRef(false);

  const [map, setMap] = useState<routo.maps.Map | null>(null);

  const bounds = useMemo(() => {
    const bounds = new routo.maps.LatLngBounds();

    boundsPath?.forEach((latlng) => {
      bounds.extend(new routo.maps.LatLng(latlng.lat, latlng.lng));
    });

    return bounds;
  }, [boundsPath]);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current || initializing.current) return;
    initializing.current = true;

    const map = new routo.maps.Map(ref.current, {
      center: centerRef.current,
      zoom,
      ...rest,
    });

    setMap(map);
    if (boundsPath) {
      map.fitBounds(bounds, boundsPadding);
    }
    return () => {
      if (initializing.current) {
        initializing.current = false;
        return;
      }
    };
  }, []);

  const memoizedMap = useMemo(() => map, [map]);

  // useEventHandlers(map, eventHandlers);

  return e(
    as,
    { className, style, ref },
    <MapContextProvider value={memoizedMap}>
      {map && children}
    </MapContextProvider>,
  );
};
