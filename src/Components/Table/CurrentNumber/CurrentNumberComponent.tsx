import React from 'react';
type CurrentNumberPropsType = {
    numberOfDigit: number
}
const CurrentNumberComponent = (Props: CurrentNumberPropsType) => {
    return (
        <div className={'currentNumber'}>
            {Props.numberOfDigit}
        </div>
    );
};

export default CurrentNumberComponent;

