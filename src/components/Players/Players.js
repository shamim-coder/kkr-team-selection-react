import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Players.css'

const Players = (props) => {

    const playerAddHandler = props.addHandler
    const player = props.player
    const { picture, fName, lName, club, matches, runs, wickets, playerRole, basePrice } = props.player
    return (
        <>
            <>
                <Card className="player">
                    <div className="player-img box">
                        <Card.Img variant="top" src={picture} />

                        <div class="ribbon"><span>{playerRole}</span></div>
                    </div>
                    <Card.Body>
                        <p className="name">{fName} <strong> {lName} </strong></p>
                        <p className="price">Base Price: {basePrice}</p>
                        <div className="performance">
                            <div className="match">
                                <h4>{matches}</h4>
                                <span>MATCHES</span>
                            </div>
                            <div className="run">
                                <h4>{runs}</h4>
                                <span>RUNS</span>
                            </div>
                            <div className="wicket">
                                <h4>{wickets}</h4>
                                <span>WICKETS</span>
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <button onClick={() => playerAddHandler(player)}><FontAwesomeIcon icon={faPlusCircle} /> ADD TO LIST</button>
                    </Card.Footer>
                </Card>
            </>
        </>
    );
};

export default Players;






