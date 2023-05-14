import React from 'react'
import './botao.css'

const Botao = (props) => {
    return (<button className='botao' onClick={props.click}>
        {props.children}
    </button>)
}

export default Botao