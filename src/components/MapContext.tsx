import { createContext, ReactNode, useContext, useState } from "react";
import { GooglePlace } from "./TripDetails";
import { fetchRouteData } from "../utils/fetchRouteData";
import { LngLatLike } from "mapbox-gl";

interface MapContext {
  isLoading: boolean;
  sourcePlace: GooglePlace | undefined;
  setSourcePlace: (place: GooglePlace) => void;
  destPlace: GooglePlace | undefined;
  setDestPlace: (place: GooglePlace) => void;
  routeData: RouteData | undefined;
  showRoutes: () => void;
  clearRoutes: () => void;
}

export interface RouteData {
  totalDistance: string;
  totalTime: string;
  waypoints: LngLatLike[];
  routes: {
    id: string;
    geometry: {
      type: "LineString";
      coordinates: LngLatLike[];
    };
  }[];
}

const MapContext = createContext<MapContext | null>(null);

export const useMapContext = () => useContext(MapContext);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sourcePlace, setSourcePlace] = useState<GooglePlace | undefined>();
  const [destPlace, setDestPlace] = useState<GooglePlace | undefined>();
  const [routeData, setRouteData] = useState<RouteData | undefined>();

  const showRoutes = async () => {
    setIsLoading(true);

    const routeData = await fetchRouteData(sourcePlace!, destPlace!);

    setRouteData(routeData);
    setIsLoading(false);
  };

  const clearRoutes = () => {
    setRouteData(undefined);
  };

  return (
    <MapContext.Provider
      value={{
        isLoading,
        sourcePlace,
        setSourcePlace,
        destPlace,
        setDestPlace,
        routeData,
        showRoutes,
        clearRoutes,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
