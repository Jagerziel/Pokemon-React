//Imports
import '../App.css';
import { useState } from 'react';
//Build Menu Component
function Menu(props) {
    //Assign Variables
    const { toggle, pokeList , contentUrl , setContentUrl } = props
    return (  
        <div>
            {/* Create Menu Items List */}
            <ul className='PokeList'>
                {pokeList.map((pokemon , index) => ( 
                    <li className="item" key={index} onClick={()=>{ setContentUrl(pokemon.url)}}>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1) }</li>
                    ))
                }
            </ul>
        </div> 
    );
}
//Export Component
export default Menu