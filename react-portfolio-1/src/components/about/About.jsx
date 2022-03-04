import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get TO Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About-img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>150+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderActive className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>

                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus quidem maxime porro pariatur exercitationem consequatur. Veritatis modi itaque eligendi? Pariatur, dolorem harum. Ipsa non pariatur quasi. Esse, dolorem tempora?
                    </p>

                    <a href='=#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
