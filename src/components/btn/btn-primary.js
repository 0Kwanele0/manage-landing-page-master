import React from 'react'
import './styles/btn-primary.css'

function BtnPrimary(props) {
    return (
        <button className="btn-primary">{ props.text}</button>
    )
}

export default BtnPrimary
