export interface InitParams {
  appKey: string;
  submodules?: Submodule[];
  onLoad?: VoidFunction;
  onError?: VoidFunction;
}

export interface InitResult {
  isLoaded: boolean;
  isError: boolean;
}

export type UseRoutoMapInit = (params: InitParams) => InitResult;

export type Submodule = "data" | "parking" | "custom";
