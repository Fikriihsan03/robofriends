import React from 'react';
import './Card.css'


const card = ({name,email,id})=>{
    return(
        <div className = 'bg-light-blue dib br3 pa3 ma2 grow bw-5 shadow-2'> 
            <img alt="robots" src={`https://robohash.org/${id}?set=set3`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
} 
export default card


