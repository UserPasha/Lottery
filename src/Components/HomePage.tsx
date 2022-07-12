import React from 'react';
import {Link} from "react-router-dom";

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

        </>
    );
};

export default HomePage;