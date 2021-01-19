import React from 'react'

import "./Card.css"

function Card({ children, onClick, classNames }) {
    return (
        <div onKeyPress={onClick} role="button" className={`c-card ${classNames}`} tabindex="0" onClick={onClick}>
            {children}
        </div>
    )
}

export default Card
