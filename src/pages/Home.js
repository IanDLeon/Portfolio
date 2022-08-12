import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Ian De Leon</h2>
        <div className="prompt"> <p> A software developer with a passion for learning and creating.
          </p> 
          <a href="https://www.linkedin.com/in/ianrdeleon/">
          <LinkedInIcon />
          </a>
          <EmailIcon />
          <a href="https://github.com/IanDLeon">
          <GithubIcon />
          </a>
          </div>
      </div>
      <div className="skills">
      <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM,
              BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB, Django
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home