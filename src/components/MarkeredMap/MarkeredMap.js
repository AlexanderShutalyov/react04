import React from 'react';
import MyMapComponent from "../MyMapComponent/MyMapComponent";


const MarkeredMap = () => {
    let geo = [
        {
            lat: -34.397,
            lng: 150.644
        },
        {
            lat: -34.290,
            lng: 151.244
        }
    ];
    let isMarkerShown = true;
    return (
        <div>
            <MyMapComponent
                isMarkerShown={isMarkerShown}
                geo={geo}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `500px`, width: '800px'}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        </div>
    )
};

export default MarkeredMap;