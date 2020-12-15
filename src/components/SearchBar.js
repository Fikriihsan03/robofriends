import React from 'react';


const SearchBar = ({searchfield,searchChange}) => {
    return(
        <div className="pa2">
         <input 
         type = 'search' 
         className ='pa3 ba b--green bg-lightest-blue'
          placeholder ='Search Robot'
          onChange ={searchChange}
          />
        </div>
    )
}
export default SearchBar;