import React, {FC} from 'react';
import {Link} from "react-router-dom";

type menuOpenType = {
    toggler: ()=> void
    handleRestart: ()=> void
}
const MenuOpen:FC<menuOpenType> = ({toggler, handleRestart}) => {
    return (
        <div className={'OpenedMenu'} onClick={toggler}>
            <div className={'CircleMenu'}>
                <div className={'menuItemInside'}></div>
                <div className={'menuItemInside'}></div>
                <div className={'menuItemInside'}></div>
            </div>

            <div className={'OpenMenuWrapper'}>
                <div className={'OpenMenuItem'} onClick={handleRestart}>
                    RESTART
                </div>

                <div className={'OpenMenuItem'}>
                    <Link to={"/homepage"}>EXIT</Link>
                </div>

                <div className={'OpenMenuItem'} onClick={toggler}>
                    BACK
                </div>
            </div>

        </div>
    );
};

export default MenuOpen;