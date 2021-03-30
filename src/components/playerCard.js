import React from 'react';
import {useState} from 'react';
import { Card, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';


function PlayerCard(props) {
    const [score, setScore] = useState(0);
    const { register, handleSubmit, errors } = useForm(); 
    const addScores = (data) => {
        const newPoints = parseInt(data.points);
        console.log('newPoints:', newPoints)
        setScore(score + newPoints);
    }

    return(
        <div>
            <Card key={props.index} className="playerCard">
                <Card.Body>
                    <Card.Title className="playerCardName">{props.name}</Card.Title>
                    <Card.Text><strong>My Score: {score}</strong></Card.Text>
                    <form onSubmit={handleSubmit(addScores)}>
                        <input type="text" name="points" placeholder="add points" ref={register} />
                        <button>Click to add points</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PlayerCard;