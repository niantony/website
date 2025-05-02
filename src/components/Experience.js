import React from 'react'
import './Section.css'
import angular from '../images/angular.png'
import memoji from '../images/memoji_work.png'
import ford from '../images/fordlogo.jpg'
import mm from '../images/mm.jpg'
import htf from '../images/htf.png'
import java from '../images/java.png'
import react from '../images/react.png'
import ts from '../images/typescript.png'
import postgresql from '../images/postgresql.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import nodejs from '../images/nodejs.png'
import sql from '../images/sql-database-generic.png'
import jquery from '../images/jquery.png'
import { BiChevronRight } from 'react-icons/bi'

function Experience() {
    return (
        <div className='container-child'>
            <div className='heading'>
                <img src={memoji} alt='About Memoji'/>
                <div className='heading-title'>
                    <h2>Experience</h2>
                    <h1>My work experience</h1>
                </div>
            </div>
            <div className='list-heading'>
                <img src={ford} alt='Ford Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer</h2>
                    <h1>Ford Motor Company</h1>
                    <h3>July 2024 - Present</h3>
                </div>
                <div className='stack-container'>
                    <img src={angular} alt='Angular'/>
                    <img src={ts} alt='Typescript'/>
                    <img src={java} alt='Java'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Led enhancements to the <span>Web Based Dealer Ordering</span> platform using <span>Angular</span>, <span>Java</span>, and <span>Spring Boot</span> to capture
                real-time regional dealer feedback, enabling efficient capacity planning and contributing to <span>$100M+</span> in annual
                inventory cost savings</p>
                <p>Provided full-stack production support for critical dealer applications across North America, diagnosing and
                resolving issues in both <span>frontend</span> (Angular) and <span>backend</span> (Java/Spring) services and SQL workflows, ensuring 
                <span> 99.98%</span> uptime and rapid issue resolution within SLA targets for <span>3000+</span> dealerships</p>
                <p>Redesigned and implemented a full-stack microservice for <span>3000+</span> dealerships to prevent incomplete retail order
                submissions and ensure end-to-end data integrity across downstream systems</p>
            </div>
            <div className='list-heading'>
                <img src={ford} alt='Ford Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Ford Motor Company</h1>
                    <h3>June 2023 - Aug 2023</h3>
                </div>
                <div className='stack-container'>
                    <img src={java} alt='Java'/>
                    <img src={sql} alt='SQL'/>
                    <img src={jquery} alt='jQuery'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Developed <span>rapid replenishment center</span> enhancements on the <span>Supply Chain IT</span> team, resulting in a significant reduction in Ford Model E vehicle transit time from <span>6 months</span> to <span>5 days</span> for over <span>1000</span> dealerships</p>
                <p>Utilized <span>Java</span> and <span>SQL</span> to maintain an accurate list of previous dealer codes and to facilitate timely route
adjustments during re-invoicing, enhancing vehicle transport visibility and precision in estimated time of arrivals</p>
                <p>Employed <span>jQuery</span> and <span>JavaScript</span> to develop an intuitive front-facing web application for carrier management,
streamlining and enhancing the management process of over <span>100</span> carriers</p>
            </div>
            <div className='list-heading'>
                <img src={ford} alt='Ford Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Ford Motor Company</h1>
                    <h3>May 2022 - Aug 2022</h3>
                </div>
                <div className='stack-container'>
                    <img src={angular} alt='Angular'/>
                    <img src={ts} alt='Typescript'/>
                    <img src={java} alt='Java'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Designed and built a full-stack web application on the <span>Web Based Dealer Ordering</span> team to simplify and streamline the vehicle ordering process for <span>3000+</span> Ford and Lincoln dealerships</p>
                <p>Leveraged <span>Angular (TypeScript)</span> and <span>Spring Boot (Java)</span> to perform CRUD operations on a <span>MySQL</span> database, storing dealers’ vehicle order preferences</p>
                <p>Automated the deployment process using <span>Tekton Pipeline</span>, a continuous integration pipeline, to build frontend and backend services into a deployable state by automatically running unit tests</p>
            </div>
            <div className='list-heading'>
                <img src={mm} alt='Mission: Mentor Logo'/>
                <div className='heading-title'>
                    <h2>Software Engineer Intern</h2>
                    <h1>Mentor Labs (Startup, Acquired)</h1>
                    <h3>Aug. 2021 - Dec. 2021</h3>
                </div>
                <div className='stack-container'>
                    <img src={postgresql} alt='PostgreSQL'/>
                    <img src={ts} alt='Typescript'/>
                    <img src={react} alt='React'/>
                </div>
            </div>
            <div className='list-body'>
                <p>Developed a full-stack application using the <span>PERN</span> (PostgreSQL, Express.js, React.js, Node.js) stack to assist high school students in the college admissions process</p>
                <p>Leveraged <span>React.js</span> to create a seamless and responsive user experience (landing page, user dashboard, scholarships and summer programs pages)</p>
                <p>Implemented a <span>recommendation algorithm</span> to suggest scholarships and summer programs based on the current user’s background, academic profile, and interests</p>
            </div>
            <div className='list-heading'>
                <img src={htf} alt='Hack the Future Logo'/>
                <div className='heading-title'>
                    <h2>Backend Developer</h2>
                    <h1>Purdue Hack the Future</h1>
                    <h3>Sep. 2020 - Jan. 2021</h3>
                </div>
                <div className='stack-container'>
                    <img src={mongodb} alt='MongoDB'/>
                    <img src={express} alt='Express'/>
                    <img src={nodejs} alt='Node.js'/>
                </div>
            </div>
            <div className='list-body-last'>
                <p>Worked in an Agile environment to build a web application using the <span>MERN</span> stack for <span>NICHES Land Trust</span> to display and store information about various parks and their respective landmarks and trails</p>
                <p>Incorporated <span>geolocation services</span> to guide users on park trails/hikes using interactive landmarks and waypoints</p>
                <p>Took charge of the backend server by utilizing <span>Express.js</span> and <span>Node.js</span> for server-side development and creating a database with interconnected schemas and models using <span>MongoDB</span> to build a <span>RESTful API</span></p>
            </div>
        </div>
    )
}

export default Experience