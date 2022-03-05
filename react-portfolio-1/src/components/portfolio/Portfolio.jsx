import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'
import IMG7 from '../../assets/portfolio7.webp'
import IMG8 from '../../assets/portfolio8.webp'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Data Design Web App',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },

    {
        id: 2,
        image: IMG2,
        title: 'Charts Templates Infographics',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17557622-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },

    {
        id: 3,
        image: IMG3,
        title: 'Charts Templates Infographics',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17428282-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },

    {
        id: 4,
        image: IMG4,
        title: 'Data Design Web App 1',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17428268-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },

    {
        id: 5,
        image: IMG5,
        title: 'Data Design Web App 2',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17341613-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },

    {
        id: 6,
        image: IMG6,
        title: 'Data Design Web App 3',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17341624-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },

    {
        id: 7,
        image: IMG7,
        title: 'Data Design Web App 4',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17393917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
    },

    {
        id: 8,
        image: IMG8,
        title: 'Chart Template Infographics',
        github: 'https://github.com/Gustogrenade1278/hellostim',
        demo: 'https://dribbble.com/shots/17393884-Orion-UI-kit-Charts-templates-infographics-in-Figma',
    },
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
        
                            <div className="portfolio__item-cta">
                                < a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                                < a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
