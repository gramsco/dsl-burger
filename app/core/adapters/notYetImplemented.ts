export const ADAPTER_NOT_YET_IMPLEMENTED =
  (msg = 'ADAPTER NOT YET IMPLEMENTED') =>
  (_whatever: any): never => {
    throw new Error(msg);
  };