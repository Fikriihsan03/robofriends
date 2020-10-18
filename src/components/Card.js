import React from 'react';





const card = ({name,email,id})=>{
    return(
        <div className = 'bg-light-blue dib br3 pa3 ma2 grow bw-5 shadow-2'> 
            <img alt="robots" src={require(`../icon/00${id}-robot-${id}.png?200x200`)} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
} 
export default card