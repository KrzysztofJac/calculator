import React from 'react';

const Calculator = ({ text, sumuj }) => {

    for (let i = 0; i < 5; i++) {
        console.log("I", i);
    }

    const guziki = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return <><div>{guziki.map(g => <div onClick={() => sumuj(g)} className="przycisk">{g}</div>)
        
    }</div><div className='calc1'><div>1</div>
        <div>2</div><div>3</div><div>4</div></div></>;


}

export default Calculator;