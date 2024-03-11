import React from "react";
import "./css/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
      <div className="footermain">
        <p>Copyright &#169; 2024</p>
        <p>Designed and Developed by Rushikesh Chape</p>
        <div className="footerlink">
          <a href="https://github.com/rushikeshchape">
            <GitHubIcon/>
          </a>
          <a href="https://www.linkedin.com/in/rushikesh-chape/">
            <LinkedInIcon/>
          </a>
          <a href="https://www.instagram.com/rushikesh_chape_/">
            <InstagramIcon/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
