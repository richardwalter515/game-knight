import React from 'react';
import {useState} from 'react';
import one from '../assets/dice/dice-one.png';
import two from '../assets/dice/dice-two.png';
import three from '../assets/dice/dice-three.png';
import four from '../assets/dice/dice-four.png';
import five from '../assets/dice/dice-five.png';
import six from '../assets/dice/dice-six.png';

function DiceCard() {
    const [diceNumber, setDiceNumber] = useState();
    const [diceImage, setDiceImage] = useState();

    const imageArr = [one, two, three, four, five, six];

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    const diceRoll = () => {
        let randomNumber = getRandomNumber(1, 6);
        setDiceNumber(randomNumber);
        setDiceImage(imageArr[randomNumber-1]);
    }
    
    return (
        <div className="diceCard">
            <img src={diceImage}></img>
            <button onClick={diceRoll}>Roll</button>
        </div>
    )
};

export default DiceCard;