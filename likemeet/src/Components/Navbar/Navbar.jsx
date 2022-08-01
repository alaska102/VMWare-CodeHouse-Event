import * as React from 'react'; 
import Logo from '../Logo/Logo';
import './Navbar.css'; 
import { AiTwotoneMessage, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    return(
        <div className="nav-bar">
            <div className="nav-content">
                <Logo />
                <div className="nav-options">
                <AiTwotoneMessage />
                <AiOutlineMenu />
                </div>
            </div>
        </div>
    );
    

}