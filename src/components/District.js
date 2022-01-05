import React from 'react';
import axios from "axios";

const District = ({state,district}) => {
    return (
        <div>
            <div style={{color:"white"}}>{state}</div>
            <div style={{color:"white"}}>{district}</div>
        </div>
    )
}

export default District
