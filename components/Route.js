import React, { useState, useCallback, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


import routeOne from '../data/complete-route-1.json'
import routeTwo from '../data/complete-route-2.json'

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1vcnRvbmkiLCJhIjoiY2xkczcyNHBuMW9sejN6cWV2dGl6bHE1aSJ9.tzzko4Wpw-wkg1hDQrW3hQ';

function Route() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(144.947870);
    const [lat, setLat] = useState(-37.805110);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    const addRoute = (id,coords,color) => {
        // check if the route is already loaded
        if (map.current.getSource(id)) {
            map.current.removeLayer(id)
            map.current.removeSource(id)
        } else{
            map.current.addLayer({
                "id": id,
                "type": "line",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "Feature",
                        "properties": {},
                        "geometry": coords
                    }
                },
                "layout": {
                    "line-join": "round",
                    "line-cap": "round"
                },
                "paint": {
                    "line-color": color,
                    "line-width": 2,
                    "line-opacity": 0.8
                }
            });
        };
    }

    const addRouteOnClick= (e) => {
        e.preventDefault();
        addRoute("route",routeOne.routes[0].geometry,"#1377bb")
        addMarker(routeOne.waypoints[0].location)
        addMarker(routeOne.waypoints[1].location)
        let distance = routeOne.routes[0].distance*0.001;
        let duration = routeOne.routes[0].duration/60;
        document.getElementById('route1-info').innerHTML = ' Route option 1 <br/> Distance: ' + distance.toFixed(2) + ' km<br>Duration: ' + duration.toFixed(2) + ' minutes';
        addRoute("route2",routeTwo.routes[0].geometry,"#0f5e25")
        distance = routeTwo.routes[0].distance*0.001;
        duration = routeTwo.routes[0].duration/60;
        document.getElementById('route2-info').innerHTML = ' Route option 2 <br/> Distance: ' + distance.toFixed(2) + ' km<br>Duration: ' + duration.toFixed(2) + ' minutes';
    }

    const addMarker = (location) => {
        const marker1 = new mapboxgl.Marker({scale: 0.5})
            .setLngLat(location)
        marker1.addTo(map.current);
    }

    return (
        <div>
            <div className='info-box'>
                <p id='route1-info'></p>
                <p id='route2-info'></p>
                <div id='calculateRoute'>
                    <button onClick={addRouteOnClick}>  Show Routes  </button>
                </div>
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Route;