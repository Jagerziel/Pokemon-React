import './App.css';
import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar.jsx';
import Menu from './Components/Menu.jsx';

function App() {
  const [ pokeList, setPokeList] = useState([{name: 'loading'}])
  const [toggle, setToggle] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then(data => setPokeList(data.results))
  }, [pageLoad]);  
  

  console.log(pokeList)
  return (
    <div className="App">
      <Navbar toggle={ toggle } setToggle={ setToggle } pokeList={ pokeList }/>
      <div className="NavAndContent">


      </div>
      Hello
    </div>
  );
}

export default App;
