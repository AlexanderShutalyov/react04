import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useContext} from "react";
import {HotelListContext} from "../../context/HotelListContext/HotelListContext";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const {hotels, setHotelsData} = useContext(HotelListContext);
    const defaultCenter = hotels.length > 0 ? {lat: hotels[0].coordinate.lat, lng: hotels[0].coordinate.lon} : {lat: 40.669612, lng: -73.811325};

    return <GoogleMap
            defaultZoom={8}
            defaultCenter={ defaultCenter }
        >
            {props.isMarkerShown && hotels.map((props, index) => (<Marker key={index} position={{ lat: props.coordinate.lat, lng: props.coordinate.lon }} />))}
        </GoogleMap>
    }
));

export default MyMapComponent;