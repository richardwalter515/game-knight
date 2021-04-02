import React from 'react';
import GKLogo from '../assets/game-knight-logo.png'

function Home() {
    return (
        <div>
            <h1>Welcome to GameKnight!</h1>
            <br></br>
            <img src={GKLogo} alt="GameKnight Logo"></img>
            <p class="greyOut">- © GameKnight -</p>
        </div>
    )
}

export default Home;