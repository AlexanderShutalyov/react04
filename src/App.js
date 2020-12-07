import './App.css';
import React, {Component, useState, useEffect} from "react";
import MarkeredMap from "./components/MarkeredMap/MarkeredMap";
import HotelsList from "./components/HotelsList/HotelsList";
import {HotelListContextProvider} from "./context/HotelListContext/HotelListContext";

// Did you wrap <GoogleMap> component with withGoogleMap() HOC?

function App() {
    return (
        <React.Fragment>
            <div className="App">
                <div className="topContent">
                </div>
                <div className="leftContent">
                    <HotelListContextProvider>
                        <HotelsList/>
                    </HotelListContextProvider>
                </div>
                <div className="rightContent">
                    <MarkeredMap/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
