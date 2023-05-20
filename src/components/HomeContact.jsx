import React from 'react'

export default function HomeContact() {
  return (
    <section id="contact">
        <div className="home-contact">
            <div className="home-contact-top">
                <h5>Contact</h5>
                <p>My details <div className="home-contact-top-icon"><ion-icon name="accessibility-outline"></ion-icon></div></p>
            </div>
            <div className="home-contact-content">
                <div className="home-contact-div">
                    <div className="home-contact-div-image">
                        <ion-icon name="navigate-circle-outline"></ion-icon>
                    </div>
                    <div className="home-contact-div-content">
                        <p>Location</p>
                        <span>Plovdiv, Bulgaria</span>
                    </div>
                </div>
                <div className="home-contact-div">
                    <div className="home-contact-div-image">
                        <ion-icon name="mail-open-outline"></ion-icon>
                    </div>
                    <div className="home-contact-div-content">
                        <p>Mail</p>
                        <a href="mailto:yanislav.angelov04@gmail.com" target='_blank'><span>yanislav.angelov04@gmail.com</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
