import React, {useState} from 'react';
import Coupon from "./Coupon";

type CouponZoneType = {
    maxDigit: number
}
export const CouponContainer = (Props: CouponZoneType) => {

    const CouponStringCreator = (minDigit: number, maxDigit: number) => {
        const eArray: Array<number> = []
        for (let i = minDigit; i <= maxDigit; i++) {
            eArray.push(i)
        }
        let emptyArrayForDigits = []
        let currentDigit = Math.ceil(Math.random() * eArray.length - 1)
        let DigitWithCurrentIndex = eArray[currentDigit]
        emptyArrayForDigits.push(DigitWithCurrentIndex)
        let newArray = eArray.filter(f => f !== DigitWithCurrentIndex)
        let secondCurrentDigit = Math.ceil(Math.random() * newArray.length - 1)
        let newDigitWithCurrentIndex = newArray[secondCurrentDigit]
        emptyArrayForDigits.push(newDigitWithCurrentIndex)
        let newArray2 = newArray.filter(f => f !== newDigitWithCurrentIndex)
        let thirdCurrentDigit = Math.ceil(Math.random() * newArray2.length - 1)
        let threeDigitWithCurrentIndex = newArray2[thirdCurrentDigit]
        emptyArrayForDigits.push(threeDigitWithCurrentIndex)
        let newArray3 = newArray2.filter(f => f !== threeDigitWithCurrentIndex)
        let fourthCurrentDigit = Math.ceil(Math.random() * newArray3.length - 1)
        let fourDigitWithCurrentIndex = newArray3[fourthCurrentDigit]
        emptyArrayForDigits.push(fourDigitWithCurrentIndex)
        let newArray4 = newArray3.filter(f => f !== fourDigitWithCurrentIndex)
        let fifthCurrentDigit = Math.ceil(Math.random() * newArray4.length - 1)
        let fiveDigitWithCurrentIndex = newArray4[fifthCurrentDigit]
        emptyArrayForDigits.push(fiveDigitWithCurrentIndex)
        let newArray5 = newArray4.filter(f => f !== fiveDigitWithCurrentIndex)
        let sixthCurrentDigit = Math.ceil(Math.random() * newArray5.length - 1)
        let sixDigitWithCurrentIndex = newArray5[sixthCurrentDigit]
        emptyArrayForDigits.push(sixDigitWithCurrentIndex)
        return emptyArrayForDigits
    }

    const DigitsInCouponArrayCreator = () => {
        let ArrayOflDigits1To9 = CouponStringCreator(1, 9)
        let ArrayOflDigits10To19 = CouponStringCreator(10, 19)
        let ArrayOflDigits20To29 = CouponStringCreator(20, 29)
        let ArrayOflDigits30To39 = CouponStringCreator(30, 39)
        let ArrayOflDigits40To49 = CouponStringCreator(40, 49)
        let ArrayOflDigits50To59 = CouponStringCreator(50, 59)
        let ArrayOflDigits60To69 = CouponStringCreator(60, 69)
        let ArrayOflDigits70To79 = CouponStringCreator(70, 79)
        let ArrayOflDigits80To90 = CouponStringCreator(80, 90)
        return [ArrayOflDigits1To9[0], ArrayOflDigits10To19[0], ArrayOflDigits20To29[0], ArrayOflDigits30To39[0], ArrayOflDigits40To49[0],
            ArrayOflDigits50To59[0], ArrayOflDigits60To69[0], ArrayOflDigits70To79[0], ArrayOflDigits80To90[0], ArrayOflDigits1To9[1], ArrayOflDigits10To19[1], ArrayOflDigits20To29[1],
            ArrayOflDigits30To39[1], ArrayOflDigits40To49[1], ArrayOflDigits50To59[1], ArrayOflDigits60To69[1], ArrayOflDigits70To79[1], ArrayOflDigits80To90[1],
            ArrayOflDigits1To9[2], ArrayOflDigits10To19[2], ArrayOflDigits20To29[2], ArrayOflDigits30To39[2], ArrayOflDigits40To49[2], ArrayOflDigits50To59[2], ArrayOflDigits60To69[2],
            ArrayOflDigits70To79[2], ArrayOflDigits80To90[2], ArrayOflDigits1To9[3], ArrayOflDigits10To19[3], ArrayOflDigits20To29[3], ArrayOflDigits30To39[3], ArrayOflDigits40To49[3],
            ArrayOflDigits50To59[3], ArrayOflDigits60To69[3], ArrayOflDigits70To79[3], ArrayOflDigits80To90[3], ArrayOflDigits1To9[4], ArrayOflDigits10To19[4], ArrayOflDigits20To29[4],
            ArrayOflDigits30To39[4], ArrayOflDigits40To49[4], ArrayOflDigits50To59[4], ArrayOflDigits60To69[4], ArrayOflDigits70To79[4], ArrayOflDigits80To90[4],
            ArrayOflDigits1To9[5], ArrayOflDigits10To19[5], ArrayOflDigits20To29[5], ArrayOflDigits30To39[5], ArrayOflDigits40To49[5], ArrayOflDigits50To59[5], ArrayOflDigits60To69[5],
            ArrayOflDigits70To79[5], ArrayOflDigits80To90[5]]
    }

    const BlindInCouponArrayCreator = () => {
        let blindArray0to8 = CouponStringCreator(0, 8)
        let blindArray9to17 = CouponStringCreator(9, 17)
        let blindArray18to26 = CouponStringCreator(18, 26)
        return [blindArray0to8[0], blindArray0to8[1], blindArray0to8[2], blindArray0to8[3],
            blindArray9to17[0], blindArray9to17[1], blindArray9to17[2], blindArray9to17[3],
            blindArray18to26[0], blindArray18to26[1], blindArray18to26[2], blindArray18to26[3]]
    }

    const MiniDigitsInCouponArrayCreator = () => {
        let ArrayOflDigits1To9 = CouponStringCreator(1, 9)
        let ArrayOflDigits10To19 = CouponStringCreator(10, 19)
        let ArrayOflDigits20To29 = CouponStringCreator(20, 29)
        let ArrayOflDigits30To39 = CouponStringCreator(30, 39)
        let ArrayOflDigits40To49 = CouponStringCreator(40, 49)
        let ArrayOflDigits50To60 = CouponStringCreator(50, 60)
        return [ArrayOflDigits1To9[0], ArrayOflDigits10To19[0], ArrayOflDigits20To29[0], ArrayOflDigits30To39[0], ArrayOflDigits40To49[0], ArrayOflDigits50To60[0],
            ArrayOflDigits1To9[1], ArrayOflDigits10To19[1], ArrayOflDigits20To29[1], ArrayOflDigits30To39[1], ArrayOflDigits40To49[1], ArrayOflDigits50To60[1],
            ArrayOflDigits1To9[2], ArrayOflDigits10To19[2], ArrayOflDigits20To29[2], ArrayOflDigits30To39[2], ArrayOflDigits40To49[2], ArrayOflDigits50To60[2],]
    }

    const BlindArrayCreator = () => {
        let blindArray0to5 = CouponStringCreator(0, 5)
        let blindArray6to11 = CouponStringCreator(6, 11)
        let blindArray12to17 = CouponStringCreator(12, 17)
        return [blindArray0to5[0], blindArray0to5[1],
            blindArray6to11[0], blindArray6to11[1],
            blindArray12to17[0], blindArray12to17[1]]
    }

    let DigitsInCouponArray = DigitsInCouponArrayCreator()
    let MiniDigitsInCouponArray = MiniDigitsInCouponArrayCreator()
    let StartBlindArray = BlindInCouponArrayCreator()
    let MiniBlindArray = BlindArrayCreator()

    const [bigStrings, setBigStrings] = useState<Array<number>>(DigitsInCouponArray)
    const [bigStringsTwo, setBigStringsTwo] = useState<Array<number>>(DigitsInCouponArray)
    const [bigBlindArray, setBigBlindArray] = useState<Array<number>>(StartBlindArray)
    const [secondBigBlindArray, setSecondBigBlindArray] = useState<Array<number>>(StartBlindArray)
    const [thirdBigBlindArray, setThirdBigBlindArray] = useState<Array<number>>(StartBlindArray)
    const [forthBlindArray, setForthBlindArray] = useState<Array<number>>(StartBlindArray)

    const [newStrings, setNewStrings] = useState<Array<number>>(MiniDigitsInCouponArray)
    const [newStringsTwo, setNewStringsTwo] = useState<Array<number>>(MiniDigitsInCouponArray)
    const [newStringsThree, setNewStringsThree] = useState<Array<number>>(MiniDigitsInCouponArray)
    const [newBlindArray, setNewBlindArray] = useState<Array<number>>(MiniBlindArray)
    const [secondBlindArray, setSecondBlindArray] = useState<Array<number>>(MiniBlindArray)
    const [thirdBlindArray, setThirdBlindArray] = useState<Array<number>>(MiniBlindArray)
    const [lock, setLock] = useState<boolean>(true)

    const toggler = () => {
        setLock(!lock)
    }

    const ButtonGenerating = () => {
        let newBig = DigitsInCouponArrayCreator()
        setBigStrings(newBig)
        let newBigTwo = DigitsInCouponArrayCreator()
        setBigStringsTwo(newBigTwo)
        let newArray = MiniDigitsInCouponArrayCreator()
        setNewStrings(newArray)
        let newArrayTwo = MiniDigitsInCouponArrayCreator()
        setNewStringsTwo(newArrayTwo)
        let newArrayThree = MiniDigitsInCouponArrayCreator()
        setNewStringsThree(newArrayThree)
        let newBlind = BlindArrayCreator()
        setNewBlindArray(newBlind)
        let secondBlind = BlindArrayCreator()
        setSecondBlindArray(secondBlind)
        let thirdBlind = BlindArrayCreator()
        setThirdBlindArray(thirdBlind)
        let forBigBlind = BlindInCouponArrayCreator()
        setBigBlindArray(forBigBlind)
        let forBigBlindTwo = BlindInCouponArrayCreator()
        setSecondBigBlindArray(forBigBlindTwo)
        let forBigBlindThree = BlindInCouponArrayCreator()
        setThirdBigBlindArray(forBigBlindThree)
        let forthBlind = BlindInCouponArrayCreator()
        setForthBlindArray(forthBlind)
    }

    const WillWeBlind = (arr: number[], index: number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === index) {
                return true
            }
        }
    }

    const slicedArrayPartUp = [...bigStrings].splice(0, 27)
    const slicedArrayParDown = [...bigStrings].splice(27, 27)

    const secondSlicedArrayPartUp = [...bigStringsTwo].splice(0, 27)
    const secondSlicedArrayParDown = [...bigStringsTwo].splice(27, 27)

    return (
        <>
            {Props.maxDigit > 80 ? <Coupon cssBoolean={Props.maxDigit}
                                           lock={lock}
                                           couponPartOne={slicedArrayPartUp}
                                           couponPartTwo={slicedArrayParDown}
                                           couponPartThree={secondSlicedArrayPartUp}
                                           couponPartFour={secondSlicedArrayParDown}
                                           toggler={toggler}
                                           WillWeBlind={WillWeBlind}
                                           ButtonGenerating={ButtonGenerating}
                                           newBlindArray={bigBlindArray}
                                           secondBlindArray={secondBigBlindArray}
                                           thirdBlindArray={thirdBigBlindArray}
                                           forthBlindArray={forthBlindArray}

                />
                :
                <Coupon cssBoolean={Props.maxDigit}
                        lock={lock}
                        newBlindArray={newBlindArray}
                        secondBlindArray={secondBlindArray}
                        thirdBlindArray={thirdBlindArray}
                        forthBlindArray={forthBlindArray}
                        toggler={toggler}
                        WillWeBlind={WillWeBlind}
                        ButtonGenerating={ButtonGenerating}
                        couponPartOne={newStrings}
                        couponPartTwo={newStringsTwo}
                        couponPartThree={newStringsThree}
                        couponPartFour={secondSlicedArrayParDown}

                />}

        </>
    );
};

