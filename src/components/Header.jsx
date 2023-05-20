import React,{useState} from 'react'

export default function Header() {

  const [nav,setNav] = useState(false);
  
  const handleClick = () =>{
    setNav(prevValue => !prevValue)
  }

  const handleHomeClick = () => {
    window.scrollTo({
      top: document.getElementById('home').offsetTop,
      behavior: 'smooth'
    });

    setNav(prevValue => !prevValue);
  };

  const handleAboutClick = () => {
    window.scrollTo({
      top: document.getElementById('about').offsetTop,
      behavior: 'smooth'
    });

    setNav(prevValue => !prevValue);
  };

  const handleProjectsClick = () => {
    window.scrollTo({
      top: document.getElementById('projects').offsetTop,
      behavior: 'smooth'
    });

    setNav(prevValue => !prevValue);
  };

  const handleContactClick = () => {
    window.scrollTo({
      top: document.getElementById('contact').offsetTop,
      behavior: 'smooth'
    });

    setNav(prevValue => !prevValue);
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <img src="/real-yanislav.png" alt="" />
          <div className="nav-logo-text">
            <p>Yanislav Angelov</p>
            <span>Web Developer</span>
          </div>
        </div>
        <ul className={nav ? "active" : ""}>
          <li><a onClick={handleHomeClick}>Home</a></li>
          <li><a onClick={handleAboutClick}>About</a></li>
          <li><a onClick={handleProjectsClick}>Projects</a></li>
          <li><a onClick={handleContactClick}>Contact</a></li>
        </ul>
        <div className={nav ? "hamburger active" : "hamburger"} id="hamburger" onClick={handleClick}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </nav>    
    </header>
  )
}
