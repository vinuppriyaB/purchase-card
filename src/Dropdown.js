import { Link } from "react-router-dom";

import {MenuItems} from "./MenuItems";
import React from "react";
import "./Navbar.css";

export function Dropdown({dropdown,closeMobileMenu}){
    
    return(
        
            <ul 
            className={dropdown?"dropdown-menu clicked":"dropdown-menu"}>
            { MenuItems.map((item,index)=>{
            return(
           <li>
               <Link to="/" 
               className={item.cName}
               onClick={closeMobileMenu}
               >
                   {item.title}
               </Link>
              
           </li>
            )
            })}

            </ul>
            

        

        
       

    )
}