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
            <Card style={{ width: '18rem' }} key={props.index}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>My Score: {score}</Card.Text>
                    <form onSubmit={handleSubmit(addScores)}>
                        <label>Names of Players or Teams</label>
                        <input type="text" name="points" placeholder="add points" ref={register} />
                        <button>Click to add points</button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PlayerCard;