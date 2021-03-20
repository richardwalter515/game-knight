import React from 'react';

function PlayerNameForms(props) {
    for (let i = 0; i < props.numberOfPlayers; i++) {
        return (
            <form>
                <label>Player {i} name</label>
                <input type="text" name="players" placeholder="Enter name"/>
                <button>submit</button>
            </form>
        )
    }
}

export default PlayerNameForms