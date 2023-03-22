import { createContext, ReactNode, useContext, useState } from "react";
import { Geometry } from "geojson";

interface MapContext {
  isLoading: boolean;
  routeDetails: RouteDetails[];
  addRoutes: (routes: RouteDetails[]) => void;
  clearRoutes: () => void;
}

interface RouteDetails {
  routes: {
    duration: number;
    distance: number;
    geometry: Geometry;
  }[];
  waypoints: {
    distance: number;
    location: [number, number];
  }[];
}

const MapContext = createContext<MapContext | null>(null);

export const useMapContext = () => useContext(MapContext);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [routeDetails, setRouteDetails] = useState<RouteDetails[]>([]);

  const addRoutes = (routes: RouteDetails[]) => {
    setIsLoading(true);

    setTimeout(() => {
      setRouteDetails(routes);
      setIsLoading(false);
    }, 1500);
  };

  const clearRoutes = () => {
    setRouteDetails([]);
  };

  return (
    <MapContext.Provider
      value={{
        isLoading,
        routeDetails,
        addRoutes,
        clearRoutes,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};