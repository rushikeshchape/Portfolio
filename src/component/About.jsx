import React from "react";
import "./css/about.css";
import Pdf from './downloadPDF'

const About = () => {
  return (
    <>
      <div className="aboutsection">
        <div className="upperDiv">
          <div className="aboutContent">
            <h1 className="aboutHead">
              Know Who <span className="highlight">I'M</span>
            </h1>
            <p className="textcontentabt">
              Hello, I'm Rushikesh Chape, based in Pune, India.
            </p>
            <p className="textcontentabt">
              I am currently pursuing an Integrated MCA degree.
            </p>
            <p className="textcontentabt">
              I am incredibly excited to embark on my career journey and eager
              to explore new opportunities and challenges ahead.
            </p>
            <ul className="textcontentabtlist">
              <p className="textcontentabt">
                Apart from coding, I also enjoy engaging in the following
                activities:
              </p>

              <li>Listening to music</li>
              <li>Playing games</li>
              <li>Watching movies and webseries </li>
              <li>Traveling</li>
            </ul>
          </div>
          <div className="aboutImg">
            <div className="abtimg"></div>
          </div>
        </div>
        <div className='middiv'>
        <Pdf/>
      
        </div>
        
        <div className="lowerDiv">
          <div className="skills">
            <h1 className="subHead">
              Technical <span className="highlight">Proficiencies</span>
            </h1>
            <div className="skillbox">
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
                  alt="skillimg"
                />
              </div>
            </div>
          </div>
          <div className="tools">
            <h1 className="subHead">Tools</h1>
            <div className="skillbox">
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="skillsimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
                />
              </div>
              <div className="skilldiv">
                <img
                  alt="toolimg"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
