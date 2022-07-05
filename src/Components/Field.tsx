import React from 'react';

type FieldPropsType = {
    partOfField: number[]
    color: number[]
}
const Field = (Props: FieldPropsType) => {
    // <div key={m} className={[m]===Props.color?"coloredContainer": "container"}><p>{[m]}</p></div>)
//const classnameDetected = Props.partOfField.fiter(array(f)!==)

    const ContainerCreator = Props.partOfField.map(m =>
        <div key={m} className={"container"}><p>{[m]}</p></div>)


    return (
        <div className={"playingFieldWrapper"}>
            {ContainerCreator}

        </div>
    );
};

export default Field;