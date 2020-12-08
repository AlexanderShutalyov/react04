import React, {useContext} from 'react';
import './HotelItem.css';
import HotelItemFeatures from "../HotelItemFeature/HotelItemFeature";

const HotelItem = ( {props} ) => {

    const features = props.ratePlan.features;

    return (
        <div className="HotelItemClass">
            <div className="thumbnail">
                <img src={props.thumbnailUrl} width="100" height="100"/>
            </div>
            <div className="HotelItemContent">
                <p>{props.name}</p>
                <p>{props.address.countryName}  {props.address.locality} {props.address.region} {props.address.streetAddress}</p>
                <p>{props.ratePlan.price.current} {props.ratePlan.price.info}</p>
                <p>{props.guestReviews.badgeText} {props.guestReviews.rating}</p>
                <p>
                    {Object.keys(features)
                        .filter(key => features[key] === true )
                        .map((props, index) => {
                            return (<HotelItemFeatures props={props} key={index}/>)
                        })}
                </p>
            </div>
        </div>
    )
};

export default HotelItem
;

