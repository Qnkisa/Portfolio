import React from 'react'

export default function HomeHero() {

    const handleProjectsClick = () => {
        window.scrollTo({
          top: document.getElementById('projects').offsetTop,
          behavior: 'smooth'
        });
    };  

  return (
    <section id='home'>
        <div className="home-hero">
            <div className="home-hero-top">
                <h1>Hi, I'm Yanislav Angelov</h1>
                <h2>A Web Developer based in Plovdiv, Bulgaria.</h2>
                <a onClick={handleProjectsClick}>View Projects</a>
            </div>
            <div className="home-hero-tech-stack">
                <p>Tech Stack  &nbsp;&nbsp;&nbsp; <span>|</span></p>
                <div className="home-hero-tech-stack-helper">
                    <div className="tech-stack-icon">
                        <ion-icon name="logo-html5"></ion-icon>
                    </div>
                    <div className="tech-stack-icon">
                        <ion-icon name="logo-css3"></ion-icon>
                    </div>
                    <div className="tech-stack-icon">
                        <ion-icon name="logo-javascript"></ion-icon>
                    </div>
                    <div className="tech-stack-icon">
                        <ion-icon name="logo-react"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
