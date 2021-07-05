import React, { useState } from 'react';

export default function CharacterCard(props) {
    const bool = false
    const [active, setActive] = useState(bool);
    const activate = () =>{setActive(!bool)}

    const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}