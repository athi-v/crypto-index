import React from 'react'
import CoinsItem from './CoinsItem'


import './Coins.css'

const Coins = (props) => {

  return (
  <div className='coins' >
  <div>
  <div className='heading'>

      <p>Rank</p>
      <p className='name'>Coin Name</p>
      <p>Price</p>
      <p className='hide'>24h</p>
      <p className='hide'>Volume</p>
      <p className='hide'>Market Cap</p>
</div>
 

{props.coins.map(coins => {
    return (
    <CoinsItem coins ={coins} key={coins.id} />
    )
  })}
</div>
</div>
);
};

export default Coins;
