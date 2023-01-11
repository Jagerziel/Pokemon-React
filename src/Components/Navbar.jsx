import '../App.css';
import { useState } from 'react';
import Menu from './Menu.jsx';

function Navbar(props) {
    const { toggle, setToggle , pokeList , setContentUrl } = props
    const display = () => {
        setToggle(prev => !prev)
    } 
    function hello() {console.log('hello')}

    function handleToggle (e) {
        e.preventDefault()
        console.log("Toggled")
    }

    return (   
        <>
            <div className='NavbarContainer'>
                <h1 className="Navbar">Pokemon</h1>
                <button className={toggle === false ? "Burger" : "Burger90"} onClick={(e) => {handleToggle(e); display()}}>☰</button>
            </div>
            { toggle && <Menu className="Menu" pokeList={ pokeList} setContentUrl={setContentUrl}/> }
        </>
    );
}

export default Navbar