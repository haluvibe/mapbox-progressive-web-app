import { NHVRRouteData } from "./fetchRouteData";
import { RouteData } from "../components/MapContext";

export function mapRouteData(routeData: NHVRRouteData): RouteData {
  const { directions, RM_SEGMENTS, Stops } = routeData;

  return {
    totalDistance: Number(directions.totalDistance).toFixed(1),
    totalTime: Number(directions.totalTime).toFixed(1),
    waypoints: Stops,
    geometry: {
      type: "LineString",
      coordinates: RM_SEGMENTS.flatMap((segment) =>
        segment["NA ANALYSIS"].flatMap((na) => na.GEOMETRY.flat())
      ),
    },
  };
}
