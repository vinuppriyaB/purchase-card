import { Link } from "react-router-dom";
import { CartIcon } from "./CartIcon";
import {Dropdown} from "./Dropdown";
import React,{useState} from "react";
import "./Navbar.css";



export function Navbar({count,setCount,history})
{
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const [dropdown,setDropdown]=useState(false);
    const closeMobileMenu=()=>setDropdown(!dropdown);
    return(
        
            <nav className="navbar">
            <div className="brand-title">Start Bootstrap</div>
            <div className="toggle-btn" onClick={handleClick}>
                <i className="fas fa-bars"/>
             </div>
             <div className={click?"menu-cart ":"menu-cart menu-cart-display"}>
            <div className={click?"navbar-menu ":"navbar-menu "}>
            <ul>
            <li className="nav-item">
                <Link to="/" className="nav-links" onClick={history.push("/")}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-links">
                    About
                </Link>
            </li>
            <li className="nav-item ">
                <Link to="/" className="nav-links " onClick={closeMobileMenu}>
                    Shop<i class="fas fa-caret-down"></i>
                </Link>
                {dropdown && <Dropdown dropdown={dropdown} setDropdown={setDropdown} closeMobileMenu={closeMobileMenu} />}
               
            </li> 
            </ul>
            </div>
            
            <div className="nav-item cart">
                <Link to="/" className="nav-links ">
                <CartIcon count={count} setCount={setCount} history={history}/>
                </Link>
               
            </div>
            </div>
            
           
        </nav>

      
        
    )
}
