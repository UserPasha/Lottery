import React from 'react';
import './App.css';
import HomePage from "./Components/HomePage";
import {Route, Routes} from "react-router-dom";
import LotteryApp from "./LottertApp";
import PrintPage from "./Components/PrintPage";

export const PATH = {
    mini: "/mini-game",
    original: "/original-game",
    homepage: "/homepage",
    print: "/print",
    home:"/lottery",
    home2:""
}

function App() {
    return (<>
        <Routes>
            <Route path={PATH.homepage} element={<HomePage/>}/>
            <Route path={PATH.home} element={<HomePage/>}/>
            <Route path={PATH.home2} element={<HomePage/>}/>
            <Route path={PATH.mini} element={<LotteryApp maxDigit={60}/>}/>
            <Route path={PATH.original} element={<LotteryApp maxDigit={90}/>}/>
            <Route path={PATH.print} element={<PrintPage/>}/>
        </Routes>
        </>
    );
}

export default App;
