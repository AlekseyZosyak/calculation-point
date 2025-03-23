import { useState } from "react";
import { Buttons } from "../controler/controler";
import './generator-points.scss';

export const Generator = () => {
    const [gen, setGen] = useState('?');
    const [num, setNum] = useState(0);

    const generatorPoints = (number) => {
        const arr = [];
    
        for (let i = 0; i < number; i++) {
            const number1 = Math.floor(Math.random() * (5 - 0) + 0);
            const number2 = Math.floor(Math.random() * (5 - 0) + 0);
            const str = `${number1}:${number2}`;
            arr.push(str);
        }
    
        return arr.join(',');
    };

    const startGenerator = () => {
        setGen(generatorPoints(num));  
    }

    return (
        <div>
            <p>generator match</p>
            <div className="generator">
                <Buttons text={'+'} func={() => setNum(num + 1)}/>
                <Buttons text={num} func={startGenerator}/>
                <Buttons text={'-'} func={() => setNum(num - 1)}/>
                <span>{gen}</span>
            </div>
        </div>
    )
}



