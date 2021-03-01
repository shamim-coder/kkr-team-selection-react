import React from 'react';

const SelectedPlayers = (props) => {
    console.log(props);
    const player = props.selectedPlayer
    const totalBasePrice = player.reduce((acc, curr) => {
        return acc = acc + curr.basePrice
    }, 0)
    console.log(totalBasePrice);
    return (
        <div>
            <h1>{player.length}</h1>
            <p className="base-price">Total Base Price: {totalBasePrice}</p>
        </div>
    );
};

export default SelectedPlayers;