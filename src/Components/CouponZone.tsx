import React, {useState} from 'react';
import Coupon from "./Coupon";

type CouponZoneType = {
    maxDigit: number
}
export const CouponZone = (Props: CouponZoneType) => {

    const StringCreator = (minDigit: number, maxDigit: number) => {
        const eArray: Array<number> = []
        for (let i = minDigit; i <= maxDigit; i++) {
            eArray.push(i)
        }
        return eArray
    }

    let ArrayOflDigitsInOneString = (arr: number[]) => {
        let emptyArrayForDigits = []
        let currentDigit = Math.ceil(Math.random() * arr.length - 1)
        let DigitWithCurrentIndex = arr[currentDigit]
        emptyArrayForDigits.push(DigitWithCurrentIndex)
        let newArray = arr.filter(f => f !== DigitWithCurrentIndex)
        let secondCurrentDigit = Math.ceil(Math.random() * newArray.length - 1)
        let newDigitWithCurrentIndex = newArray[secondCurrentDigit]
        emptyArrayForDigits.push(newDigitWithCurrentIndex)
        let newArray2 = newArray.filter(f => f !== newDigitWithCurrentIndex)
        let thirdCurrentDigit = Math.ceil(Math.random() * newArray2.length - 1)
        let threeDigitWithCurrentIndex = newArray2[thirdCurrentDigit]
        emptyArrayForDigits.push(threeDigitWithCurrentIndex)
        let newArray3 = newArray2.filter(f => f !== threeDigitWithCurrentIndex)
        //console.log("start array after 3 "+newArray3)
        //console.log("empty array after 3 "+emptyArrayForDigits)
        let fourthCurrentDigit = Math.ceil(Math.random() * newArray3.length - 1)
        //console.log("current 4 "+fourthCurrentDigit)
        let fourDigitWithCurrentIndex = newArray3[fourthCurrentDigit]
        //console.log("put this number in array "+fourDigitWithCurrentIndex)
        emptyArrayForDigits.push(fourDigitWithCurrentIndex)
        let newArray4 = newArray3.filter(f => f !== fourDigitWithCurrentIndex)
        //console.log("start array after 4 "+newArray4)
        //console.log("empty array after 4 "+emptyArrayForDigits)
        let fifthCurrentDigit = Math.ceil(Math.random() * newArray4.length - 1)
        let fiveDigitWithCurrentIndex = newArray4[fifthCurrentDigit]
        emptyArrayForDigits.push(fiveDigitWithCurrentIndex)
        let newArray5 = newArray4.filter(f => f !== fiveDigitWithCurrentIndex)
        let sixthCurrentDigit = Math.ceil(Math.random() * newArray5.length - 1)
        let sixDigitWithCurrentIndex = newArray5[sixthCurrentDigit]
        emptyArrayForDigits.push(sixDigitWithCurrentIndex)
        return emptyArrayForDigits

    }

    let digits1To9 = StringCreator(1, 9)
    let digits10To19 = StringCreator(10, 19)
    let digits20To29 = StringCreator(20, 29)
    let digits30To39 = StringCreator(30, 39)
    let digits40To49 = StringCreator(40, 49)
    let digits50To59 = StringCreator(50, 59)
    let digits60To69 = StringCreator(60, 69)
    let digits70To79 = StringCreator(70, 79)
    let digits80To90 = StringCreator(80, 90)

    let  digits50To60 = StringCreator(50, 60)

    const DigitsInCouponArrayCreator = () => {
        let ArrayOflDigits1To9 = ArrayOflDigitsInOneString(digits1To9)
        let ArrayOflDigits10To19 = ArrayOflDigitsInOneString(digits10To19)
        let ArrayOflDigits20To29 = ArrayOflDigitsInOneString(digits20To29)
        let ArrayOflDigits30To39 = ArrayOflDigitsInOneString(digits30To39)
        let ArrayOflDigits40To49 = ArrayOflDigitsInOneString(digits40To49)
        let ArrayOflDigits50To59 = ArrayOflDigitsInOneString(digits50To59)
        let ArrayOflDigits60To69 = ArrayOflDigitsInOneString(digits60To69)
        let ArrayOflDigits70To79 = ArrayOflDigitsInOneString(digits70To79)
        let ArrayOflDigits80To90 = ArrayOflDigitsInOneString(digits80To90)


        let ArrayToCoupon = [ArrayOflDigits1To9[0], ArrayOflDigits10To19[0], ArrayOflDigits20To29[0], ArrayOflDigits30To39[0], ArrayOflDigits40To49[0],
            ArrayOflDigits50To59[0], ArrayOflDigits60To69[0], ArrayOflDigits70To79[0], ArrayOflDigits80To90[0], ArrayOflDigits1To9[1], ArrayOflDigits10To19[1], ArrayOflDigits20To29[1],
            ArrayOflDigits30To39[1], ArrayOflDigits40To49[1], ArrayOflDigits50To59[1], ArrayOflDigits60To69[1], ArrayOflDigits70To79[1], ArrayOflDigits80To90[1],
            ArrayOflDigits1To9[2], ArrayOflDigits10To19[2], ArrayOflDigits20To29[2], ArrayOflDigits30To39[2], ArrayOflDigits40To49[2], ArrayOflDigits50To59[2], ArrayOflDigits60To69[2],
            ArrayOflDigits70To79[2], ArrayOflDigits80To90[2], ArrayOflDigits1To9[3], ArrayOflDigits10To19[3], ArrayOflDigits20To29[3], ArrayOflDigits30To39[3], ArrayOflDigits40To49[3],
            ArrayOflDigits50To59[3], ArrayOflDigits60To69[3], ArrayOflDigits70To79[3], ArrayOflDigits80To90[3], ArrayOflDigits1To9[4], ArrayOflDigits10To19[4], ArrayOflDigits20To29[4],
            ArrayOflDigits30To39[4], ArrayOflDigits40To49[4], ArrayOflDigits50To59[4], ArrayOflDigits60To69[4], ArrayOflDigits70To79[4], ArrayOflDigits80To90[4],
            ArrayOflDigits1To9[5], ArrayOflDigits10To19[5], ArrayOflDigits20To29[5], ArrayOflDigits30To39[5], ArrayOflDigits40To49[5], ArrayOflDigits50To59[5], ArrayOflDigits60To69[5],
            ArrayOflDigits70To79[5], ArrayOflDigits80To90[5]]
        return ArrayToCoupon
    }

    
    const MiniDigitsInCouponArrayCreator = () => {
        let ArrayOflDigits1To9 = ArrayOflDigitsInOneString(digits1To9)
        let ArrayOflDigits10To19 = ArrayOflDigitsInOneString(digits10To19)
        let ArrayOflDigits20To29 = ArrayOflDigitsInOneString(digits20To29)
        let ArrayOflDigits30To39 = ArrayOflDigitsInOneString(digits30To39)
        let ArrayOflDigits40To49 = ArrayOflDigitsInOneString(digits40To49)
        let ArrayOflDigits50To60 = ArrayOflDigitsInOneString(digits50To60)
        
        
        let ArrayForCoupon = [ArrayOflDigits1To9[0], ArrayOflDigits10To19[0], ArrayOflDigits20To29[0], ArrayOflDigits30To39[0], ArrayOflDigits40To49[0], ArrayOflDigits50To60[0],
            ArrayOflDigits1To9[1], ArrayOflDigits10To19[1], ArrayOflDigits20To29[1], ArrayOflDigits30To39[1], ArrayOflDigits40To49[1], ArrayOflDigits50To60[1],
            ArrayOflDigits1To9[2], ArrayOflDigits10To19[2], ArrayOflDigits20To29[2], ArrayOflDigits30To39[2], ArrayOflDigits40To49[2], ArrayOflDigits50To60[2],]
        return ArrayForCoupon
    }
const BlindArrayCreator = ()=>{
    let blindFrom0To5 = StringCreator(0, 5)
    let arrayBlindFrom0To5 = ArrayOflDigitsInOneString(blindFrom0To5)
    let blindFrom7To12 = StringCreator(6, 11)
    let arrayBlindFrom7To12 = ArrayOflDigitsInOneString(blindFrom7To12)
    let blindFrom13To18 = StringCreator(12, 17)
    let arrayBlindFrom13To18 = ArrayOflDigitsInOneString(blindFrom13To18)
    let MiniBlindArray2 = [arrayBlindFrom0To5[0], arrayBlindFrom0To5[1],
        arrayBlindFrom7To12[0], arrayBlindFrom7To12[1],
        arrayBlindFrom13To18[0], arrayBlindFrom13To18[1]]
    return MiniBlindArray2
}
let MiniBlindArray = BlindArrayCreator()

    let DigitsInCouponArray = DigitsInCouponArrayCreator()
    let MiniDigitsInCouponArray = MiniDigitsInCouponArrayCreator()


    let DigitsToGeneratingBlindNumbers0To8 = StringCreator(0, 8)
    let DigitsToGeneratingBlindNumbers9To17 = StringCreator(9, 17)
    let DigitsToGeneratingBlindNumbers18To26 = StringCreator(18, 26)
    let DigitsToGeneratingBlindNumbers27To35 = StringCreator(27, 35)
    let DigitsToGeneratingBlindNumbers36To45 = StringCreator(36, 44)
    let DigitsToGeneratingBlindNumbers46To54 = StringCreator(45, 53)
    const BlindInCouponArrayCreator = () => {
        let blindArray0to8 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers0To8)
        let blindArray9to17 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers9To17)
        let blindArray18to26 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers18To26)
        let blindArray27to35 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers27To35)
        let blindArray36to45 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers36To45)
        let blindArray46to54 = ArrayOflDigitsInOneString(DigitsToGeneratingBlindNumbers46To54)

        console.log(blindArray0to8)
        let blindArray = [blindArray0to8[0], blindArray0to8[1], blindArray0to8[2], blindArray0to8[3],
            blindArray9to17[0], blindArray9to17[1], blindArray9to17[2], blindArray9to17[3],
            blindArray18to26[0], blindArray18to26[1], blindArray18to26[2], blindArray18to26[3]]

        //     ,
        //     blindArray27to35[0], blindArray27to35[1], blindArray27to35[2], blindArray27to35[3],
        //     blindArray36to45[0], blindArray36to45[1], blindArray36to45[2], blindArray36to45[3],
        //     blindArray46to54[0], blindArray46to54[1], blindArray46to54[2], blindArray46to54[3]
        //
        // ]
        let blindArray22 = [blindArray0to8[0], blindArray9to17[0], blindArray18to26[0], blindArray27to35[0], blindArray36to45[0], blindArray46to54[0],
            blindArray0to8[1], blindArray9to17[1], blindArray18to26[1], blindArray27to35[1], blindArray36to45[1], blindArray46to54[1],
            blindArray0to8[2], blindArray9to17[2], blindArray18to26[2], blindArray27to35[2], blindArray36to45[2], blindArray46to54[2],
            blindArray0to8[3], blindArray9to17[3], blindArray18to26[3], blindArray27to35[3], blindArray36to45[3], blindArray46to54[3],
            blindArray0to8[4], blindArray9to17[4], blindArray18to26[4], blindArray27to35[4], blindArray36to45[4], blindArray46to54[4],
            blindArray0to8[5], blindArray9to17[5], blindArray18to26[5], blindArray27to35[5], blindArray36to45[5], blindArray46to54[5],
        ]
        let bl33 = [blindArray0to8[0],]
        return blindArray
    }
    let StartBlindArray = BlindInCouponArrayCreator()
    let SecondStartBlindArray = BlindInCouponArrayCreator()
    console.log(DigitsInCouponArray)
    console.log(StartBlindArray)
    console.log(MiniDigitsInCouponArray)
    console.log(DigitsInCouponArray)
    console.log(MiniBlindArray)
    console.log(StartBlindArray)

    return (
        <>

        {Props.maxDigit>80?  <Coupon DigitsInCouponArrayCreator={DigitsInCouponArrayCreator}
                                     DigitsInCouponArray={DigitsInCouponArray}
                                     BlindInCouponArrayCreator={BlindInCouponArrayCreator}
                                     StartBlindArray={StartBlindArray}
                                     SecondStartBlindArray={SecondStartBlindArray}
                                     cssBoolean={Props.maxDigit}
        /> : <Coupon DigitsInCouponArrayCreator={MiniDigitsInCouponArrayCreator}
                     DigitsInCouponArray={MiniDigitsInCouponArray}
                     BlindInCouponArrayCreator={BlindArrayCreator}
                     StartBlindArray={MiniBlindArray}
                     cssBoolean={Props.maxDigit}
                     SecondStartBlindArray={SecondStartBlindArray}
        />}

</>
    );
};

