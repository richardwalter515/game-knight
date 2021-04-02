import React from 'react';
import {useState} from 'react';
import one from '../assets/dice/dice-one.png';
import two from '../assets/dice/dice-two.png';
import three from '../assets/dice/dice-three.png';
import four from '../assets/dice/dice-four.png';
import five from '../assets/dice/dice-five.png';
import six from '../assets/dice/dice-six.png';

function DiceCard(props) {
    const [diceNumber, setDiceNumber] = useState();
    const [diceImage, setDiceImage] = useState();

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    const setImage = () => {
        if (diceNumber === 1) {
            setDiceImage(one)
        } else if (diceNumber === 2){
            setDiceImage(two)
        } else if (diceNumber === 3){
            setDiceImage(three)
        } else if (diceNumber === 4){
            setDiceImage(four)
        } else if (diceNumber === 5){
            setDiceImage(five)
        } else if (diceNumber === 6){
            setDiceImage(six)
        }
    }

    const diceRoll = () => {
        let randomNumber = getRandomNumber(1, 6);
        setDiceNumber(randomNumber);
        setImage();
    }

    return (
        <div>
            <h3>This dice has a value of {diceNumber}</h3>
            <img src={diceImage}></img>
            <button onClick={diceRoll}>Roll</button>
        </div>
    )

};

export default DiceCard;