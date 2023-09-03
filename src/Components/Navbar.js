import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { filterBooks } from '../Utils/NavbarUtil';
export default function Navbar(props) {
    props.location.current=useLocation()
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" style={{color:'deepskyblue',marginLeft:'5%'}} href='/'>Welcome To STEP BOOK Library</a>
            <Link style={{textDecoration:'none',color:'black'}} to="/">Home</Link>
            <Link style={{textDecoration:'none',color:'black'}} to="/favorites">Favorites</Link>
            <Link style={{textDecoration:'none',color:'black'}} to="/cards">Your Added Books To Card</Link>

            <form style={{marginRight:'5%'}} onSubmit={(e)=>e.preventDefault()} className="form-inline">
                <div className="input-group">
                    <input onChange={(e)=>props.setInput(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search" id='input' />
                    <div className="input-group-append">
                  
                    </div>
                </div>
            </form>
        </nav>
    )
}
