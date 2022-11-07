import React from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import Map, {GeolocateControl, NavigationControl, ScaleControl} from 'react-map-gl'
import mapLibre from 'maplibre-gl'
// import mapLib from "mapbox-gl";

export default function MapFunction() {

    const [points] = React.useState([
        { lat: 35.332, lng: -106.652 },
        { lat: 35.339, lng: -106.656 },
        { lat: 35.40, lng: -106.666 },
        { lat: 35.23, lng: -106.4444 }
    ])

    return (
        <>
                <Map
                    mapLib={mapLibre}
                    initialViewState={{
                        latitude: 35.33,
                        longitude: -106.65,
                        zoom: 9
                    }}
                    style={{height: '100vw'}}
                    mapStyle="https://api.maptiler.com/maps/streets/style.json?key=D4b2ldjY7geFrPnuBPU8"
                >
                    {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}

                <GeolocateControl position="bottom-left"/>
                <NavigationControl position="bottom-left"/>
                <ScaleControl/>

            </Map>
            </>
    )
}