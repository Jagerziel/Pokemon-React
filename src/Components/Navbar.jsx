import '../App.css';
import { useState } from 'react';

function Navbar(props) {
    const { toggle, setToggle } = props
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
        </>
    );
}

export default Navbar