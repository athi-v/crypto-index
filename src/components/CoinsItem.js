import React from 'react'
import millify from "millify"
import './Coins.css'


const CoinItem = (props) => {
    return (
        <div className='coin'>
        <div className='rows'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img className='imgs' src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>R{props.coins.current_price.toLocaleString()}</p>
            <p className='hide'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide'>R{millify(props.coins.total_volume)}</p>
            <p className='hide'>R{millify(props.coins.market_cap)} </p>

  
</div>
</div>
    )
}

export default CoinItem