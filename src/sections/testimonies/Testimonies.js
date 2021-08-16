import React from 'react'
import './styles/testimonies.css'
import BtnPrimary from '../../components/btn/btn-primary'
import ScrollContainer from 'react-indiana-drag-scroll'
import { testimonyLists } from './testimonyList'

function Testimonies() {
    return (
        <div className="testimony">
            <h2>What they've said</h2>
            <ScrollContainer className="testimony__container">
                    {
                        testimonyLists.map((ele, key) => {
                            return (
                                <div className="testimony__indi">
                                    <img src={ ele.avatar} alt="profile" />
                                    <h4>{ ele.name}</h4>
                                    <p>{ ele.testimony}</p>
                                </div>
                            )
                        })
                    }
            </ScrollContainer>
            <BtnPrimary text="Get Started" />
        </div>
    )
}

export default Testimonies
