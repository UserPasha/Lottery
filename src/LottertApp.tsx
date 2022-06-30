import React, {useState} from 'react';

type LotteryAppPropsType = {
    maxDigit: number
    //arrayOfNumbers: number[]
    //setCurrentValuesArray: (arrayOfNumbers: number[]) => void
    //CurrentNumberOne: number
}

const LotteryApp = (Props: LotteryAppPropsType) => {
    const Middle: Array<number> = []

    const NumberCreator = (maxDigit: number) => {
        for (let i = 1; i <= maxDigit; i++) {
            Middle.push(i)
        }
        return Middle
    }

    let partOfField = NumberCreator(90)
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(partOfField)
    const emptyArray:Array<number> = []
    const [arrayToPush, setArrayToPush ] = useState<Array<number>>(emptyArray)



    const ContainerCreator = partOfField.map(m => <div key={m} className={"container"}><p>{[m]}</p></div>)

    const [numberOfDigit, setNumberOfDigit] = useState<number>(0)

    const Generating = () => {
        //BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG BUG
        //NEED TO FIX BUG ( ZERO CAN DROP)
        const CurrentNumber = Math.floor(Math.random() * Props.maxDigit)
        setNumberOfDigit(CurrentNumber)
        console.log(CurrentNumber)
        const FilteredArrayOfNumbers = partOfField.filter(f => f !== CurrentNumber)
        setNumbersInPlay(FilteredArrayOfNumbers)
        let onetimeFiltered = arrayToPush.push(CurrentNumber)
        const Otne = emptyArray.push(CurrentNumber)
        setArrayToPush(arrayToPush)
        // setArrayToPush(Otne)
        // const CopyOnetimeFiltered = [...onetimeFiltered]
        console.log(arrayToPush)
        setArrayToPush(arrayToPush)
        console.log(partOfField)
        console.log(emptyArray)

        //const FilteredArrayOfNumbersOne = Props.arrayOfNumbers.filter(f => f !== Props.CurrentNumberOne)
        // Props.setCurrentValuesArray(FilteredArrayOfNumbersOne)
    }

    return (
        <div className={'appWrapper'}>
            <div className={"TableWrapper"}>
                <button onClick={Generating}>GENERATE</button>
                <div className={"Table"}>
                    {numberOfDigit}
                    ---
                    {numbersInPlay}
                    ---
                    {arrayToPush}
                </div>
            </div>
            <div className={"playingFieldWrapper"}>
                {ContainerCreator}

            </div>
        </div>
    );
}

export default LotteryApp;