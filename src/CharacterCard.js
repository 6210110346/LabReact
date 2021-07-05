import React, { useState,useEffect } from 'react';

export default function CharacterCard(props) {

    const [active, setActive] = useState(false);
    const activate = () => {
        if (!active) {
            setActive(true)
            props.activationHandler(props.value)
        }
    }
    useEffect(()=> {} )
    const className = `card ${active ? 'activeCard' : ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}