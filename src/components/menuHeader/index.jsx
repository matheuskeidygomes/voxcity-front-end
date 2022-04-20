import React, {useState} from "react";
import './index.css';
import MenuMobile from '../../assets/menu.png';
import Logo from "../logo";
import MenuNav from "../menuNav";

export default function MenuHeader() {

    const [menuActive, setMenuActive] = useState(false);

    return <>

        <header className="menu-header">

            <Logo/>

            <MenuNav active={menuActive} onClick={()=> setMenuActive(!menuActive)}/>

            {!menuActive && 
            
                <img className="menu-mobile" src={MenuMobile} alt="menu-mobile" onClick={() => setMenuActive(!menuActive)} /> 
                
            }

        </header>

    </>

}