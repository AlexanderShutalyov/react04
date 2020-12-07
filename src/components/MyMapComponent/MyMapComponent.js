import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";


const MyMapComponent = withScriptjs(withGoogleMap((props) => {
        console.log(props)
       return <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
            {props.isMarkerShown && props.geo.map((props, index) => (<Marker key={index} position={{ lat: props.lat, lng: props.lng }} />))}
        </GoogleMap>
    }
));

export default MyMapComponent;