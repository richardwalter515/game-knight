import React from 'react';
import {useState} from 'react';
import DiceCard from "./diceCard";

function Dice() {
    const [diceOne, setDiceOne] = useState();
    const [diceTwo, setDiceTwo] = useState();
    const [diceToRoll, setDiceToRoll] = useState(0);


    const handleChange = (event) => {
        setDiceToRoll(parseInt(event.target.value));
        event.preventDefault();
    }

    if (diceToRoll === 0) {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Roll The Dice</h1>
                <form>
                    <label>
                        How many would you like to roll?
                        <select value={diceToRoll} onChange={handleChange}>
                            <option value="null">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                </form>
    
                <p class="greyOut">- © GameKnight -</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Roll The Dice</h1>
                {Array(diceToRoll).fill(<DiceCard />)}
                <p class="greyOut">- © GameKnight -</p>
            </div>
        )
    }
}

export default Dice;