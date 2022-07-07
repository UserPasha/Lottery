import React from 'react';

type FieldPropsType = {
    startNumbers: number[]
    droppedAndColored: number[]
    arrayToPush: number[]
}
const Field = (Props: FieldPropsType) => {

    const WillWePaint = (arr: number[], m: number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === m) {
                return true
            }
        }
    }

    const ContainerCreator = Props.startNumbers.map(m =>
        <div key={m} className={ WillWePaint(Props.droppedAndColored, m)? 'coloredContainer' : "container"}><p>{[m]}</p></div>)


    return (
        <div className={"playingFieldWrapper"}>
            {ContainerCreator}

        </div>
    );
};

export default Field;