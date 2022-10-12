import React from 'react';
import logo from "../../Common/assets/images/caretta-beach.png"
import CouponPart from "./CouponPart";

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

                            <div className={"bigCoupon"}>
                                <div className={"sideBigLogo"}><img src={logo}/></div>
                                <div className={"BigCouponWrapper"}>
                                    <div className={"BigCouponPart"}>
                                        <CouponPart partArray={Props.couponPartOne}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.newBlindArray}/>
                                    </div>
                                    <div className={"BigCouponPart"}>
                                        <CouponPart partArray={Props.couponPartTwo}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.secondBlindArray}/>

                                    </div>
                                </div>

                            </div>
                            <div className={"bigCoupon"}>
                                <div className={"sideBigLogo"}><img src={logo}/></div>
                                <div className={"BigCouponWrapper"}>
                                    <div className={"BigCouponPart"}>
                                        <CouponPart partArray={Props.couponPartThree}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.thirdBlindArray}/>
                                    </div>
                                    <div className={"BigCouponPart"}>
                                        <CouponPart partArray={Props.couponPartFour}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.forthBlindArray}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        :
                        (<>
                            <div className={'couponSpace'}>

                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>
                                        <CouponPart partArray={Props.couponPartOne}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.newBlindArray}/>
                                    </div>
                                </div>

                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>
                                        <CouponPart partArray={Props.couponPartTwo}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.secondBlindArray}/>
                                    </div>
                                </div>

                                <div className={"couponWrapper"}>
                                    <div className={"sideLogo"}><img src={logo}/></div>
                                    <div className={"coupon"}>
                                        <CouponPart partArray={Props.couponPartThree}
                                                    WillWeBlind={Props.WillWeBlind}
                                                    blindArray={Props.thirdBlindArray}/>
                                    </div>
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