import * as React from 'react'; 
import Logo from '../Logo/Logo';
import './Navbar.css'; 
import { AiTwotoneMessage, AiOutlineMenu } from 'react-icons/ai'
import { IconContext } from 'react-icons' 

export default function Navbar() {
    return(
        <IconContext.Provider 
            value={{color: '#d62828', size: 80}} >
        <div className="nav-bar">
            <div className="nav-content">
                <div className="logo"><Logo /></div>
                <div className="container">
                <AiTwotoneMessage/>
                <AiOutlineMenu/>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
    

}