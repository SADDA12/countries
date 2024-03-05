import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
        <div>
        <h1>X</h1>
    </div>

    <div>
        <ul>
            <li><Link className='links' to="/">Home</Link></li>
            <li><Link className='links' to="/about">About</Link></li>
            <li><Link className='links' to="/">Contact</Link></li>
            <li><Link className='links' to="/countries">Countries</Link></li>
            <li><Link className='links' to="/country">Country</Link></li>
        </ul>
    </div>

    <div>
        <button>Sign up</button>
    </div>
    </header>
    
  )
}

