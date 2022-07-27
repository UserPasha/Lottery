import React from 'react';

type CouponPropsType = {
    cssBoolean: number
    lock: boolean
    toggler: () => void
    slicedArrayPartUp: number[]
    slicedArrayParDown: number[]
    secondSlicedArrayPartUp: number[]
    secondSlicedArrayParDown: number[]
    WillWeBlind: (arr: number[], index: number) => boolean | undefined
    newBlindArray: number[]
    secondBlindArray: number[]
    thirdBlindArray: number[]
    forthBlindArray: number[]
    newStrings: number[]
    newStringsTwo: number[]
    newStringsThree: number[]
    ButtonGenerating: () => void
}

const Coupon = (Props: CouponPropsType) => {

    const partUpCouponCreator = Props.slicedArrayPartUp.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const partDownCouponCreator = Props.slicedArrayParDown.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.secondBlindArray, index) ? "blindItem" : 'couponItem'}>
            <p>{m}</p></div>
    )

    const secondPartUpCouponCreator = Props.secondSlicedArrayPartUp.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const secondPartDownCouponCreator = Props.secondSlicedArrayParDown.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.forthBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )
    const newCouponCreator = Props.newStrings.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const secondCouponCreator = Props.newStringsTwo.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.secondBlindArray, index) ? "blindItem" : 'couponItem'}>
            <p>{m}</p></div>
    )

    const thirdCouponCreator = Props.newStringsThree.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const Printing = () => {
        window.print();
    }

    return (
        <>{Props.lock ?
            <div className={"closedCoupon"}>
                <button onClick={Props.toggler}>PRINT COUPONS</button>
            </div>
            :
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

                        </div>
                        <div className={"bigCoupon"}>
                            <div className={"BigCouponPart"}>
                                {secondPartUpCouponCreator}
                            </div>
                            <div className={"BigCouponPart"}>
                                {secondPartDownCouponCreator}
                            </div>

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


                <div className={"couponButtons"}>
                    <button onClick={Props.ButtonGenerating}>GENERATE COUPONS</button>
                    <button onClick={Printing}>PRINT</button>
                    <button onClick={Props.toggler}>CLOSE</button>

                </div>
            </div>}

        </>
    );
};

export default Coupon;