import React, {useState} from 'react';


type CouponPropsType = {
    // DigitsForCoupon: number[]
    // startArrayWithAllDigits: number[]
    // generating: () => void
    //setNewStrings: (newStrings: number[]) => void
    //newStrings: number[]
    DigitsInCouponArray: number[]
    BlindInCouponArrayCreator: ()=> number[]
    DigitsInCouponArrayCreator:()=> number[]
    StartBlindArray: number[]
}

const Coupon = (Props: CouponPropsType) => {
    console.log(Props)
    // const DigitCreator = (maxDigit: number) => {
    //     const Middle: Array<number> = []
    //     for (let i = 1; i <= maxDigit; i++) {
    //         Middle.push(i)
    //     }
    //     return Middle
    // }

    // const StringCreator = (minDigit: number, maxDigit: number) => {
    //     const eArray: Array<number> = []
    //     for (let i = minDigit; i <= maxDigit; i++) {
    //         eArray.push(i)
    //     }
    //     return eArray
    // }
    //
    // let dualDigitsInString = (arr: number[]) => {
    //     let emptyArrayForDigits = []
    //     let currentDigit = Math.ceil(Math.random() * arr.length - 1)
    //     let DigitWithCurrentIndex = arr[currentDigit]
    //     emptyArrayForDigits.push(DigitWithCurrentIndex)
    //     let newArray = arr.filter(f => f !== DigitWithCurrentIndex)
    //     let secondCurrentDigit = Math.ceil(Math.random() * newArray.length - 1)
    //     let newDigitWithCurrentIndex = newArray[secondCurrentDigit]
    //     emptyArrayForDigits.push(newDigitWithCurrentIndex)
    //     let newArray2 = newArray.filter(f => f !== newDigitWithCurrentIndex)
    //     let thirdCurrentDigit = Math.ceil(Math.random() * newArray2.length - 1)
    //     let threeDigitWithCurrentIndex = newArray2[thirdCurrentDigit]
    //     emptyArrayForDigits.push(threeDigitWithCurrentIndex)
    //     console.log("total array old and work :  " + emptyArrayForDigits)
    //     // let newArray3 = newArray2.filter(f => f !== threeDigitWithCurrentIndex)
    //     return emptyArrayForDigits
    //
    // }
    // let dugitsFrom1To9 = StringCreator(1, 9)
    // let dugitsFrom10To19 = StringCreator(10, 19)
    // let dugitsFrom20To29 = StringCreator(20, 29)
    // let dugitsFrom30To39 = StringCreator(30, 39)
    // let dugitsFrom40To49 = StringCreator(40, 49)
    // let dugitsFrom50To60 = StringCreator(50, 60)
    // let blindFrom0To5 = StringCreator(0, 5)
    // let arrayBlindFrom0To5 = dualDigitsInString(blindFrom0To5)
    // let blindFrom7To12 = StringCreator(6, 11)
    // let arrayBlindFrom7To12 = dualDigitsInString(blindFrom7To12)
    // let blindFrom13To18 = StringCreator(12, 17)
    // let arrayBlindFrom13To18 = dualDigitsInString(blindFrom13To18)
    // let blindArray = [arrayBlindFrom0To5[0], arrayBlindFrom0To5[1],
    //     arrayBlindFrom7To12[0], arrayBlindFrom7To12[1],
    //     arrayBlindFrom13To18[0], arrayBlindFrom13To18[1]]
    //
    // let generating = () => {
    //     let OneToNine = dualDigitsInString(dugitsFrom1To9)
    //     let TenToNineteen = dualDigitsInString(dugitsFrom10To19)
    //     let TwentyToTwentyNine = dualDigitsInString(dugitsFrom20To29)
    //     let ThirtyToThirtyNine = dualDigitsInString(dugitsFrom30To39)
    //     let F0rtyToFortyNine = dualDigitsInString(dugitsFrom40To49)
    //     let FiftyToSixty = dualDigitsInString(dugitsFrom50To60)
    //     // let GeneratingArray = OneToNine.concat(TenToNineteen.concat(TwentyToTwentyNine.concat(ThirtyToThirtyNine.concat(F0rtyToFortyNine.concat(FiftyToSixty)))))
    //     let ArrayForCoupon = [OneToNine[0], TenToNineteen[0], TwentyToTwentyNine[0], ThirtyToThirtyNine[0], F0rtyToFortyNine[0], FiftyToSixty[0],
    //         OneToNine[1], TenToNineteen[1], TwentyToTwentyNine[1], ThirtyToThirtyNine[1], F0rtyToFortyNine[1], FiftyToSixty[1],
    //         OneToNine[2], TenToNineteen[2], TwentyToTwentyNine[2], ThirtyToThirtyNine[2], F0rtyToFortyNine[2], FiftyToSixty[2],]
    //     return ArrayForCoupon
    // }
    // // let startArrayWithAllDigits = DigitCreator(18)
    // let DigitsForCoupon = generating()
    // console.log("Digits for coupon" + DigitsForCoupon)
    // console.log("blind array " + blindArray)
    //


    //const [strings, setStrings] = useState<Array<number>>(DigitsForCoupon)
    const [newStrings, setNewStrings]= useState<Array<number>>(Props.DigitsInCouponArray)
    const [newBlindArray, setNewBlindArray] = useState<Array<number>>(Props.StartBlindArray)


    console.log(newBlindArray)

    const ButtonGenerating = () => {
        let newArray = Props.DigitsInCouponArrayCreator()
        setNewStrings(newArray)
        let newBlind = Props.BlindInCouponArrayCreator()
        setNewBlindArray(newBlind)
        // let newGenerate = generating()
        // setStrings(newGenerate)
    }

    const WillWeBlind = (arr: number[], index: number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === index) {
                return true
            }
        }
    }

    // const CouponCreator = strings.map((m, index) =>
    //     <div key={m} className={WillWeBlind(blindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    // )

    const newCouponCreator = newStrings.map((m, index) =>
        <div key={m} className={WillWeBlind(newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

// 4 empty 5 full 6 strings (3+3)
    return (
        <>
            <div className={'twoCoupons'}>


                <div className={'couponWrapper'}>
                    <div className={'coupon'}>
                        {newCouponCreator}

                    </div>
                </div>
                {/*<div className={'BigCouponWrapper'}>*/}
                {/*    <div className={'bigCoupon'}>*/}
                {/*        {newCouponCreator}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button onClick={ButtonGenerating}>GENERATE COUPON</button>
            </div>

        </>
    );
};

export default Coupon;