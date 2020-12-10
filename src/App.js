import './App.css';
import React, {Component, useState, useEffect} from "react";
import MarkeredMap from "./components/MarkeredMap/MarkeredMap";
import HotelsList from "./components/HotelsList/HotelsList";
import {HotelListContextProvider} from "./context/HotelListContext/HotelListContext";

function App() {
    return (
        <React.Fragment>
            <HotelListContextProvider>
                <div>
                    <div className="App">
                        <div className="topContent">
                        </div>
                        <div className="leftContent">
                            <HotelsList/>
                        </div>
                        <div className="rightContent">
                            <MarkeredMap/>
                        </div>
                    </div>
                </div>
            </HotelListContextProvider>
        </React.Fragment>
    );
}

export default App;
