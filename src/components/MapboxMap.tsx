import React, { useState, useEffect } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import { Box } from "@mui/material";
import { Geometry } from "geojson";
import { useTheme } from "@mui/material/styles";
import { useMapContext } from "./MapContext";
import { useDevices } from "../../providers/DevicesProvider";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1vcnRvbmkiLCJhIjoiY2xkczcyNHBuMW9sejN6cWV2dGl6bHE1aSJ9.tzzko4Wpw-wkg1hDQrW3hQ";

function MapboxMap() {
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
  const [zoom, setZoom] = useState(6);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [layerIds, setLayerIds] = useState<string[]>([]);

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

    map.on("load", () => setIsMapLoaded(true));
    map.on("move", () => {
      setLng(Number(map.getCenter().lng.toFixed(4)));
      setLat(Number(map.getCenter().lat.toFixed(4)));
      setZoom(Number(map.getZoom().toFixed(2)));
    });
  }, [map]);

  useEffect(() => {
    if (!map || !isMapLoaded) {
      return;
    }

    if (mapContext?.routeDetails.length) {
      // Paint routes if they exist in context
      setLayerIds(mapContext.routeDetails.map((_, index) => `${index + 1}`));
      mapContext.routeDetails.map(({ routes, waypoints }, index) => {
        const routeId = index + 1;
        addRoute(
          routeId.toString(),
          routes[0].geometry as Geometry,
          routeId % 2 === 0
            ? theme.palette.primary.light
            : theme.palette.secondary.light
        );
        // We need to keep track of the layer ids painted for cleanup
        addMarker(waypoints[0].location);
      });
    } else {
      // Remove existing routes if there is nothing in the context
      layerIds.map((id) => {
        if (map.getSource(id)) {
          map.removeLayer(id);
          map.removeSource(id);
        }
      });
      // We need to keep track of the layer ids painted for cleanup
      setLayerIds([]);
    }
  }, [isMapLoaded, mapContext]);

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
        "line-width": 3,
        "line-opacity": 1,
      },
    });
  };

  const addMarker = (location: LngLatLike) => {
    if (!map) {
      return;
    }

    new mapboxgl.Marker({ scale: 0.5 }).setLngLat(location).addTo(map);
  };

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      id={"map-container"}
      className="map-container"
    />
  );
}

export default MapboxMap;
