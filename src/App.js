import './App.css';
import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Menu from './Components/Menu.jsx';
import Content from './Components/Content.jsx';

function App() {
  const [ pokeList, setPokeList] = useState([{name: 'loading'}])
  const [ toggle, setToggle ] = useState(false)
  const [ contentUrl, setContentUrl ] = useState(null)
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then(data => setPokeList(data.results))
  }, []);  
  
  return (
    <div className="App">
      <Navbar toggle={ toggle } setToggle={ setToggle } pokeList={ pokeList } setContentUrl={setContentUrl}/>
      <div className="NavAndContent">
        {/* { toggle && <Menu className="Menu" pokeList={ pokeList} setContentUrl={setContentUrl}/> } */}
        { contentUrl && <Content contentUrl={ contentUrl } /> }

      </div>
    </div>
  );
}

export default App;
