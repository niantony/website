import React from 'react'
import './Section.css'
import memoji from '../images/memoji.png'

function About() {
    return (
        <div className='container'>
            <div className='heading'>
                <img src={memoji} alt='About Memoji'/>
                <div className='heading-title'>
                    <h2>About</h2>
                    <h1>Read about me</h1>
                </div>
            </div>
            <div className='body'>
                <p>My name is <span>Antony Ni</span>, a software engineer at <span>Ford Motor Company.</span> </p>
                <p>
                    My interests within the industry lie in <span>full stack development</span>. On the <span>frontend</span>, I enjoy creating beautiful and 
                    seamless user experiences and on the <span>backend</span> I enjoy working with databases and optimizing them.
                </p>
                <p>Aside from the industry, my interests lie in several activities: weight lifting, personal finance, traveling, and hiking.</p>
            </div>
        </div>
    )
}

export default About