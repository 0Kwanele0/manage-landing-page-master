import React from 'react'
import './styles/about.css'
import { aboutList } from './aboutlist'

function About() {
    return (
        <div className="about">
            <div className="about__intro">
                <h2>What's different about Manage</h2>
                <p>
                    Manage provides all the functionality
                    your team needs, without the complexity.
                    Our software is tailor-made for modern
                    degital product teams
                </p>
            </div>
            <div className="about__list">
                {
                    aboutList.map((element, key) => {
                        return (
                        <div className="indi">
                            <div className="head">
                                    <h3 className="number">{ element.number}</h3>
                                    <h3 className="title">{ element.title}</h3>
                            </div>
                            <p>
                                {element.description}
                            </p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About
