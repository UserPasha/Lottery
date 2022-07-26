import React from 'react';
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div className={'NavigationWrapper'}>
            <div className={'NavigatioItem'}>
                <Link to={"/homepage"}>HOMEPAGE</Link>
            </div>
            <div className={'NavigatioItem'} >
                <Link to={"/mini-game"}>MINI</Link>
            </div>
            <div className={'NavigatioItem'}>
                <Link to={"/original-game"}>ORIGINAL</Link>
            </div>
            <div className={'NavigatioItem'}>
                <Link to={"/print"} target="_blank">PRINT</Link>
            </div>

        </div>
    );
};

export default Navigation;