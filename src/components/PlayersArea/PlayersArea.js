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

    const playerAddHandler = (player) => {
        const newPlayer = [...selectedPlayer, player]
        setSelectedPlayer(newPlayer)
    }
    return (
        <section className="squad-area">
            <Container fluid>
                <h1 className="title">IPL Squad 2021</h1>
                <Row>
                    <Col key={Math.random() * 33} className="players" md={9}>
                        <Row>
                            {
                                players.map(player => <Players key={Math.random() * player.id} addHandler={playerAddHandler} player={player} />)
                            }
                        </Row>
                    </Col>
                    <Col className="selected-player" md={3}>
                        <SelectedPlayers key={Math.random() * 55} selectedPlayer={selectedPlayer} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PlayersArea;