import React from 'react';
import './App.css';
import LotteryApp from "./LottertApp";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";

export const PATH ={
    mini: "/mini-game",
    original: "/original-game",
    homepage: "/homepage"
}

function App() {
    return (
        <>
            <HomePage/>

            <div>
                <Routes>
                    <Route path={PATH.homepage} element={<HomePage/>}/>
                    <Route path={PATH.mini} element={<LotteryApp maxDigit={60}/>}/>
                    <Route path={PATH.original} element={<LotteryApp maxDigit={90}/>}/>
                </Routes>
            </div>

        </>
    );
}
// add 404 paige
export default App;
