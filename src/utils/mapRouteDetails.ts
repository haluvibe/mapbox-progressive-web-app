import { NHVRRouteData } from "./fetchRouteData";
import { RouteData } from "../components/MapContext";

export function mapRouteData(routeData: NHVRRouteData): RouteData {
  return {
    totalDistance: Number(routeData.directions.totalDistance).toFixed(1),
    totalTime: Number(routeData.directions.totalTime).toFixed(1),
    waypoints: routeData.Stops,
    routes: routeData.RM_SEGMENTS.map((segment, index) => ({
      id: `SEG_${index}}_${segment["RM CODE"]}`,
      geometry: {
        type: "LineString",
        coordinates: segment["NA ANALYSIS"].flatMap((na) => na.GEOMETRY.flat()),
      },
    })),
  };
}
