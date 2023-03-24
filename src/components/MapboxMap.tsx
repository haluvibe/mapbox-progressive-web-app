import React, { useState, useEffect } from "react";
import mapboxgl, { LngLatLike, Marker } from "mapbox-gl";
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

    if (mapContext?.routeData?.length) {
      // Paint routes if they exist in context
      mapContext.routeData.map((route, index) => {
        addRoute(
          route.id,
          route.geometry as Geometry,
          index % 2 === 0
            ? theme.palette.primary.light
            : theme.palette.secondary.light
        );
        // We need to keep track of the layer ids rendered for cleanup
        setLayerIds((prev) => {
          prev.push(route.id);
          return Array.from(prev);
        });
        // Add a marker for the start and end points
        route.waypoints.map((wp) => addMarker(wp));
      });

      // Center map on first route start position
      map.setCenter(mapContext.routeData[0].waypoints[0]);
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

    const marker = new mapboxgl.Marker({ scale: 0.5 })
      .setLngLat(location)
      .addTo(map);

    setMarkers((prev) => {
      prev.push(marker);
      return Array.from(prev);
    });
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
