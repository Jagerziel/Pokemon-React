//Imports
import { useState , useEffect } from 'react';
import '../App.css';

//Build Content Component
function Content(props) {
    //Assign Variables
    const { contentUrl } = props
    //Assign useStates
    const [ pokeData , setPokeData ] = useState({})
    const [ data, setData] = useState([{name: 'loading'}])
    //API request for individual pokemon data
    useEffect(() => {
        fetch(`${contentUrl}`)
            .then(res => res.json())
            .then(data => setPokeData(data))

    }, [contentUrl]);
    //Ensure details do not load prematurely
    if (!pokeData.moves) return <h1>Loading…</h1>;
    return (
        <div className="Content">
            {/* Heading and Image */}
            <div className='box'>
                <h1>{pokeData?.name?.charAt(0).toUpperCase() + pokeData?.name?.substring(1)}</h1>
                <img className="pokeImg" src={pokeData?.sprites?.front_default} alt="Logo" />
            </div>
            {/* Moves and Move List */}
            <div className='box2'>
                <h3>Moves</h3>
                <ul className='movesList'>
                    <li>{pokeData?.moves[0].move.name}</li>
                    <li>{pokeData?.moves[1].move.name}</li>
                    <li>{pokeData?.moves[2].move.name}</li>
                </ul>
            </div>
        </div>
    );  
}
//Export Component
export default Content;