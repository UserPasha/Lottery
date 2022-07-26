import React, {useState} from 'react';
import {Link} from "react-router-dom";


type MenuToglerType = {
    refreshGame: ()=> void
}
export const MenuToggler: React.FC<MenuToglerType> = ({refreshGame}) => {
    const [lock, setLock] = useState<boolean>(true)
    const toggler = () => {
        setLock(!lock)
    }

    const handleRestart = ()=>{
        refreshGame()
    }
    return (lock ?
            (<div className={'menu'} onClick={toggler}>
                <div className={'menuItem'}></div>
                <div className={'menuItem'}></div>
                <div className={'menuItem'}></div>
            </div>)
            :
            (<div className={'OpenedMenu'} onClick={toggler}>
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

            </div>)

    );
};

export default MenuToggler;