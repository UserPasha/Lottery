import React from 'react';


type TablePropsType = {
    numberOfDigit: number
    arrayToPush: number[]

}

const Table = (Props: TablePropsType) => {

    const DroppedNumbersTable = Props.arrayToPush.map(m=>
    <div key={m} className={'DroppedNumberItem'}><p>{[m]}</p></div>)


    return (
        <div className={"Table"}>
            <div className={"DroppedNumbers"}>
                {DroppedNumbersTable}
            </div>
        </div>
    );
};

export default Table;