import React, {FC} from 'react';

type CouponPartType = {
    partArray: number[],
    WillWeBlind: (arr: number[], index: number) => boolean | undefined
    blindArray: number[]
}
const CouponPart: FC<CouponPartType> = ({partArray, blindArray, WillWeBlind}) => {
    return (
        <>
            {partArray.map((p, index)=>
                <div key={p} className={WillWeBlind(blindArray, index) ? 'blindItem' : 'couponItem'}>
                    <p>{p}</p>
                </div> )}
        </>

    );
};

export default CouponPart