import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PlayersArea.css'
import playerData from '../../resources/player-data.json'
import Players from '../Players/Players';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const PlayersArea = () => {
    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState([])
    useEffect(() => {
        setPlayers(playerData)
    }, [])
    console.log();
    const playerAddHandler = (player) => {
        const newPlayer = [...selectedPlayer, player]
        setSelectedPlayer(newPlayer)
    }
    return (
        <section className="squad-area">
            <Container fluid>
                <h1>IPL Squad 2021</h1>
                <Row>
                    <Col className="players" md={9}>
                        <Row>
                            {
                                players.map(player => <Players addHandler={playerAddHandler} player={player} />)
                            }
                        </Row>
                    </Col>
                    <Col className="selected-player" md={3}>
                        <SelectedPlayers selectedPlayer={selectedPlayer} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PlayersArea;