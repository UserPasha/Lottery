import React from 'react';
import Coupon from "./Coupon";



export const CouponZone = () => {


    // const DigitCreator = ( maxDigit: number) => {
    //     const Middle: Array<number> = []
    //     for (let i = 1; i <= maxDigit; i++) {
    //         Middle.push(i)
    //     }
    //     return Middle
    // }
    //
    //
    // const StringCreator = (minDigit:number, maxDigit: number) => {
    //     const eArray: Array<number> = []
    //     for (let i = minDigit; i <= maxDigit; i++) {
    //         eArray.push(i)
    //     }
    //     return eArray
    // }
    //
    //
    // let dualDigitsInString=(arr: number[])=>{
    //     let emptyArrayForDigits = []
    //     let currentDigit = Math.ceil(Math.random() * arr.length-1)
    //     //console.log('First Current Number: '+currentDigit)
    //     let DigitWithCurrentIndex = arr[currentDigit]
    //     //console.log('First Current: '+DigitWithCurrentIndex)
    //     emptyArrayForDigits.push(DigitWithCurrentIndex)
    //     //console.log('Array With Fisrt Digit: '+emptyArrayForDigits)
    //     let newArray = arr.filter(f=>f!=DigitWithCurrentIndex)
    //     //console.log('Array Without First Digit: '+newArray)
    //     //console.log('--------------------')
    //     let secondCurrentDigit = Math.ceil(Math.random() * newArray.length-1)
    //     //console.log('Second Current Number: '+secondCurrentDigit)
    //     let newDigitWithCurrentIndex = newArray[secondCurrentDigit]
    //     //console.log('Second Current: '+newDigitWithCurrentIndex)
    //     emptyArrayForDigits.push(newDigitWithCurrentIndex)
    //     //console.log('Array With Fisrt and Second Digits: '+emptyArrayForDigits)
    //     let newArray2 = newArray.filter(f=>f!=newDigitWithCurrentIndex)
    //     //console.log('Array Without First and Second Digits: '+newArray2)
    //     //console.log('--------------------')
    //     let thirdCurrentDigit = Math.ceil(Math.random() * newArray2.length-1)
    //     //console.log('Third Current Number: '+thirdCurrentDigit)
    //     let threeDigitWithCurrentIndex = newArray2[thirdCurrentDigit]
    //     //console.log('Third Current: '+threeDigitWithCurrentIndex)
    //     emptyArrayForDigits.push(threeDigitWithCurrentIndex)
    //     //console.log('Array With Fisrt, Second and Thrird Digits: '+emptyArrayForDigits)
    //     let newArray3 = newArray2.filter(f=>f!=threeDigitWithCurrentIndex)
    //     //console.log('Array Without First, Second and Third Digits: '+newArray3)
    //     return emptyArrayForDigits.sort()
    //
    // }
    // let dugitsFrom1To9 = StringCreator(1,9)
    // let dugitsFrom10To19 = StringCreator(10,19)
    // let dugitsFrom20To29 = StringCreator(20,29)
    // let dugitsFrom30To39 = StringCreator(30,39)
    // let dugitsFrom40To49 = StringCreator(40,49)
    // let dugitsFrom50To60 = StringCreator(50,60)
    //
    //
    // let generating = ()=>{
    //     let OneToNine = dualDigitsInString(dugitsFrom1To9)
    //     let TenToNineteen = dualDigitsInString(dugitsFrom10To19)
    //     let TwentyToTwentyNine = dualDigitsInString(dugitsFrom20To29)
    //     let ThirtyToThirtyNine = dualDigitsInString(dugitsFrom30To39)
    //     let F0rtyToFortyNine = dualDigitsInString(dugitsFrom40To49)
    //     let FiftyToSixty = dualDigitsInString(dugitsFrom50To60)
    //     let GeneratingArray = OneToNine.concat(TenToNineteen.concat(TwentyToTwentyNine.concat(ThirtyToThirtyNine.concat(F0rtyToFortyNine.concat(FiftyToSixty)))))
    //     console.log(OneToNine)
    //     console.log(TenToNineteen)
    //     console.log(TwentyToTwentyNine)
    //     console.log(ThirtyToThirtyNine)
    //     console.log(F0rtyToFortyNine)
    //     console.log(FiftyToSixty)
    //     console.log(GeneratingArray)
    //     return GeneratingArray
    // }
    // let startArrayWithAllDigits = DigitCreator(18)
    // let DigitsForCoupon = generating()
    // console.log(DigitsForCoupon)


    return (
        <div className={'couponWrapper'}>

                <Coupon
                />



        </div>
    );
};
