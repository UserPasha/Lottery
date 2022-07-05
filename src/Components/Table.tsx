import React from 'react';


type TablePropsType = {
    numberOfDigit: number
    numbersInPlay: number[]
    arrayToPush: number[]

}

const Table = (Props: TablePropsType) => {

    const DroppedNumbersTable = Props.arrayToPush.map(m=>
    <div key={m} className={'DroppedNumberItem'}><p>{[m]}</p></div>)


    return (
        <div className={"Table"}>
            {Props.numberOfDigit}
            ---
            {Props.numbersInPlay}
            <div className={"DroppedNumbers"}>
                {DroppedNumbersTable}
            </div>
        </div>
    );
};

export default Table;