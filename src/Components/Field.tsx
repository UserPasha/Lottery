import React, {useState} from 'react';

type FieldPropsType = {
    startNumbers: number[]
    color: number[]
    arrayToPush: number[]
}
const Field = (Props: FieldPropsType) => {

    const ContainerCreator = Props.startNumbers.map(m =>
        <div key={m} className={
            Props.color[0] === m || Props.color[1] === m ||
            Props.color[2] === m || Props.color[3] === m ||
            Props.color[4] === m || Props.color[5] === m ||
            Props.color[6] === m || Props.color[7] === m ||
            Props.color[8] === m || Props.color[9] === m ||
            Props.color[10] === m || Props.color[11] === m ||
            Props.color[12] === m || Props.color[13] === m ||
            Props.color[14] === m || Props.color[15] === m ||
            Props.color[16] === m || Props.color[17] === m ||
            Props.color[18] === m || Props.color[19] === m ||
            Props.color[20] === m || Props.color[21] === m ||
            Props.color[22] === m || Props.color[23] === m ||
            Props.color[24] === m || Props.color[25] === m ||
            Props.color[26] === m || Props.color[27] === m ||
            Props.color[28] === m || Props.color[29] === m ||
            Props.color[30] === m || Props.color[31] === m ||
            Props.color[32] === m || Props.color[33] === m ||
            Props.color[34] === m || Props.color[35] === m ||
            Props.color[36] === m || Props.color[37] === m ||
            Props.color[38] === m || Props.color[39] === m ||
            Props.color[40] === m || Props.color[41] === m ||
            Props.color[42] === m || Props.color[43] === m ||
            Props.color[44] === m || Props.color[45] === m ||
            Props.color[46] === m || Props.color[47] === m ||
            Props.color[48] === m || Props.color[49] === m ||
            Props.color[50] === m || Props.color[51] === m ||
            Props.color[52] === m || Props.color[53] === m ||
            Props.color[54] === m || Props.color[55] === m ||
            Props.color[56] === m || Props.color[57] === m ||
            Props.color[58] === m || Props.color[59] === m ||
            Props.color[60] === m || Props.color[61] === m ||
            Props.color[62] === m || Props.color[63] === m ||
            Props.color[64] === m || Props.color[65] === m ||
            Props.color[66] === m || Props.color[67] === m ||
            Props.color[68] === m || Props.color[69] === m ||
            Props.color[70] === m || Props.color[71] === m ||
            Props.color[72] === m || Props.color[73] === m ||
            Props.color[74] === m || Props.color[75] === m ||
            Props.color[76] === m || Props.color[77] === m ||
            Props.color[78] === m || Props.color[79] === m ||
            Props.color[80] === m || Props.color[81] === m ||
            Props.color[82] === m || Props.color[83] === m ||
            Props.color[84] === m || Props.color[85] === m ||
            Props.color[86] === m || Props.color[87] === m ||
            Props.color[88] === m || Props.color[89] === m ||
            Props.color[90] === m    ?
                'coloredContainer' :"container"}><p>{[m]}</p></div>)


    return (
        <div className={"playingFieldWrapper"}>
            {ContainerCreator}

        </div>
    );
};

export default Field;