import React from 'react';
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div className={'NavigationWrapper'}>
            <div className={'NavigatioItem'}>
                <Link to={"/homepage"}>PLAY</Link>
            </div>
            {/*<div className={'NavigatioItem'} >*/}
            {/*    <Link to={"/mini-game"}></Link>*/}
            {/*</div>*/}
            {/*<div className={'NavigatioItem'}>*/}
            {/*    <Link to={"/original-game"}></Link>*/}
            {/*</div>*/}
            {/*<div className={'NavigatioItem'}>*/}
            {/*    <Link to={"/print"} target="_blank"></Link>*/}
            {/*</div>*/}

        </div>
    );
};

export default Navigation;