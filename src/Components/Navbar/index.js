import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="flex text-right justify-end bg-cyan-500 text-indigo-900">
                <Link to="/" className='float-right m-3'>home</Link>
                <Link to="/learn" className='float-right m-3'>learn</Link>
            </nav>
        </div>
    )
}

export default Navbar;
