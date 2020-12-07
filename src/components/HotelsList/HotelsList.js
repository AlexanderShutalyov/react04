import React, {useContext} from 'react';
import {HotelListContext} from '../../context/HotelListContext/HotelListContext'
import {HotelListContextProvider} from '../../context/HotelListContext/HotelListContext'
import HotelItem from "../HotelItem/HotelItem";

const HotelsList = () => {
    const {hotels, setHotelsData} = useContext(HotelListContext);
    // console.log(hotels);
    return (
        <div>
            {/*{hotels && hotels.map((props, index)=> (<p key={index}>{props.roomLeft}</p>))}*/}
        {hotels && hotels.map((props, index)=> ( <HotelItem key={index} props={props}/>))}
            {/*<div>*/}

            {/*    <p>AAAAAA</p>*/}
            {/*    /!*<p>{hotels.result}</p>*!/*/}
            {/*</div>*/}
        </div>
    )
};

export default HotelsList;

