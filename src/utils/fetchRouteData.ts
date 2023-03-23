import { GooglePlace } from "../components/TripDetails";
import { LngLatLike } from "mapbox-gl";
import { mapRouteData } from "./mapRouteDetails";
import { RouteData } from "../components/MapContext";

export async function fetchRouteData(
  sourcePlace: GooglePlace,
  destPlace: GooglePlace
): Promise<RouteData> {
  const response = await fetch(
    "https://fc-qa-master.azurewebsites.net/api/RoutePlanner",
    {
      method: "POST",
      body: JSON.stringify({
        json: true,
        Stops: [
          [
            sourcePlace.geometry.location.lng(),
            sourcePlace.geometry.location.lat(),
          ],
          [
            destPlace.geometry.location.lng(),
            destPlace.geometry.location.lat(),
          ],
        ],
        Restrictions: {
          "Avoid Ferries": false,
          "Avoid Limited Access Roads": false,
          "Avoid Private Roads": true,
          "Avoid Toll Roads": false,
          "Avoid Unpaved Roads": true,
          Oneway: true,
          "Through Traffic Prohibited": true,
        },
        HeavyVehicleNetworkWKIDs: [63740002],
      }),
      headers: { "Content-Type": "application/json" },
    }
  );

  return mapRouteData((await response.json()) as NHVRRouteData);
}

export interface NHVRRouteData {
  directions: Directions;
  Stops: LngLatLike[];
  version: number;
  RM_SEGMENTS: RmSegment[];
}

interface RmSegment {
  "RM CODE": string;
  "NA ANALYSIS": NaAnalysis[];
}

interface NaAnalysis {
  STREETNAME: string;
  SEGMENTS: string;
  GEOMETRY: LngLatLike[][];
}

interface Directions {
  directionList: any[];
  totalDistance: string;
  totalTime: string;
}
