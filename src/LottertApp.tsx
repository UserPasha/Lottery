import React, {useState} from 'react';
import Table from "./Components/Table";
import Field from "./Components/Field";

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

    let partOfField = NumberCreator(90)
    let arrayWithAllNumbers = partOfField
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(arrayWithAllNumbers)
    //this array of playing numbers

    const emptyArray: Array<number> = []
    const [arrayToPush, setArrayToPush] = useState<Array<number>>(emptyArray)
    //this is array of dropped numbers

    const [color, setColor] = useState<number[]>(emptyArray)



    const [numberOfDigit, setNumberOfDigit] = useState<number>(0)

    const Generating = () => {
        
        const CurrentNumber = numbersInPlay[Math.ceil(Math.random() * numbersInPlay.length-1)]
        
        setNumberOfDigit(CurrentNumber)
        
        const FilteredArrayOfNumbers = numbersInPlay.filter(f => f !== CurrentNumber)

        setNumbersInPlay(FilteredArrayOfNumbers)
        let onetimeFiltered = arrayToPush.push(CurrentNumber)


        console.log(CurrentNumber)
        console.log(arrayToPush)
        console.log(FilteredArrayOfNumbers)
        console.log(emptyArray)
        console.log(numbersInPlay)
        console.log(color)

        const newEmptyArray: emptyArrayType = []
        const updatedArray: emptyArrayType = [...arrayToPush.concat(newEmptyArray)]

        setArrayToPush(updatedArray)
        setColor(arrayToPush)
    }

    return (
        <div className={'appWrapper'}>
            <div className={"TableWrapper"}>
                <button onClick={Generating}>GENERATE</button>
                <Table arrayToPush={arrayToPush} numberOfDigit={numberOfDigit} numbersInPlay={numbersInPlay}/>
            </div>
            <Field partOfField={partOfField} color={color} arrayToPush={arrayToPush}  />
        </div>
    );
}

export default LotteryApp;