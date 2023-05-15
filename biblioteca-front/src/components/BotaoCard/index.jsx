import React from 'react'
import './BotaoCard.css'

const BotaoCard = (props) => {
    return (<button className='BotaoCard' onClick={props.click}> {props.text}
    </button>)
}

export default BotaoCard