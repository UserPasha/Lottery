import React from 'react';
import Coupon from "./Coupon";


export const CouponZone = () => {

    const StringCreator = (minDigit: number, maxDigit: number) => {
        const eArray: Array<number> = []
        for (let i = minDigit; i <= maxDigit; i++) {
            eArray.push(i)
        }
        return eArray
    }

    let dualDigitsInString = (arr: number[]) => {
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
        emptyArrayForDigits.push(sixthCurrentDigit)
        console.log("total array 6 :  "+emptyArrayForDigits.sort())
        return emptyArrayForDigits.sort()
    }

    let dugitsFrom1To9 = StringCreator(1, 9)
    let dugitsFrom10To19 = StringCreator(10, 19)
    let dugitsFrom20To29 = StringCreator(20, 29)
    let dugitsFrom30To39 = StringCreator(30, 39)
    let dugitsFrom40To49 = StringCreator(40, 49)
    let dugitsFrom50To59 = StringCreator(50, 59)
    let dugitsFrom60To69 = StringCreator(60, 69)
    let dugitsFrom70To79 = StringCreator(70, 79)
    let dugitsFrom80To90 = StringCreator(80, 90)
    let OneToNine = dualDigitsInString(dugitsFrom1To9)
    let TenToNineteen = dualDigitsInString(dugitsFrom10To19)
    let TwentyToTwentyNine = dualDigitsInString(dugitsFrom20To29)
    let ThirtyToThirtyNine = dualDigitsInString(dugitsFrom30To39)
    let F0rtyToFortyNine = dualDigitsInString(dugitsFrom40To49)
    let FiftyToFiftyNine = dualDigitsInString(dugitsFrom50To59)
    let sixtyToSixtyNine = dualDigitsInString(dugitsFrom60To69)
    let seventyToSeventyNine = dualDigitsInString(dugitsFrom70To79)
    let eightyToNinty = dualDigitsInString(dugitsFrom80To90)

    let arrayToBigCouponPartUp = [OneToNine[0], TenToNineteen[0], TwentyToTwentyNine[0], ThirtyToThirtyNine[0], F0rtyToFortyNine[0],
        FiftyToFiftyNine[0], sixtyToSixtyNine[0], seventyToSeventyNine[0], eightyToNinty[0], OneToNine[1], TenToNineteen[1], TwentyToTwentyNine[1],
        ThirtyToThirtyNine[1], F0rtyToFortyNine[1], FiftyToFiftyNine[1], sixtyToSixtyNine[1], seventyToSeventyNine[1], eightyToNinty[1],
        OneToNine[2], TenToNineteen[2], TwentyToTwentyNine[2], ThirtyToThirtyNine[2], F0rtyToFortyNine[2], FiftyToFiftyNine[2], sixtyToSixtyNine[2],
        seventyToSeventyNine[2], eightyToNinty[2]]
    let arrayToBigCouponPartDown = [OneToNine[3], TenToNineteen[3], TwentyToTwentyNine[3], ThirtyToThirtyNine[3], F0rtyToFortyNine[3],
        FiftyToFiftyNine[3], sixtyToSixtyNine[3], seventyToSeventyNine[3], eightyToNinty[3], OneToNine[4], TenToNineteen[4], TwentyToTwentyNine[4],
        ThirtyToThirtyNine[4], F0rtyToFortyNine[4], FiftyToFiftyNine[4], sixtyToSixtyNine[4], seventyToSeventyNine[4], eightyToNinty[4],
        OneToNine[5], TenToNineteen[5], TwentyToTwentyNine[5], ThirtyToThirtyNine[5], F0rtyToFortyNine[5], FiftyToFiftyNine[5], sixtyToSixtyNine[5],
        seventyToSeventyNine[5], eightyToNinty[5]]

    let blindArray0to8 = StringCreator(0, 8)
    let blindArray9to17 = StringCreator(9, 17)
    let blindArray18to26 = StringCreator(18, 26)
    let blindArray = [blindArray0to8[0], blindArray0to8[1], blindArray0to8[2], blindArray0to8[3],
        blindArray9to17[0], blindArray9to17[1], blindArray9to17[2], blindArray9to17[3],
        blindArray18to26[0], blindArray18to26[1], blindArray18to26[2], blindArray18to26[3]]

    return (
        <div className={'couponWrapper'}>

                <Coupon/>
        </div>
    );
};

