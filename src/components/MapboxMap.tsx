import React, { useState, useEffect } from "react";
import mapboxgl, { LngLatLike, Marker } from "mapbox-gl";
import { Box } from "@mui/material";
import { Geometry } from "geojson";
import { useTheme } from "@mui/material/styles";
import { RouteData, useMapContext } from "./MapContext";
import { useDevices } from "../../providers/DevicesProvider";
import center from "@turf/center";
import { BBox2d, LineString } from "@turf/helpers/dist/js/lib/geojson";
import bbox from "@turf/bbox";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1vcnRvbmkiLCJhIjoiY2xkczcyNHBuMW9sejN6cWV2dGl6bHE1aSJ9.tzzko4Wpw-wkg1hDQrW3hQ";

interface Props {
  paddingBottom: number;
  paddingLeft: number;
}

function MapboxMap({ paddingBottom, paddingLeft }: Props) {
  const mapContext = useMapContext();
  const devicesContext = useDevices();
  const theme = useTheme();

  const [map, setMap] = useState<mapboxgl.Map>();
  const [lng, setLng] = useState(
    devicesContext.geolocationData?.coords.longitude ?? 144.94787
  );
  const [lat, setLat] = useState(
    devicesContext.geolocationData?.coords.latitude ?? -37.80511
  );
  const [zoom, setZoom] = useState(15);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [layerIds, setLayerIds] = useState<string[]>([]);
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: "map-container",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      })
    );
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.on("load", () => {
      setIsMapLoaded(true);
    });
    map.on("move", () => {
      setLng(Number(map.getCenter().lng.toFixed(4)));
      setLat(Number(map.getCenter().lat.toFixed(4)));
      setZoom(Number(map.getZoom().toFixed(2)));
    });
  }, [map]);

  const fitToBounds = (routeData: RouteData[]) => {
    if (!map) {
      return;
    }

    const bounds = bbox({
      type: "GeometryCollection",
      geometries: routeData.map((route) => route.geometry as LineString),
    }) as BBox2d;

    map.fitBounds(bounds, { padding: 30 });
  };

  useEffect(() => {
    if (!map || !isMapLoaded) {
      return;
    }

    if (mapContext?.routeData?.length) {
      // Paint routes if they exist in context
      mapContext.routeData.map((route, index) => {
        const routeId = `route-${index}`;
        const color =
          index % 2 === 0
            ? theme.palette.primary.light
            : theme.palette.secondary.light;
        addRoute(routeId, route.geometry as Geometry, color);
        // We need to keep track of the layer ids rendered for cleanup
        setLayerIds((prev) => {
          prev.push(routeId);
          return Array.from(prev);
        });
        // Add a marker for the start and end points
        route.waypoints.map((wp, index) => addMarker(wp, color));
      });

      // Center map on routes bounding box
      fitToBounds(mapContext.routeData);
    } else {
      // Remove existing routes if there is nothing in the context
      layerIds.map((id) => {
        if (map.getSource(id)) {
          map.removeLayer(id);
          map.removeSource(id);
        }
      });
      // Remove all markers from map
      markers.forEach((marker) => marker.remove());
      // Reset rendered layers
      setLayerIds([]);
    }
  }, [isMapLoaded, mapContext]);

  useEffect(() => {
    if (map) {
      map.resize();
      if (mapContext?.routeData?.length) {
        fitToBounds(mapContext.routeData);
      }
    }
  }, [paddingLeft, paddingBottom, mapContext?.routeData]);

  const addRoute = (id: string, coords: Geometry, color: string) => {
    if (!map) {
      return;
    }

    map.addLayer({
      id,
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: coords,
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": color,
        "line-width": 5,
        "line-opacity": 1,
      },
    });
  };

  const addMarker = (location: LngLatLike, color: string) => {
    if (!map) {
      return;
    }

    const marker = new mapboxgl.Marker({ scale: 1, color })
      .setLngLat(location)
      .addTo(map);

    setMarkers((prev) => {
      prev.push(marker);
      return Array.from(prev);
    });
  };

  return (
    <Box style={{ width: "100%", height: "100%", paddingBottom, paddingLeft }}>
      <Box
        style={{ width: "100%", height: "100%" }}
        id={"map-container"}
        className="map-container"
      />
    </Box>
  );
}

export default MapboxMap;
