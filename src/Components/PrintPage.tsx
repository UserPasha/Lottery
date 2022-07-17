import React from 'react';

const PrintPage = () => {
    const Printing = () =>{
        window.print();
    }
    return (
        <div className={"printWrapper"}>


           {/*----*/}
           {/* TEST*/}
           {/* _________ ***** /|\*/}
           {/* test*/}
            <a href="#" onClick={Printing} className="action-print">Распечатать</a>
        </div>
    );
};

export default PrintPage;