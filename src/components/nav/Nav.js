import React, {useRef} from 'react'
import './styles/nav.css'
import logo from '../../images/logo.svg'
import menu from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import BtnPrimary from '../btn/btn-primary'

function Nav() {
    let closing = useRef(null)
    let listy = useRef(null)
    let open = useRef(null)

    window.addEventListener('resize', function () { 
        window.location.reload(); 
    });

    function openNav() {
        listy.style.display= "flex"
        closing.style.display= "block"
        open.style.display= "none"
    }
    function closeNav() {
        listy.style.display = "none"
        closing.style.display = "none"
        open.style.display = "block"
    }

    return (
        <div className="nav">
            <img className="nav__logo" src={ logo } alt="logo"/>
            <ul className="nav__list">
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
            <ul ref={(ve)=> {listy = ve}}  className="nav__list-mob">
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
            </ul>
            <div className="nav__btn">
                <BtnPrimary text="Get Started" />
            </div>
            <img ref={(el)=> {open = el}} className="nav__menu" src={menu} alt="icon" onClick={ openNav }/>
            <img ref={(el)=> {closing = el}} className="nav__close" src={ close} alt="icon" onClick={ closeNav }/>
        </div>  
    )
}

export default Nav
