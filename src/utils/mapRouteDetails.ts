import { NHVRRouteData } from "./fetchRouteData";
import { RouteData } from "../components/MapContext";

export function mapRouteData(routeData: NHVRRouteData): RouteData {
  const { directions, RM_SEGMENTS, Stops } = routeData;

  return {
    id: `${RM_SEGMENTS[0]["RM CODE"]}-${RM_SEGMENTS[RM_SEGMENTS.length]}`,
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
