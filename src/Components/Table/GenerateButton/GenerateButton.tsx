import React from 'react';

type GenerateButtonPropsType = {
    Generating: () => void
    droppedNumbers: number[]
    maxDigit: number
}
const GenerateButton = (Props: GenerateButtonPropsType) => {
    let DisablingButton
    Props.maxDigit > 70? DisablingButton=Props.droppedNumbers.length + 7 : DisablingButton=Props.droppedNumbers.length + 4
    const disabling = Props.maxDigit < DisablingButton
    const gameButtonText = 'GENERATE'
    const gameOverButtonText = 'GAME OVER'
    return (
        <div className={'generateButton'}>
            <button onClick={Props.Generating} disabled={disabling}>{disabling? gameOverButtonText: gameButtonText}</button>
        </div>
    );
};

export default GenerateButton;
