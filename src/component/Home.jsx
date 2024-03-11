import React from "react";
import {ReactTyped } from 'react-typed'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './css/home.css'
export const Home = () => {
  return (
    <>
      <div className="home_main">
        <div className="tophome">
          <div className="textmain">
            <h1>Hi,</h1>
            <h1>I'm Rushikesh Chape</h1>
            <ReactTyped
              strings={['Web Developer','Software Developer','ReactJs Developer','Java Developer']}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
          <div className="vectorimg">
            <div className="image"></div>
          </div>
        </div>
        <div className="bottomhome">
          <div className="introdiv">
            <p className="texttitle">LET ME <span className='highlight'>INTRODUCE</span> MYSELF</p>
            <p className="textcontent">
            I've cultivated a deep love for programming and honed my skills across various languages, each with its own unique applications. Java serves as my foundation, empowering me to build robust and scalable applications, often utilizing the Spring Boot framework for efficient development. 
            </p>
            <p className="textcontent"> Within the realm of JavaScript, I specialize in React.js, leveraging its powerful capabilities to develop modern and responsive web applications.</p>
            <p className="textcontent">
            Continuously seeking new challenges and opportunities for growth, I'm committed to pushing the boundaries of what's possible in the ever-evolving field of software development.
            </p>
           
          </div>
          <div className="imgbottom"></div>
        </div>
        <div className="findmeblock">
          <p className="texttitle">FIND ME ON</p>
          <p className="textcontent">Feel free to <span className='highlight'>connect</span> with me</p>
          <div className='findLink'>
          <a href='https://github.com/rushikeshchape'><GitHubIcon style={{width:'2em', height:'2em'}} className='linkicon'/></a>
          <a href='https://www.linkedin.com/in/rushikesh-chape/'><LinkedInIcon style={{width:'2em', height:'2em'}} className='linkicon'/></a>
          <a href='https://www.instagram.com/rushikesh_chape_/'><InstagramIcon style={{width:'2em', height:'2em'}} className='linkicon'/></a>
          </div>
        </div>
      </div>
    </>
  );
};
