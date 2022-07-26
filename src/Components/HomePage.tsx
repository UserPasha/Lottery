import React from 'react';
import {Link} from "react-router-dom";




const HomePage = () => {



    return (<>
            <div className={"HomePageMenuWrapper"}>

                <div className={'GameWrapper'}>
                    <Link to={"/mini-game"}>FAST GAME</Link>
                </div>
                <div className={'GameWrapper'}>

                    <Link to={"/original-game"}>ORIGINAL</Link>
                </div>

            </div>
        </>
    );
};

export default HomePage;