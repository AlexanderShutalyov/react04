import React, { useState, useEffect, useMemo } from 'react';

export const HotelListContext = React.createContext([]);

export const HotelListContextProvider = ({ children }) => {
    const [hotels, setHotelsData] = useState([]);

    useEffect(() => {
        fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
            "destinationId": "1506246",
            "pageNumber": "1",
            "checkIn": "2020-12-10",
            "checkOut": "2020-12-25",
            "pageSize": "25",
            "adults1": "1",
            "currency": "USD",
            "locale": "en_US",
            "sortOrder": "PRICE"
        })}`, {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "useQueryString": true
            }
        })

            .then(data => data.json())
            .then(json => setHotelsData(json.data.body.searchResults.results))
            // .then(json => console.log(json))
            .catch((error) => console.log(error))
    }, [])
    return (
//        {/*<HotelListContext.Provider value={{ hotels: hotels, setHotelsData: setHotelsData }}>*/}
        <HotelListContext.Provider value={{ hotels: hotels, setHotelsData: setHotelsData }}>
            { children }
            {/*{ useMemo(() => (children), [users]) }*/}
        </HotelListContext.Provider>
    )
}