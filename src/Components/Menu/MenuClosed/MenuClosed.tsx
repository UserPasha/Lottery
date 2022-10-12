import React, {FC} from 'react';

type MenuClosedType = {
    toggler: ()=> void
}
const MenuClosed: FC<MenuClosedType> = ({toggler}) => {
    return (
        <div className={'menu'} onClick={toggler}>
            <div className={'menuItem'}></div>
            <div className={'menuItem'}></div>
            <div className={'menuItem'}></div>
        </div>
    );
};

export default MenuClosed;