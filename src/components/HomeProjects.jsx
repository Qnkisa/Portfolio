import React from 'react'
import ReactPlayer from 'react-player'

export default function HomeProjects() {
  return (
    <section id="projects">
        <div className="home-projects">
            <div className="home-projects-top">
                <h4>Portfolio</h4>
                <p>Each project is a unique piece of development.</p>
            </div>
            <div className="projects-container">
                <div className="project">
                    <div className="project-image">
                        <a href="https://sweet-beignet-3c406a.netlify.app" target='_blank'>
                            <img src="/fitconnect-hero-real.png" alt="" />
                        </a>
                    </div>
                    <div className="project-content">
                        <div className="project-content-top">
                            <p>FitConnect</p>
                            <div className="project-content-top-icon">
                                <ion-icon name="fitness-outline"></ion-icon>
                            </div>
                        </div>
                        <p>FitConnect is a cutting-edge landing page for an upcoming ICO that is revolutionizing the fitness industry. Built with React, this sleek and modern website serves as the entry point for fitness enthusiasts and potential investors to learn about the exciting opportunities that FitConnect offers.</p>
                        <div className="project-content-bottom">
                            <a href="https://fit-connect-bg.vercel.app/" target='_blank'>Live Demo <div className="pop-up-icon"><ion-icon name="open-outline"></ion-icon></div></a>
                            <a href="https://github.com/Qnkisa/FitConnect" target='_blank'>Code <div className="pop-up-icon"><ion-icon name="logo-github"></ion-icon></div></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-content">
                        <div className="project-content-top">
                            <p>PeakPerformance</p>
                            <div className="project-content-top-icon">
                                <ion-icon name="barbell-outline"></ion-icon>
                            </div>
                        </div>
                        <p>PeakPerformance, the online fitness coaching website built with React, is exceptional. Its user-friendly interface, personalized workout plans, and expert guidance empower users to achieve their fitness goals effectively and efficiently.</p>
                        <div className="project-content-bottom">
                            <a href="https://peak-performance-bg.vercel.app/" target='_blank'>Live Demo <div className="pop-up-icon"><ion-icon name="open-outline"></ion-icon></div></a>
                            <a href="https://github.com/Qnkisa/PeakPerformance" target='_blank'>Code <div className="pop-up-icon"><ion-icon name="logo-github"></ion-icon></div></a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://chimerical-capybara-ef5e38.netlify.app" target='_blank'>
                            <img src="/peakperformance-hero-real.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <a href="https://stirring-shortbread-2b9067.netlify.app" target='_blank'>
                            <img src="/coinwise-hero-real.png" alt="" />
                        </a>
                    </div>
                    <div className="project-content">
                        <div className="project-content-top">
                            <p>CoinWise</p>
                            <div className="project-content-top-icon">
                                <ion-icon name="logo-bitcoin"></ion-icon>
                            </div>
                        </div>
                        <p>CoinWise is a cutting-edge crypto web page revolutionizing digital finance. With real-time market data, and a user-friendly interface, CoinWise empowers investors to navigate the exciting world of cryptocurrencies with confidence and ease.</p>
                        <div className="project-content-bottom">
                            <a href="https://coin-wise-bg.vercel.app/" target='_blank'>Live Demo <div className="pop-up-icon"><ion-icon name="open-outline"></ion-icon></div></a>
                            <a href="https://github.com/Qnkisa/CoinWise" target='_blank'>Code <div className="pop-up-icon"><ion-icon name="logo-github"></ion-icon></div></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-content">
                        <div className="project-content-top">
                            <p>TimeLux</p>
                            <div className="project-content-top-icon">
                                <ion-icon name="watch-outline"></ion-icon>
                            </div>
                        </div>
                        <p>TimeLux is the epitome of luxury watch websites, offering an exquisite collection of timepieces that exude elegance and craftsmanship. With a seamless user experience, curated selection, and impeccable customer service, it's the ultimate destination for watch enthusiasts seeking the finest horological treasures.</p>
                        <div className="project-content-bottom">
                            <a href="https://time-lux-bg.vercel.app/" target='_blank'>Live Demo <div className="pop-up-icon"><ion-icon name="open-outline"></ion-icon></div></a>
                            <a href="https://github.com/Qnkisa/TimeLux" target='_blank'>Code <div className="pop-up-icon"><ion-icon name="logo-github"></ion-icon></div></a>
                        </div>
                    </div>
                    <div className="project-image">
                        <a href="https://soft-pixie-1b706f.netlify.app" target='_blank'>
                            <img src="/timelux-hero-real.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
