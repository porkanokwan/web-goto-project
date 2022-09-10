import { createContext, useContext } from "react";

const PlaceContext = createContext();

export default function PlaceContextProvider({ children }) {
  return <PlaceContext.Provider>{children}</PlaceContext.Provider>;
}

const usePlace = () => {
  const ctx = useContext(PlaceContext);
  return ctx;
};

export { PlaceContext, usePlace };
