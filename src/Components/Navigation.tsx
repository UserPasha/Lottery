import React from 'react';
import {Link} from "react-router-dom";


const Navigation = () => {
    return (
        <div className={'NavigationWrapper'}>

            <div className={'NavigatioItem'}>
                <Link to={"/homepage"}>PLAY</Link>
            </div>

        </div>
    );
};

export default Navigation;