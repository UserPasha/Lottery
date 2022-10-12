import React, {useEffect, useState} from 'react';
import Field from "../Field/Field";
import {CouponContainer} from "../CouponZone/CouponContainer";
import MenuToggler from "../Menu/MenuToggler/MenuToggler";
import {Table} from "../Table/Table";

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

    let QuantityNumbersAtStartGame = QuantityNumbersArrayCreator(Props.maxDigit)
    //this contains an array of numbers in the draw

    const [numbersInPlay, setNumbersInPlay] = useState<Array<number>>(QuantityNumbersAtStartGame)
    //this array of playing numbers

    const emptyArray: Array<number> = []
    const [droppedNumbers, setDroppedNumbers] = useState<Array<number>>(emptyArray)
    //this is array of dropped numbers

    const [currentInPlay, setCurrentInPlay] = useState<number>(0)
    //this number to storage of current number

    const refreshGame = () => {
        setNumbersInPlay(QuantityNumbersAtStartGame)
        setDroppedNumbers(emptyArray)
        setCurrentInPlay(0)
    }

    const Generating = () => {
        const CurrentNumber = numbersInPlay[Math.ceil(Math.random() * numbersInPlay.length - 1)]
        setCurrentInPlay(CurrentNumber)
        const FilteredArrayOfNumbers = numbersInPlay.filter(f => f !== CurrentNumber)
        setNumbersInPlay(FilteredArrayOfNumbers)
        droppedNumbers.push(CurrentNumber)
        const newEmptyArray: emptyArrayType = []
        const updatedArray: emptyArrayType = [...droppedNumbers.concat(newEmptyArray)]
        setDroppedNumbers(updatedArray)
    }

    const [isShowRest, setIsShowRest] = useState<boolean>(false)
    let QuantityPlayedNumbers: number
    let ShowRestNumbers: number

    const showUndrawNumbers = (arr: number[]) =>{
        let a = []
        for(let i=0; i<arr.length; i++){
            a.push(arr[i])
        }
        return a
    }

    Props.maxDigit>70? QuantityPlayedNumbers=droppedNumbers.length+6 : QuantityPlayedNumbers=droppedNumbers.length+3
    Props.maxDigit>70? ShowRestNumbers = Props.maxDigit-12: ShowRestNumbers = Props.maxDigit-9
    let UndrawnNumbers = showUndrawNumbers(numbersInPlay)

    let RestMovesInTheGame = Props.maxDigit - QuantityPlayedNumbers
    let RestMovesMessage = `Attention! ${RestMovesInTheGame} move(s) left in the game`
    if(RestMovesInTheGame === 0){
        RestMovesMessage = `End of game. Undrawn numbers: ${UndrawnNumbers} `
    }

    useEffect(() => {
        if (droppedNumbers.length > ShowRestNumbers) {
            setIsShowRest(true)
        }else{
            setIsShowRest(false)
        }
    }, [droppedNumbers])


    return (
        <>
            <MenuToggler refreshGame={refreshGame}/>

            <div className={'appWrapper'}>

                <Table currentInPlay={currentInPlay}
                       droppedNumbers={droppedNumbers}
                       Generating={Generating}
                       maxDigit={Props.maxDigit}/>

                {isShowRest ? <div className={'restNumbers'}>
                     {RestMovesMessage}
                </div> : null}

                <Field startNumbers={QuantityNumbersAtStartGame} arrayToPush={droppedNumbers}/>
                <CouponContainer maxDigit={Props.maxDigit}/>

            </div>
        </>
    );
}

export default LotteryApp;