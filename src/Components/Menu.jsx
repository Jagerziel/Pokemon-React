import '../App.css';
import { useState } from 'react';

function Menu(props) {
    const { toggle, pokeList } = props

    const [contentUrl, setContentUrl] = useState("")
    



    return (   
        <ul className='PokeList'>
            {pokeList.map((pokemon , index) => ( 
                <li key={index} onClick={()=>{setContentUrl(pokemon.url)}}>
                {/* <li key={index} > */}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1) }</li>
                ))
            }
        </ul>
    );
}

export default Menu