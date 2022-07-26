import React from 'react';
import './App.css';
import HomePage from "./Components/HomePage";
import {Route, Routes} from "react-router-dom";
import LotteryApp from "./LottertApp";
import PrintPage from "./Components/PrintPage";
import Navigation from "./Components/Navigation";


export const PATH = {
    mini: "/mini-game",
    original: "/original-game",
    homepage: "/homepage",
    print: "/print",
    home:""
}

function App() {
    return (<>
            {/*<Navigation/>*/}
            {/*<HomePage/>*/}
        <Routes>
            <Route path={PATH.homepage} element={<HomePage/>}/>
            <Route path={PATH.mini} element={<LotteryApp maxDigit={60}/>}/>
            <Route path={PATH.original} element={<LotteryApp maxDigit={90}/>}/>
            <Route path={PATH.print} element={<PrintPage/>}/>
            <Route path={PATH.home} element={<HomePage/>}/>
        </Routes>
        </>
    );
}

// add 404 paige
export default App;
