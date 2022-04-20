import React from "react";
import './index.css';
import { isLogged } from "../../services/auth";
import X from '../../assets/x.png';
import { useNavigate } from 'react-router-dom';
import { DoLogout } from "../../services/auth";

export default function MenuNav(props) {

    const navigate = useNavigate();
    const logged = isLogged();
    let menuActive = props.active ? "menu-active" : "menu-deactivated";

    function Logout() {
        DoLogout();
        window.location.href = '/login';
    }

    return <>

        <nav className={`menu-nav`}>

            <ul className={`${menuActive}`}>

                {props.active &&

                    <img className={`menu-close-icon`} src={X} alt="X" onClick={() => props.onClick()} />

                }

                {logged ?
                    <>
                        <li className="menu-nav-item" onClick={() => Logout()} >Logout</li>
                    </>
                    :
                    <>
                        <li className="menu-nav-item" onClick={() => { navigate('/login'); props.onClick(); }}>Login</li>
                        <li className="menu-nav-item" onClick={() => { navigate('/register'); props.onClick(); }}>Cadastrar-se</li>
                    </>
                }

            </ul>

        </nav>

    </>

}