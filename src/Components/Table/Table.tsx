import React from 'react';
import CurrentNumberComponent from "./CurrentNumber/CurrentNumberComponent";
import TableComponent from "./TableComponent/TableComponent";
import GenerateButton from "./GenerateButton/GenerateButton";

type TablePropsType={
    currentInPlay:number
    droppedNumbers:number[]
    Generating:()=> void
    maxDigit: number
}
export const Table = (Props: TablePropsType) => {

    return (
        <div className={"TableWrapper"}>
            <CurrentNumberComponent numberOfDigit={Props.currentInPlay}/>
            <TableComponent arrayToPush={Props.droppedNumbers} numberOfDigit={Props.currentInPlay}/>
            <GenerateButton Generating={Props.Generating} maxDigit={Props.maxDigit} droppedNumbers={Props.droppedNumbers}/>
        </div>
    );
};

