import React from 'react';

type GenerateButtonPropsType = {
    Generating: () => void
    droppedNumbers: number[]
    maxDigit: number
}
const GenerateButton = (Props: GenerateButtonPropsType) => {
    let QuantityNumbersToDisablingButton
    Props.maxDigit > 70? QuantityNumbersToDisablingButton=Props.droppedNumbers.length + 7 : QuantityNumbersToDisablingButton=Props.droppedNumbers.length + 4
    const disabling = Props.maxDigit < QuantityNumbersToDisablingButton
    const gameButtonText = 'GENERATE'
    const gameOverButtonText = 'GAME OVER'
    return (
        <div className={'generateButton'}>
            <button onClick={Props.Generating} disabled={disabling}>{disabling? gameOverButtonText: gameButtonText}</button>
        </div>
    );
};

export default GenerateButton;
