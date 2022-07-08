import React, {useState} from 'react';


type CouponPropsType = {
    // DigitsForCoupon: number[]
    // startArrayWithAllDigits: number[]
    // generating: () => void
}


const Coupon = (Props: CouponPropsType) => {


    const DigitCreator = (maxDigit: number) => {
        const Middle: Array<number> = []
        for (let i = 1; i <= maxDigit; i++) {
            Middle.push(i)
        }
        return Middle
    }


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
        //console.log('First Current Number: '+currentDigit)
        let DigitWithCurrentIndex = arr[currentDigit]
        //console.log('First Current: '+DigitWithCurrentIndex)
        emptyArrayForDigits.push(DigitWithCurrentIndex)
        //console.log('Array With Fisrt Digit: '+emptyArrayForDigits)
        let newArray = arr.filter(f => f != DigitWithCurrentIndex)
        //console.log('Array Without First Digit: '+newArray)
        //console.log('--------------------')
        let secondCurrentDigit = Math.ceil(Math.random() * newArray.length - 1)
        //console.log('Second Current Number: '+secondCurrentDigit)
        let newDigitWithCurrentIndex = newArray[secondCurrentDigit]
        //console.log('Second Current: '+newDigitWithCurrentIndex)
        emptyArrayForDigits.push(newDigitWithCurrentIndex)
        //console.log('Array With Fisrt and Second Digits: '+emptyArrayForDigits)
        let newArray2 = newArray.filter(f => f != newDigitWithCurrentIndex)
        //console.log('Array Without First and Second Digits: '+newArray2)
        //console.log('--------------------')
        let thirdCurrentDigit = Math.ceil(Math.random() * newArray2.length - 1)
        //console.log('Third Current Number: '+thirdCurrentDigit)
        let threeDigitWithCurrentIndex = newArray2[thirdCurrentDigit]
        //console.log('Third Current: '+threeDigitWithCurrentIndex)
        emptyArrayForDigits.push(threeDigitWithCurrentIndex)
        //console.log('Array With Fisrt, Second and Thrird Digits: '+emptyArrayForDigits)
        let newArray3 = newArray2.filter(f => f != threeDigitWithCurrentIndex)
        //console.log('Array Without First, Second and Third Digits: '+newArray3)
        return emptyArrayForDigits.sort()

    }
    let dugitsFrom1To9 = StringCreator(1, 9)
    let dugitsFrom10To19 = StringCreator(10, 19)
    let dugitsFrom20To29 = StringCreator(20, 29)
    let dugitsFrom30To39 = StringCreator(30, 39)
    let dugitsFrom40To49 = StringCreator(40, 49)
    let dugitsFrom50To60 = StringCreator(50, 60)
    let blindFrom0To5 = StringCreator(0, 5)
    console.log(blindFrom0To5)
    let arrayBlindFrom0To5 = dualDigitsInString(blindFrom0To5)
    console.log(arrayBlindFrom0To5)
    let blindFrom7To12 = StringCreator(6, 11)
    console.log(blindFrom7To12)
    let arrayBlindFrom7To12 = dualDigitsInString(blindFrom7To12)
    console.log(arrayBlindFrom7To12)
    let blindFrom13To18 = StringCreator(12, 17)
    console.log(blindFrom13To18)
    let arrayBlindFrom13To18 = dualDigitsInString(blindFrom13To18)
    console.log(arrayBlindFrom13To18)
    let blindArray = [arrayBlindFrom0To5[0], arrayBlindFrom0To5[1],
        arrayBlindFrom7To12[0], arrayBlindFrom7To12[1],
        arrayBlindFrom13To18[0], arrayBlindFrom13To18[1]]
    console.log(blindArray)

    let generating = () => {
        let OneToNine = dualDigitsInString(dugitsFrom1To9)
        let TenToNineteen = dualDigitsInString(dugitsFrom10To19)
        let TwentyToTwentyNine = dualDigitsInString(dugitsFrom20To29)
        let ThirtyToThirtyNine = dualDigitsInString(dugitsFrom30To39)
        let F0rtyToFortyNine = dualDigitsInString(dugitsFrom40To49)
        let FiftyToSixty = dualDigitsInString(dugitsFrom50To60)
        let GeneratingArray = OneToNine.concat(TenToNineteen.concat(TwentyToTwentyNine.concat(ThirtyToThirtyNine.concat(F0rtyToFortyNine.concat(FiftyToSixty)))))
        let ArrayForCoupon = [OneToNine[0], TenToNineteen[0], TwentyToTwentyNine[0], ThirtyToThirtyNine[0], F0rtyToFortyNine[0], FiftyToSixty[0],
            OneToNine[1], TenToNineteen[1], TwentyToTwentyNine[1], ThirtyToThirtyNine[1], F0rtyToFortyNine[1], FiftyToSixty[1],
            OneToNine[2], TenToNineteen[2], TwentyToTwentyNine[2], ThirtyToThirtyNine[2], F0rtyToFortyNine[2], FiftyToSixty[2],]
        console.log(OneToNine)
        console.log(TenToNineteen)
        console.log(TwentyToTwentyNine)
        console.log(ThirtyToThirtyNine)
        console.log(F0rtyToFortyNine)
        console.log(FiftyToSixty)
        console.log(GeneratingArray)
        console.log(ArrayForCoupon)
        return ArrayForCoupon
    }
    let startArrayWithAllDigits = DigitCreator(18)
    let DigitsForCoupon = generating()
    console.log(DigitsForCoupon)

    const [strings, setStrings] = useState<Array<number>>(DigitsForCoupon)


    const ButtonGenerating = () => {
        let newGenerate = generating()
        setStrings(newGenerate)
    }



    const WillWeBlind = (arr: number[], index: number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === index) {
                return true
            }
        }
    }



    const CouponCreator = strings.map((m, index) =>
        <div key={m} className={WillWeBlind(blindArray, index)?"blindItem":'couponItem'}><p>{m}</p></div>
    )

    return (
        <div className={'coupon'}>
            {CouponCreator}
            <button onClick={ButtonGenerating}></button>
        </div>
    );
};

export default Coupon;