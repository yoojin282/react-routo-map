import { useState } from "react";
import { InitParams, InitResult, UseRoutoMapInit } from "./types";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";
import { isClientSide, isFunction } from "../utils";

export const SCRIPT_ID = "react-routo-map";

/**
 * Load routo map script with provided client id.
 *
 * `Map` component will automatically load script. But, if you want to load routo map script in advance, you can use this hook.
 *
 * @param onLoad - This function will triggered when loading script finished. If 'onLoad' changes too often, wrap that definition in useCallback
 * @param onError - This function will triggered when loading script failed. If 'onError' changes too often, wrap that definition in useCallback
 */
export const useRoutoMapInit: UseRoutoMapInit = ({
  appKey,
  onLoad,
  onError,
}) => {
  const [{ isLoaded, isError }, setInitResult] = useState<InitResult>({
    isLoaded: false,
    isError: false,
  });

  useIsomorphicLayoutEffect(() => {
    if (!isClientSide) {
      setInitResult({ isLoaded: false, isError: false });
      return;
    }

    // Remove existing script if it exists
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      existingScript.remove();
    }

    const initRoutoMapScript = async () => {
      const scriptInitResult = new Promise<InitResult>((resolve, reject) => {
        const script = createRoutoMapScriptByClientId({
          appKey,
        });
        insertRoutoMapScriptIntoHead(script);

        script.addEventListener("load", function () {
          console.info("react-routo-map is initialized ");
          resolve({ isLoaded: true, isError: false });
        });

        script.addEventListener("error", function () {
          console.warn("Failed to initialize react-routo-map.");
          document.getElementById(SCRIPT_ID)?.remove();
          reject({ isLoaded: false, isError: true });
        });
      });

      const result = await scriptInitResult;
      setInitResult(result);
    };

    initRoutoMapScript();
  }, [appKey]);

  useIsomorphicLayoutEffect(() => {
    if (onLoad && isFunction(onLoad) && isLoaded) {
      onLoad();
    }
    if (onError && isFunction(onError) && isError) {
      onError();
    }
  }, [isLoaded, isError, onLoad, onError]);

  return { isLoaded, isError };
};

const createRoutoMapScriptByClientId = ({
  appKey,
}: Pick<InitParams, "appKey">) => {
  const script = document.createElement("script");
  let paramsString = `key=${appKey}`;

  script.id = SCRIPT_ID;
  script.type = "text/javascript";
  script.src = `https://api.routo.com/v2/maps/map?${paramsString}`;

  return script;
};

const insertRoutoMapScriptIntoHead = (script: HTMLScriptElement) => {
  const { head } = document;
  head.insertBefore(script, head.firstChild);
};
