export interface InitParams {
  appKey: string;
  onLoad?: VoidFunction;
  onError?: VoidFunction;
}

export interface InitResult {
  isLoaded: boolean;
  isError: boolean;
}

export type UseRoutoMapInit = (params: InitParams) => InitResult;
