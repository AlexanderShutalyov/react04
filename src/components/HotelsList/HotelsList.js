import React, {useContext} from 'react';
import {HotelListContext} from '../../context/HotelListContext/HotelListContext'
import {HotelListContextProvider} from '../../context/HotelListContext/HotelListContext'
import HotelItem from "../HotelItem/HotelItem";

const HotelsList = () => {
    const {hotels, setHotelsData} = useContext(HotelListContext);
    return (
        <div>
            {hotels && hotels.map((props, index) => (<HotelItem key={index} props={props}/>))}
        </div>
    )
};

export default HotelsList;

