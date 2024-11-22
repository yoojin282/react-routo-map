import React, { createElement as e, useMemo, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../hooks";
import { MapContextProvider } from "../context";

const INITIAL_LEVEL = 15;

/**
 * Rendering a naver map
 *
 * This component will take className as a prop, so that you can style this component using any styling libraries.(e.g. css, styled-components, etc.)
 *
 */
export const Map = ({
  as = "div",
  children,
  center = { latitude: 37.566535, longitude: 126.977969 },
  zoom = INITIAL_LEVEL,
  className,
  style,
  ...rest
}: any) => {
  const { latitude, longitude } = center;

  const centerRef = useRef(new routo.maps.LatLng(latitude, longitude));
  const ref = useRef<HTMLDivElement>(null);
  const initializing = useRef(false);

  const [map, setMap] = useState<routo.maps.Map | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current || initializing.current) return;
    initializing.current = true;

    const map = new routo.maps.Map(ref.current, {
      center: centerRef.current,
      zoom,
      ...rest,
    });

    // const listener = map.addListener("init", () => setInit(true));
    setMap(map);

    return () => {
      if (initializing.current) {
        initializing.current = false;
        return;
      }
      // map.removeListener(listener);
      // map.destroy();
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
