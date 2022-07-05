import React, {useState} from 'react';

type LotteryAppPropsType = {
    maxDigit: number
}

type emptyArrayType = number[]


const LotteryApp = (Props: LotteryAppPropsType) => {
    const Middle:emptyArrayType = []

    const NumberCreator = (maxDigit: number) => {
        for (let i = 1; i <= maxDigit; i++) {
            Middle.push(i)
        }
        return Middle
    }

    let partOfField = NumberCreator(90)
    let arrayWithAllNumbers = partOfField
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(arrayWithAllNumbers)
    const emptyArray:Array<number> = []
    const [arrayToPush, setArrayToPush ] = useState<Array<number>>(emptyArray)
    //this is array of dropped numbers


    const ContainerCreator = partOfField.map(m => <div key={m} className={"container"}><p>{[m]}</p></div>)

    const [numberOfDigit, setNumberOfDigit] = useState<number>(0)

    const Generating = () => {
        //BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG
        //NEED TO FIX BUG ( ZERO CAN DROP)
        //BUG WAS FIXED? NEED MORE TESTS
        const CurrentNumber = Math.ceil(Math.random() * Props.maxDigit)
        setNumberOfDigit(CurrentNumber)
        console.log(CurrentNumber)


        const FilteredArrayOfNumbers = partOfField.filter(f => f !== CurrentNumber)



        setNumbersInPlay(FilteredArrayOfNumbers)
        let onetimeFiltered = arrayToPush.push(CurrentNumber)

        console.log(arrayToPush)
        console.log(partOfField)
        console.log(emptyArray)
        console.log(numbersInPlay)
        const newEmptyArray :emptyArrayType = []
        const updatedArray :emptyArrayType = [...arrayToPush.concat( newEmptyArray)]

        setArrayToPush(updatedArray)

    }

    return (
        <div className={'appWrapper'}>
            <div className={"TableWrapper"}>
                <button onClick={Generating}>GENERATE</button>
                <div className={"Table"}>
                    {numberOfDigit}
                    ---
                    {numbersInPlay}
                   <div className={"DroppedNumbers"}>---
                    {arrayToPush}</div>
                </div>
            </div>
            <div className={"playingFieldWrapper"}>
                {ContainerCreator}

            </div>
        </div>
    );
}

export default LotteryApp;