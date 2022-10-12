import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import LotteryApp from "../LotteryApp/LottertApp";
import PrintPage from "../PrintPage/PrintPage";

export const PATH = {
    MINI: "/mini-game",
    ORIGINAL: "/original-game",
    HOMEPAGE: "/homepage",
    PRINT: "/print",
    HOME:"/lottery",
    HOME2:""
}
export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.HOMEPAGE} element={<HomePage/>}/>
                <Route path={PATH.HOME} element={<HomePage/>}/>
                <Route path={PATH.HOME2} element={<HomePage/>}/>
                <Route path={PATH.MINI} element={<LotteryApp maxDigit={60}/>}/>
                <Route path={PATH.ORIGINAL} element={<LotteryApp maxDigit={90}/>}/>
                <Route path={PATH.PRINT} element={<PrintPage/>}/>
            </Routes>
        </>
    );
};
