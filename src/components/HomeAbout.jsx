import React from 'react'

export default function HomeAbout() {
  return (
    <section id="about">
        <div className="home-about">
            <div className="home-about-img">
                <img src="/about-image.jpg" alt="" />
                <div className="spinning-image">     
                    <img src="/developer-image.jpg" alt="" />
                </div>
            </div>
            <div className="home-about-content">
                <h3>About Me</h3>
                <p>I am a skilled developer proficient in HTML, CSS, JavaScript and React, adept at creating user-friendly websites with clean code.</p>
            </div>
        </div>
    </section>
  )
}
