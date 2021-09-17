import React from 'react'
import './styles/showcase.css'
import vector from '../../images/illustration-intro.svg'
import BtnPrimary from '../../components/btn/btn-primary'

function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase__vector">
                <img src={vector} alt="stats" />
            </div>
            <div className="showcase__cta">
                <h1>
                    Bring everyone together
                    to build better products
                </h1>
                <p className="para">
                    Manage makes it simple for
                    software teams to plan day-to-day
                    tasks while keeping the larger team's
                    goals in view.
                </p>
                <BtnPrimary text="Get Started" />
            </div>
        </div>
    )
}

export default Showcase
