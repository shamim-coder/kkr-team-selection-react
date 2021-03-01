import React from 'react';
import './SelectedPlayers.css'

const SelectedPlayers = (props) => {
    const players = props.selectedPlayer
    const totalBasePrice = players.reduce((acc, curr) => {
        return acc = acc + curr.basePrice
    }, 0)

    return (
        <div>
            <div className="select-title">
                <h2>Selected Players: ({players.length})</h2>
                <p>Total Price: {totalBasePrice}</p>
            </div>

            {
                players.map(player => {
                    const { fName, lName, basePrice, picture, id } = player
                    return (
                        <div key={Math.random() * id} className="select-player-wrap">
                            <img src={picture} alt={picture} />
                            <div className="player-text">
                                <p className="name">{fName + ' ' + lName}</p>
                                <p className="base-price">Base Price: {basePrice}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default SelectedPlayers;