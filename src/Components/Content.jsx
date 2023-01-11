import { useState , useEffect } from 'react';
import '../App.css';

function Content(props) {
    const { contentUrl } = props
    const [ pokeData , setPokeData ] = useState({})
    const [ data, setData] = useState([{name: 'loading'}])
    
    useEffect(() => {
        fetch(`${contentUrl}`)
            .then(res => res.json())
            .then(data => setPokeData(data))

    }, [contentUrl]);
    if (!pokeData.moves) return <h1>Loading…</h1>;
    return (
        <div className="Content">
            <div className='box'>
                <h1>{pokeData?.name?.charAt(0).toUpperCase() + pokeData?.name?.substring(1)}</h1>
                <img className="pokeImg" src={pokeData?.sprites?.front_default} alt="Logo" />
            </div>
            {console.log(pokeData)}
            <div className='box'>
                <h3>Moves</h3>
                <ul>
                    <li>{pokeData?.moves[0].move.name}</li>
                    <li>{pokeData?.moves[1].move.name}</li>
                    <li>{pokeData?.moves[2].move.name}</li>
                </ul>

            </div>
        </div>
    );  
}

export default Content;