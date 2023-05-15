import React from 'react'
import './label.css'

const Label = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="label">
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} value={props.valor}/>
        </div>
    )
}

export default Label