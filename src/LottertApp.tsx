import React, {useState} from 'react';
import Table from "./Components/Table";
import Field from "./Components/Field";
import CurrentNumberComponent from "./Components/CurrentNumberComponent";
import GenerateButton from "./Components/GenerateButton";
import {CouponZone} from "./Components/CouponZone";
import refresh from './Common/RefreshLogo.png'

type LotteryAppPropsType = {
    maxDigit: number
}

type emptyArrayType = number[]


const LotteryApp = (Props: LotteryAppPropsType) => {

    const Middle: emptyArrayType = []
    const NumberCreator = (maxDigit: number) => {
        for (let i = 1; i <= maxDigit; i++) {
            Middle.push(i)
        }
        return Middle
    }

    let startNumbers = NumberCreator(Props.maxDigit)
    let arrayWithAllNumbers = startNumbers
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(arrayWithAllNumbers)
    //this array of playing numbers

    const emptyArray: Array<number> = []
    const [arrayToPush, setArrayToPush] = useState<Array<number>>(emptyArray)
    //this is array of dropped numbers


    const [droppedAndColored, setDroppedAndColored] = useState<number[]>(emptyArray)

    const [numberOfDigit, setNumberOfDigit] = useState<number>(0)

    const refreshGame = () => {
        setNumbersInPlay(startNumbers)
        setArrayToPush(emptyArray)
        setDroppedAndColored(emptyArray)
        setNumberOfDigit(0)
    }

    const Generating = () => {

        const CurrentNumber = numbersInPlay[Math.ceil(Math.random() * numbersInPlay.length - 1)]

        setNumberOfDigit(CurrentNumber)

        const FilteredArrayOfNumbers = numbersInPlay.filter(f => f !== CurrentNumber)

        setNumbersInPlay(FilteredArrayOfNumbers)
        arrayToPush.push(CurrentNumber)

        const newEmptyArray: emptyArrayType = []
        const updatedArray: emptyArrayType = [...arrayToPush.concat(newEmptyArray)]

        setArrayToPush(updatedArray)
        setDroppedAndColored(arrayToPush)

    }

    return (
        <>
            <div className={"refreshButton"}
                 onClick={refreshGame}><img src={refresh} alt={"Refresh Button"}/></div>

            <div className={'appWrapper'}>
                <div className={"TableWrapper"}>
                    <CurrentNumberComponent numberOfDigit={numberOfDigit}/>
                    <Table arrayToPush={arrayToPush} numberOfDigit={numberOfDigit}/>
                    <GenerateButton Generating={Generating}/>
                </div>
                <Field startNumbers={startNumbers} droppedAndColored={droppedAndColored} arrayToPush={arrayToPush}/>
                <CouponZone/>
            </div>
        </>
    );
}

export default LotteryApp;