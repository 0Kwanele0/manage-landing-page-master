import React from 'react'
import logofoo from '../../images/log.svg'
import instagram from '../../images/icon-instagram.svg'
import facebook from '../../images/icon-facebook.svg'
import pintrest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'
import youtube from '../../images/icon-youtube.svg'
import BtnPrimary from '../btn/btn-primary'
import './styles/footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="footer__letter">
                <input placeholder="unpdates in your inbox..." />
                <BtnPrimary text="Go" />
            </div>
            <div className="footer__menu">
                <ul className="footer__list">
                    <li>Pricing</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
                <ul className="footer__list">
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className="footer__brand">
                <img src={pintrest} alt="icon" />
                <img src={instagram} alt="icon" />
                <img src={facebook} alt="icon" />
                <img src={twitter} alt="icon" />
                <img src={youtube} alt="icon" />
            </div>
        </div>
    )
}

export default Footer
