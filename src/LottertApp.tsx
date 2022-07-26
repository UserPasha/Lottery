import React, {useState} from 'react';
import Table from "./Components/Table";
import Field from "./Components/Field";
import CurrentNumberComponent from "./Components/CurrentNumberComponent";
import GenerateButton from "./Components/GenerateButton";
import {CouponZone} from "./Components/CouponZone";
import MenuToggler from "./Components/MenuToggler";

type LotteryAppPropsType = {
    maxDigit: number
}

type emptyArrayType = number[]


const LotteryApp = (Props: LotteryAppPropsType) => {


    const QuantityNumbersArrayCreator = (maxDigit: number) => {
        const Middle: emptyArrayType = []
        for (let i = 1; i <= maxDigit; i++) {
            Middle.push(i)
        }
        return Middle
    }

    let ArrayOfNumbers = QuantityNumbersArrayCreator(Props.maxDigit)
    let ReadyToStartArray = ArrayOfNumbers
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(ReadyToStartArray)
    //this array of playing numbers

    const emptyArray: Array<number> = []
    const [arrayToPush, setArrayToPush] = useState<Array<number>>(emptyArray)
    //this is array of dropped numbers


    const [numberOfDigit, setNumberOfDigit] = useState<number>(0)
    //this number to storage of current number

    const refreshGame = () => {
        setNumbersInPlay(ArrayOfNumbers)
        setArrayToPush(emptyArray)
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
    }


    return (
        <>
            <MenuToggler refreshGame={refreshGame}/>

            <div className={'appWrapper'}>

                <div className={"TableWrapper"}>
                    <CurrentNumberComponent numberOfDigit={numberOfDigit}/>
                    <Table arrayToPush={arrayToPush} numberOfDigit={numberOfDigit}/>
                    <GenerateButton Generating={Generating}/>
                </div>

                <Field startNumbers={ArrayOfNumbers} arrayToPush={arrayToPush}/>
                <CouponZone maxDigit={Props.maxDigit}/>
            </div>
        </>
    );
}

export default LotteryApp;