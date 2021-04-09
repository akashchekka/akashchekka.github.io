import { useContext, createContext } from "react";

export const RefContext = createContext(null);

export function useRefContext() {
  return useContext(RefContext);
}
