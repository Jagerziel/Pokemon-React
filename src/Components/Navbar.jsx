//Imports
import '../App.css';
import { useState } from 'react';
import Menu from './Menu.jsx';

//Build Navbar Component
function Navbar(props) {
    //Assign Variables
    const { toggle, setToggle , pokeList , setContentUrl } = props
    //Set Toggle for Display
    const display = () => {
        setToggle(prev => !prev)
    } 
    //Handling Toggle
    function handleToggle (e) {
        e.preventDefault()
        console.log("Toggled")
    }
    return (   
        <>
        {/* Create Navbar with Menu Items */}
            <div className='NavbarContainer'>
                <h1 className="Navbar">Pokemon</h1>
                <button className={toggle === false ? "Burger" : "Burger90"} onClick={(e) => {handleToggle(e); display()}}>☰</button>
            </div>
            { toggle && <Menu className="Menu" pokeList={ pokeList} setContentUrl={setContentUrl}/> }
        </>
    );
}
//Export Component
export default Navbar