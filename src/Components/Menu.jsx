import '../App.css';
import { useState } from 'react';

function Menu(props) {
    const { toggle, pokeList , contentUrl , setContentUrl } = props
    console.log(contentUrl)
    return (  
        <div>
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

export default Menu