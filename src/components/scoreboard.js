import React, { useEffect } from 'react';
import {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PlayerNameForms from './playerNames';

function Scoreboard() {
    const { register, handleSubmit, errors } = useForm(); 
    const [numberGamePlayers, setNumberGamePlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);
    const [playerStats, setPlayerStats] = useState({});

    const onSubmit = (data) => {
    const numberOfPlayersInput = parseInt(data.players);
    setNumberGamePlayers(numberOfPlayersInput);
    }


    if (numberGamePlayers > 0) {
        return (
            <div>
                <h1>Let's Keep Score</h1>
                <h3>{numberGamePlayers} Players</h3>
            </div>
        )
        
    }else {
        return (
            <div>
                <h1>Let's Keep Score</h1>
                    {/* how many players?  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Number of Players or Teams</label>
                        <input type="text" name="players" placeholder="Enter number" ref={register} />
                        <button>submit</button>
                    </form>
    
                {/* //depending on how many players, we will generate forms to fill in names for each player. */}
            </div>
            //then for each player we will generate a counter where the user can enter points to add, and when they press submit they will be added to the users total points.
            //when the game is over, press the game over button to reset to the beginning.
        )

    }
}

export default Scoreboard