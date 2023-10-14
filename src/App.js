import React, { Component } from 'react';
import './App.css';
import image from './images/sig.png';
import ara_icon from './images/ara.jpg';
import thistro_icon from './images/thistro.png';
import cyclosis_icon from './images/cyclosis.jpg';
import galaxy_icon from './images/galaxy.jpeg';
import github_icon from './icons/github.svg';

class App extends Component {
  state = {
    projects: [
      {
        title: 'Ara',
        icon: ara_icon,
        summary: 'Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
        link: 'https://www.google.com'
      },
      {
        title: 'Thistro',
        icon: thistro_icon,
        summary: 'Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
        link: 'https://www.google.com'
      },
      {
        title: 'Cyclosis',
        icon: cyclosis_icon,
        summary: 'Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
        link: 'https://www.google.com'
      },
      {
        title: 'Galaxy',
        icon: galaxy_icon,
        summary: 'Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
        link: 'https://www.google.com'
      },
      {
        title: 'Others',
        icon: github_icon,
        summary: 'Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational digital communications technology conglomerate corporation headquartered in San Jose, California.',
        link: 'https://www.google.com'
      },
  ]}
  render() {
    const projects = this.state.projects.map((project, i) => {
      return (
        <div className='card' key={i}>
          <div className='card-top'>
            <img src={project.icon} alt={project.title} />
          </div>
          <div className='card-bottom'>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <a href={project.link}>Visit Official Website <i className='svg arrow-right'></i></a>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header>
          <h2><span style={{color: '#ff014f'}}>Hi, </span> I'm M. A. Yarimawa</h2>
          <p style={{color: '#ff014f'}}>Full-Stack Developer</p>
          <div className='sig-container'>
            <img src={image} alt="avatar" />
          </div>
        </header>
        <div className='container'>
          <section className='about-me'>
            <div className='title-box'>
              <h3 className='title'>ABOUT ME</h3>
            </div>
            <p>
              Full Stack Django-React Developer with a keen interest on web
              traffic flows and cyber-security. 
              Enthusiastic about the IT industry and would like to stamp a path
              for other passionate developers.
            </p>
          </section>
          <section className='tech-and-framework'>
            <div className='title-box'>
              <h3 className='title'>TECHNOLOGIES AND FRAMEWORK</h3>
            </div>
            <ul>
              <li><i className="svg python" title="python"></i>Python</li>
              <li><i className="svg django" title="django"></i>Django</li>
              <li><i className="svg java" title="java"></i>Java</li>
              <li><i className="svg javascript" title="javascript"></i>Javascript</li>
              <li><i className="svg reactjs" title="reactjs"></i>ReactJS</li>
              <li><i className="svg redux" title="redux"></i>Redux</li>
              <li><i className="svg bootstrap" title="bootstrap"></i>Bootstrap</li>
              <li><i className="svg mysql" title="mysql"></i>MySQL</li>
              <li><i className="svg mongodb" title="mongodb"></i>MongoDB</li>
              <li><i className="svg postgresql" title="postgresql"></i>PostgreSQL</li>
              <li><i className="svg html5"></i>HTML5</li>
              <li><i className="svg css3"></i>CSS3</li>
              <li><i className="svg sass"></i>SCSS</li>
              <li><i className="svg cmd"></i>CL/CI</li>
              <li><i className="svg git"></i>Git</li>
              <li><i className="svg aws"></i>AWS</li>
              <li><i className="svg heroku"></i>Heroku</li>
              <li><i className="svg firebase"></i>Firebase</li>
              <li><i className="svg netlify"></i>Netlify</li>
            </ul>
          </section>
          <section className='contact-me'>
            <div className='title-box'>
              <h3 className='title'>CONTACT ME</h3>
            </div>
            <ul>
              <li><i className="svg email-icon"></i><a href='https://google.com'>mayarimawa</a></li>
              <li><i className="svg github-icon"></i><a href="https://www.github.com/yarimawa">mayarimawa</a></li>
              <li><i className="svg linkedin-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg twitter-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg facebook-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg instagram-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg whatsapp-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg telegram-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
              <li><i className="svg slack-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">mayarimawa</a></li>
            </ul>
          </section>
          <section className='projects'>
            <div className='title-box'>
              <h3 className='title'>PROJECTS</h3>
            </div>
            <div className='projects-box'>
              <div className='cards'>{ projects }</div>
            </div>
          </section>
          <section className='new-info'>
            <div className='title-box'>
              <h3 className='title'>DID YOU KNOW?</h3>
            </div>
            <div>
              <p>
                Cisco Systems, Inc., commonly known as Cisco, is an 
                American-based multinational digital communications 
                technology conglomerate corporation headquartered in 
                San Jose, California.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
