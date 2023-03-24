import { createContext, ReactNode, useContext, useState } from "react";
import { GooglePlace } from "./TripDetails";
import { fetchRouteData } from "../utils/fetchRouteData";
import { LngLatLike } from "mapbox-gl";
import { mapRouteData } from "../utils/mapRouteDetails";
import { mockRouteData } from "../data/routeData";

interface MapContext {
  isLoading: boolean;
  sourcePlace: GooglePlace | undefined;
  setSourcePlace: (place: GooglePlace) => void;
  destPlace: GooglePlace | undefined;
  setDestPlace: (place: GooglePlace) => void;
  routeData: RouteData[] | undefined;
  showRoutes: () => void;
  clearRoutes: () => void;
  loadMockAddresses: () => void;
  isMockData: boolean;
}

export interface RouteData {
  totalDistance: string;
  totalTime: string;
  waypoints: LngLatLike[];
  geometry: {
    type: "LineString";
    coordinates: LngLatLike[];
  };
}

const MapContext = createContext<MapContext | null>(null);

export const useMapContext = () => useContext(MapContext);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sourcePlace, setSourcePlace] = useState<GooglePlace | undefined>();
  const [destPlace, setDestPlace] = useState<GooglePlace | undefined>();
  const [routeData, setRouteData] = useState<RouteData[]>([]);
  const [isMockData, setIsMockData] = useState(false);

  const showRoutes = async () => {
    setIsMockData(false);
    setIsLoading(true);

    if (
      sourcePlace?.formatted_address ===
      "3 Lardelli Dr, Ryde NSW 2112, Australia"
    ) {
      setTimeout(() => {
        setRouteData([
          mapRouteData(mockRouteData[0]),
          mapRouteData(mockRouteData[1]),
        ]);
        setIsLoading(false);
      }, 1500);
    } else {
      const newRouteData = await Promise.all([
        fetchRouteData(sourcePlace!, destPlace!, 63740002),
        fetchRouteData(sourcePlace!, destPlace!),
      ]);

      setRouteData(newRouteData);
      setIsLoading(false);
    }
  };

  const clearRoutes = () => {
    setSourcePlace(undefined);
    setDestPlace(undefined);
    setRouteData([]);
  };

  const loadMockAddresses = () => {
    setSourcePlace({
      formatted_address: "3 Lardelli Dr, Ryde NSW 2112, Australia",
      geometry: {
        location: {
          lat: () => -33.8179513,
          lng: () => 151.1120396,
        },
      },
    });
    setDestPlace({
      formatted_address: "Victoria Rd, West Ryde NSW 2114, Australia",
      geometry: {
        location: {
          lat: () => -33.8071556,
          lng: () => 151.0845597,
        },
      },
    });
    setIsMockData(true);
  };

  return (
    <MapContext.Provider
      value={{
        isMockData,
        isLoading,
        sourcePlace,
        setSourcePlace,
        destPlace,
        setDestPlace,
        routeData,
        showRoutes,
        clearRoutes,
        loadMockAddresses,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
