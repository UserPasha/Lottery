import React, {useState} from 'react';
import MenuClosed from "../MenuClosed/MenuClosed";
import MenuOpen from "../MenuOpen/MenuOpen";

type MenuTogglerType = {
    refreshGame: ()=> void
}

export const MenuToggler: React.FC<MenuTogglerType> = ({refreshGame}) => {
    const [lock, setLock] = useState<boolean>(true)

    const toggler = () => {
        setLock(!lock)
    }

    const handleRestart = ()=>{
        refreshGame()
    }
    return (lock
            ?
          <MenuClosed toggler={toggler}/>
            :
          <MenuOpen toggler={toggler} handleRestart={handleRestart}/>
    );
};

export default MenuToggler;