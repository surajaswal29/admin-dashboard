import React,{ useState, useEffect, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Geocode from "react-geocode";


// import axios from "axios";

const MapBox = ({locationData})=>{
    Geocode.setApiKey("AIzaSyDNDRUgfCH2X8NQ2bPJvL-tCWVOMDDT5og");
    Geocode.setLanguage("en");
    Geocode.setRegion("in");
    Geocode.setLocationType("ROOFTOP");

    // Geocode.enableDebug();


    // const [location, setLocation] = useState("Dehradun, Uttarakhand");

    const [coordinates, setCoordinates] = useState({
        lat:20.593684,
        lng:78.96288
    });

    const {isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDNDRUgfCH2X8NQ2bPJvL-tCWVOMDDT5og"
    });

    const center = useMemo(()=>(coordinates),[coordinates])

    useEffect(() => {

        // Get latitude & longitude from address.
        Geocode.fromAddress(locationData).then(
            (response) => {
            const { lat, lng } = response.results[0].geometry.location;

            // setting newly updated coordinates
            setCoordinates({
                lat:lat,
                lng:lng
            })

            },
            (error) => {
            console.error(error);
            }
        );      

    }, [locationData])
    

    return(
        <div className="map-wrapper mt-3">
            {
                !isLoaded?(
                    <p>loading...</p>
                ):(
                    <GoogleMap
                        mapContainerClassName="map-container"
                        center={center}
                        zoom={15}
                    >
                        <Marker position={coordinates} />
                    </GoogleMap>
                )
            }
        </div>
    )
}

export default MapBox