import '../App.css';
import { useState } from 'react';

function Navbar(props) {
    const { toggle, setToggle } = props
    const display = () => {
        setToggle(prev => !prev)
    } 

    return (   
        <>
        <div className='NavbarContainer'>
            <h1 className="Navbar">Pokemon</h1>
            <button className={toggle === false ? "Burger" : "Burger90"} onClick={() => display()}>☰</button>
        </div>
        </>
    );
}

export default Navbar