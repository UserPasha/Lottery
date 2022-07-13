import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import LotteryApp from "../LottertApp";
import {PATH} from "../App";

const HomePage = () => {
    return (<>
            <div>
                WELCOME!
            </div>
            <div>
                <Link to={"/homepage"}>HOMEPAGE</Link>
            </div>
            <div>
                <Link to={"/mini-game"}>MINI</Link>
            </div>
            <div>
                <Link to={"/original-game"}>ORIGINAL</Link>
            </div>
            <Routes>
              <Route path={PATH.homepage} element={<HomePage/>}/>
             <Route path={PATH.mini} element={<LotteryApp maxDigit={60}/>}/>
             <Route path={PATH.original} element={<LotteryApp maxDigit={90}/>}/>
            </Routes>

        </>
    );
};

export default HomePage;