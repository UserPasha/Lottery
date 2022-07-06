import React from 'react';

type GenerateButtonPropsType = {
    Generating: ()=> void
}
const GenerateButton = (Props: GenerateButtonPropsType) => {
    return (
        <div className={'generateButton'}>
            <button onClick={Props.Generating}>GENERATE</button>
        </div>
    );
};

export default GenerateButton;
