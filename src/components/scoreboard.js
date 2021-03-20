import React, { useEffect } from 'react';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
import PlayerCard from './playerCard';
import Nav from './nav';

function Scoreboard() {
    const { register, handleSubmit, errors } = useForm(); 
    const [numberGamePlayers, setNumberGamePlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);
    const [playerStats, setPlayerStats] = useState({});

    const onSubmit = (data) => {
        const numberOfPlayersInput = parseInt(data.players);
        setNumberGamePlayers(numberOfPlayersInput);
    }

    const onSubmitPlayer = (data) => {
        const playerNameInput = JSON.stringify(data.playerName);
        setPlayerNames([...playerNames, playerNameInput]);
        console.log('player names in state:', playerNames)

    }
    
    if (numberGamePlayers > 0 && numberGamePlayers !== playerNames.length) {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                <h3>{numberGamePlayers} Players</h3>
                <form onSubmit={handleSubmit(onSubmitPlayer)}>
                        <label>Names of Players or Teams</label>
                        <input type="text" name="playerName" placeholder="Name" ref={register} />
                        <button>click to add player</button>
                </form>
            </div>
        )
    } else if (numberGamePlayers > 0 && numberGamePlayers === playerNames.length) {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                    {playerNames.map((playerName, index) => 
                            <PlayerCard name = {playerName} index = {index}/>
                        )
                    };
            </div>
        )
        
    }else {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                    {/* how many players?  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Number of Players or Teams</label>
                        <input type="text" name="players" placeholder="Enter number" ref={register} />
                        <button>submit</button>
                    </form>
            </div>
            //then for each player we will generate a counter where the user can enter points to add, and when they press submit they will be added to the users total points.
            //when the game is over, press the game over button to reset to the beginning.
        )

    }
}

export default Scoreboard;