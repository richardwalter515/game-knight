import React from 'react';
import GKLogo from '../assets/game-knight-logo.png'

function Home() {
    return (
        <div>
            <h1 className='letsKeepScore'>Welcome to GameKnight!</h1>
            <br></br>
            <img src={GKLogo} alt="GameKnight Logo"></img>
            <p>A tool to accompany any game</p>
            <p class="greyOut">- © GameKnight -</p>
        </div>
    )
}

export default Home;