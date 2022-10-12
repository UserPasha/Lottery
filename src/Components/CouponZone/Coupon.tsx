import React from 'react';
import logo from "../../Common/assets/images/caretta-beach.png"

type CouponPropsType = {
    cssBoolean: number
    lock: boolean
    couponPartOne: number[]
    couponPartTwo: number[]
    couponPartThree: number[]
    couponPartFour: number[]
    toggler: () => void
    WillWeBlind: (arr: number[], index: number) => boolean | undefined
    ButtonGenerating: () => void
    newBlindArray: number[]
    secondBlindArray: number[]
    thirdBlindArray: number[]
    forthBlindArray: number[]
}

const Coupon = (Props: CouponPropsType) => {

    const firstBigCouponFirstHalf = Props.couponPartOne.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const firstBigCouponSecondHalf = Props.couponPartTwo.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.secondBlindArray, index) ? "blindItem" : 'couponItem'}>
            <p>{m}</p></div>
    )

    const secondBigCouponFirstHalf = Props.couponPartThree.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const secondBigCouponSecondHalf = Props.couponPartFour.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.forthBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )
    const firstMiniCoupon = Props.couponPartOne.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.newBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const secondMiniCoupon = Props.couponPartTwo.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.secondBlindArray, index) ? "blindItem" : 'couponItem'}>
            <p>{m}</p></div>
    )

    const thirdMiniCoupon = Props.couponPartThree.map((m, index) =>
        <div key={m} className={Props.WillWeBlind(Props.thirdBlindArray, index) ? "blindItem" : 'couponItem'}><p>{m}</p>
        </div>
    )

    const Printing = () => {
        window.print();
    }

    return (
        <>
            {Props.lock
                ?
                <div className={"closedCoupon"}>
                    <button onClick={Props.toggler}>PRINT COUPONS</button>
                </div>
                :
                <div className={'twoCoupons'}>

                    {Props.cssBoolean > 80 ?

                        <div className={"bigCouponSpace"}>
                            {/*BigComponet partOne={firstBigCouponFirstHalf} partTwo ={firstBigCouponSecondHalf}*/}
                            <div className={"bigCoupon"}>
                                <div className={"sideBigLogo"}><img src={logo}/></div>
                                <div className={"BigCouponWrapper"}>
                                    <div className={"BigCouponPart"}>
                                        {firstBigCouponFirstHalf}
                                    </div>
                                    <div className={"BigCouponPart"}>
                                        {firstBigCouponSecondHalf}
                                    </div>
                                </div>

                            </div>
                            <div className={"bigCoupon"}>
                                {/*BigComponet partOne={firstBigCouponFirstHalf} partTwo ={firstBigCouponSecondHalf}*/}
                                <div className={"sideBigLogo"}><img src={logo}/></div>
                                <div className={"BigCouponWrapper"}>
                                    <div className={"BigCouponPart"}>
                                        {secondBigCouponFirstHalf}
                                    </div>
                                    <div className={"BigCouponPart"}>
                                        {secondBigCouponSecondHalf}
                                    </div>
                                </div>
                            </div>

                        </div>
                        :
                        (<>
                            <div className={'couponSpace'}>

                                {/*Componet coupon={firstMiniCoupon}*/}
                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>{firstMiniCoupon}</div>
                                </div>

                                 {/*Componet coupon={secondMiniCoupon}*/}
                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>{secondMiniCoupon}</div>
                                </div>

                                {/*Componet coupon={thirdMiniCoupon}*/}
                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>{thirdMiniCoupon}</div>
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