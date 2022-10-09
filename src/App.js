// import logo from './logo.svg';
import './App.css';
import image from './images/sig.png';
function App() {
  return (
    <div className="App">
      <header>
        <div className="signature-icon">
          <button></button>
        </div>
        <div className="quick-nav">
          <a href='#contact'><button>CONTACT</button></a>
          <a href='#about'><button>ABOUT</button></a>
        </div>
      </header>
      <div className="container">
        <section className="card-placeholder">
          <div className="card card-front">
            <table>
              <tr>

                <td>
                  <div className="card-text">
                    <h2>Abubakar M. Yarimawa</h2>
                    <i>Full Stack Developer</i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="stack">
                    <i className="svg python"></i>
                    <i className="svg django"></i>
                    <i className="svg java"></i>
                    <i className="svg javascript"></i>
                    <i className="svg reactjs"></i>
                    <i className="svg redux"></i>
                    <i className="svg bootstrap"></i>
                    <i className="svg mysql"></i>
                    <i className="svg mongodb"></i>
                    <i className="svg postgresql"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="stack">
                    <i className="svg html5"></i>
                    <i className="svg css3"></i>
                    <i className="svg sass"></i>
                    <i className="svg cmd"></i>
                    <i className="svg git"></i>
                    <i className="svg aws"></i>
                    <i className="svg heroku"></i>
                    <i className="svg firebase"></i>
                    <i className="svg netlify"></i>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="card card-back">
            <div className="contact">
              <div className="card-personal-details">
                <p><i className="svg email-icon"></i><a href='#'>mayarimawa@gmail.com</a></p>
                <p><i className="svg telephone-icon"></i>+2349033243110</p>
              </div>
              <div className="card-professional-details">
                <p><i className="svg github-icon"></i><a href="https://www.github.com/yarimawa">github.com/yarimawa</a></p>
                <p><i className="svg linkedin-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">linkedin.com/in/abubakar-musa-0431171a7</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id='about'>
          <p>
            Full Stack Django-React Developer with a keen interest on web
            traffic flows and cyber-security. 
            Enthusiastic about the IT industry and would like to stamp a path
            for other passionate developers.
          </p>
          <h4>TECHNOLOGIES AND FRAMEWORK</h4>
          <p>Python | Django | Java | Javascript | ReactJS | Redux | Bootstrap | MySQL | MongoDB | PostgreSQL | HTML5 | CSS3 | SCSS | CL/CI | Git | AWS | Heroku | Firebase | Netlify</p>
          <h4>CONTACT ME</h4>
          <div className="contact" id='contact'>
            <div className="card-personal-details">
              <p><i className="svg email-icon"></i><a href='#'>mayarimawa@gmail.com</a></p>
              <p><i className="svg telephone-icon"></i>+2349033243110</p>
            </div>
            <div className="card-professional-details">
              <p><i className="svg github-icon"></i><a href="https://www.github.com/yarimawa">github.com/yarimawa</a></p>
              <p><i className="svg linkedin-icon"></i><a href="https://www.linkedin.com/in/abubakar-musa-0431171a7">linkedin.com/in/abubakar-musa-0431171a7</a></p>
            </div>
          </div>
        </section>
        <section className="experience" id="experience">
          <h3>EXPERIENCE</h3>
          <h4>Elenal (Founder)</h4>
          <i>Web Developer, Aug 2019 – Present</i>
          <ul>
            <li>Perform web site updates</li>
            <li>Write, design, or edit web page content</li>
            <li>Confer with management or development teams to prioritize needs, resolve conflicts, develop content criteria, or choose solutions</li>
            <li>Back up files from web sites to local directories</li>
            <li>Develop databases that support web applications and web sites.</li>
            <li>Renew domain name registration</li>
            <li>Write supporting code for web</li>
          </ul>
          <h4>Kankara Hills and Estate Developers (Contract)</h4>
          <i>Web Developer, October 2022</i>
          <ul>
            <li>Built and deployed an AirBnb website</li>
            <li>Visitors browse through a catalogue of housing infrastructures available for rent, or sale</li>
          </ul>
        </section>
        <section className="projects">
          <h3>PROJECTS</h3>
          <a href='https://www.github.com/yarimawa/web-rat'>https://www.github.com/yarimawa/web-rat</a>
          <i>Python</i>
          <ul>
            <li>Open-source project</li>
            <li>Web scraping script to download contents from given urls</li>
          </ul>
          <a href='https://www.github.com/yarimawa/maze'>https://www.github.com/yarimawa/maze</a>
          <i>Java</i>
          <ul>
            <li>Open-source project</li>
            <li>A simple program that creates mazes for users to solve</li>
            <li>If a maze has multiple solutions, the best solution is shown upon completion (solution with least steps/fastest route)</li>
          </ul>
          <a href='https://www.github.com/yarimawa/unpkg'>https://www.github.com/yarimawa/unpkg</a>
          <i>Python</i>
          <ul>
            <li>Web scraping script with strict configurations to download npm packages on windows</li>
            <li>It has proven to be faster than the conventional `npm install	` approach</li>
          </ul>
          <a href='https://www.github.com/yarimawa/auto-run'>https://www.github.com/yarimawa/auto-run</a>
          <i>Python</i>
          <ul>
            <li>Open-source project</li>
            <li>A python script that takes an absolute or relative file directory and configures such file to always run on start-up</li>
          </ul>
          <a href='https://www.github.com/yarimawa/racquetball'>https://www.github.com/yarimawa/racquetball</a>
          <i>Python</i>
          <ul>
            <li>Open-source project</li>
            <li>A simulation of a racquetball that moves from one end to another</li>
          </ul>
          <a href='https://www.github.com/yarimawa/snakejs'>https://www.github.com/yarimawa/snakejs</a>
          <i>Javascript</i>
          <ul>
            <li>Open-source project</li>
            <li>The traditional snake game</li>
          </ul>
        </section>
        <section className="education">
          <h3>EDUCATION</h3>
          <h4>AHMADU BELLO UNIVERSITY - KADUNA, NIGERIA</h4>
          <i>B.Sc. Economics 2017 - Present</i>
          <ul>
            <li>Relevant Coursework: YouTube Tutorials, Cisco Linux Unhatched Online Course, Udemy Tutorial Classes</li>
          </ul>
        </section>
        <section className="certifications">
          <h3>CERTIFICATIONS</h3>
          <h4>AMADURS TECHNOLOGIES</h4>
          <ul>
            <li>ICT Capacity Building and Online Entrepreneurship Skill Development</li>
          </ul>
        </section>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
