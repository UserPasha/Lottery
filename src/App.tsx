import React from 'react';
import './App.css';
import LotteryApp from "./LottertApp";
import {Routes, Route, Link} from "react-router-dom";
import HomePage from "./Components/HomePage";
import PrintPage from "./Components/PrintPage";

export const PATH = {
    mini: "/mini-game",
    original: "/original-game",
    homepage: "/homepage",
    print: "/print"
}

function App() {
    return (
        <>
            <HomePage/>


        </>
    );
}

// add 404 paige
export default App;
