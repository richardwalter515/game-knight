import React, { useEffect } from 'react';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
import PlayerCard from './playerCard';
import Nav from './nav';

function Scoreboard() {
    const { register, handleSubmit, errors, reset } = useForm(); 
    const [numberGamePlayers, setNumberGamePlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);
    const [playerStats, setPlayerStats] = useState({});
    const [placeholder, setPlaceholder] = useState("Enter Player Name")

    const onSubmit = (data) => {
        const numberOfPlayersInput = parseInt(data.players);
        setNumberGamePlayers(numberOfPlayersInput);
    }

    const onSubmitPlayer = async (data) => {
        const playerNameInput = await JSON.stringify(data.playerName);
        setPlayerNames([...playerNames, playerNameInput]);
        reset();
        setPlaceholder("Enter Next Player Name");
    }
    
    if (numberGamePlayers > 0 && numberGamePlayers !== playerNames.length) {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                <div>
                    <h3>{numberGamePlayers} Players</h3>
                    <form onSubmit={handleSubmit(onSubmitPlayer)}>
                            <label>Names of Players or Teams</label>
                            <input type="text" name="playerName" placeholder={placeholder} ref={register} />
                            <button>click to add player</button>
                    </form>
                </div>
            </div>
        )
    } else if (numberGamePlayers > 0 && numberGamePlayers === playerNames.length) {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                    {playerNames.map((playerName, index) => 
                            <PlayerCard name = {playerName} index = {index} />
                        )
                    }
            </div>
        )
        
    }else {
        return (
            <div>
                <h1 className='letsKeepScore'>Let's Keep Score</h1>
                    {/* how many players?  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Enter the Number of Players or Teams</label> <br />
                        <input type="text" name="players" placeholder="Enter number" ref={register} />
                        <button>submit</button>
                    </form>
            </div>
            //when the game is over, press the game over button to reset to the beginning.
        )

    }
}

export default Scoreboard;