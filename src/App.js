//Imports
import './App.css';
import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Menu from './Components/Menu.jsx';
import Content from './Components/Content.jsx';

function App() {
  //Set useStates
  const [ pokeList, setPokeList] = useState([{name: 'loading'}])
  const [ toggle, setToggle ] = useState(false)
  const [ contentUrl, setContentUrl ] = useState(null)
  //API call for pokemon list used for menu and navigation
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then(data => setPokeList(data.results))
  }, []);  
  return (
    <body className='Body'>
      <div className="App">
        {/* Set Navbar */}
        <Navbar toggle={ toggle } setToggle={ setToggle } pokeList={ pokeList } setContentUrl={setContentUrl}/>
        {/* Set Nav and Content */}
        <div className="NavAndContent">
          { contentUrl && <Content contentUrl={ contentUrl } /> }
        </div>
      </div>
    </body>
  );
}
//Export Component
export default App;
