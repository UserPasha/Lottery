import React, {useState} from 'react';

type CouponPropsType = {
    DigitsInCouponArray: number[]
    BlindInCouponArrayCreator: () => number[]
    DigitsInCouponArrayCreator: () => number[]
    StartBlindArray: number[]
    SecondStartBlindArray: number[]
    cssBoolean: number
}

const Coupon = (Props: CouponPropsType) => {
    //console.log(Props)
    const [newStrings, setNewStrings] = useState<Array<number>>(Props.DigitsInCouponArray)
    const [newStringsTwo, setNewStringsTwo] = useState<Array<number>>(Props.DigitsInCouponArray)
    const [newStringsThree, setNewStringsThree] = useState<Array<number>>(Props.DigitsInCouponArray)
    const [newBlindArray, setNewBlindArray] = useState<Array<number>>(Props.StartBlindArray)
    const [secondBlindArray, setSecondBlindArray] = useState<Array<number>>(Props.SecondStartBlindArray)
    const [thirdBlindArray, setThirdBlindArray] = useState<Array<number>>(Props.SecondStartBlindArray)
    const [forthBlindArray, setForthBlindArray] = useState<Array<number>>(Props.SecondStartBlindArray)
    //console.log(newBlindArray)

    const ButtonGenerating = () => {
        let newArray = Props.DigitsInCouponArrayCreator()
        setNewStrings(newArray)
        let newArrayTwo = Props.DigitsInCouponArrayCreator()
        setNewStringsTwo(newArrayTwo)
        let newArrayThree = Props.DigitsInCouponArrayCreator()
        setNewStringsThree(newArrayThree)
        let newBlind = Props.BlindInCouponArrayCreator()
        setNewBlindArray(newBlind)
        let secondBlind = Props.BlindInCouponArrayCreator()
        setSecondBlindArray(secondBlind)
        let thirdBlind = Props.BlindInCouponArrayCreator()
        setThirdBlindArray(thirdBlind)
        let forthBlind = Props.BlindInCouponArrayCreator()
        setForthBlindArray(forthBlind)
    }

    const WillWeBlind = (arr: number[], index: number) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === index) {
                return true
            }
        }
    }
    //console.log(newStrings)
    //console.log(newBlindArray)

    const newCouponCreator = newStrings.map((m, index) =>
        <div key={m} className={WillWeBlind(newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const secondCouponCreator = newStringsTwo.map((m, index) =>
        <div key={m} className={WillWeBlind(secondBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const thirdCouponCreator = newStringsThree.map((m, index) =>
        <div key={m} className={WillWeBlind(thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const slicedArrayPartUp = [...newStrings].splice(0, 27)
    const slicedArrayParDown = [...newStrings].splice(27, 27)

    const secondSlicedArrayPartUp = [...newStringsTwo].splice(0, 27)
    const secondSlicedArrayParDown = [...newStringsTwo].splice(27, 27)


    const partUpCouponCreator = slicedArrayPartUp.map((m, index) =>
        <div key={m} className={WillWeBlind(newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const partDownCouponCreator = slicedArrayParDown.map((m, index) =>
        <div key={m} className={WillWeBlind(secondBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const secondPartUpCouponCreator = secondSlicedArrayPartUp.map((m, index) =>
        <div key={m} className={WillWeBlind(thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )

    const secondPartDownCouponCreator = secondSlicedArrayParDown.map((m, index) =>
        <div key={m} className={WillWeBlind(forthBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p></div>
    )


    console.log(newStrings)
    console.log(slicedArrayPartUp)
    console.log(slicedArrayParDown)
    console.log(newBlindArray)
    console.log(secondBlindArray)

    const Printing = () => {
        window.print();
    }

    return (
        <>
            <div className={'twoCoupons'}>


                {Props.cssBoolean > 80 ?
                    <div className={"BigCouponWrapper"}>
                        <div className={"bigCoupon"}>
                            <div className={"BigCouponPart"}>
                                {partUpCouponCreator}
                            </div>
                            <div className={"BigCouponPart"}>
                                {partDownCouponCreator}
                            </div>


                            {/*{newCouponCreator}*/}

                        </div>
                        <div className={"bigCoupon"}>
                            <div className={"BigCouponPart"}>
                                {secondPartUpCouponCreator}
                            </div>
                            <div className={"BigCouponPart"}>
                                {secondPartDownCouponCreator}
                            </div>


                            {/*{newCouponCreator}*/}

                        </div>

                    </div>
                    :
                    (<>
                        <div className={'couponWrapper'}>
                            <div className={"coupon"}>

                                {newCouponCreator}

                            </div>

                            <div className={"coupon"}>

                                {secondCouponCreator}

                            </div>

                            <div className={"coupon"}>

                                {thirdCouponCreator}

                            </div>
                        </div>
                    </>)}
                {/*<div className={Props.cssBoolean>80?"bigCoupon":"coupon"}>*/}
                {/*    {newCouponCreator}*/}

                {/*</div>*/}

                <div className={"couponButtons"}>
                    <button onClick={ButtonGenerating}>GENERATE COUPON</button>
                    <button onClick={Printing}>PRINT</button>
                    {/*<a href="#" onClick={Printing} className="action-print">Распечатать</a>*/}
                    {/*<a href= "Coupon.tsx" target="_blank"><button >PRINT COUPON</button></a>*/}
                </div>
            </div>

        </>
    );
};

export default Coupon;