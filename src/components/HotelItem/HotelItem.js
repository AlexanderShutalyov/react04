import React, {useContext} from 'react';
import {HotelListContext} from '../../context/HotelListContext/HotelListContext'

const HotelItem = ( {props} ) => {
    console.log(props);
    return (
        <div>
            {props.name}
        </div>
    )
};

export default HotelItem
;

