import React from "react";
import myPDF from "./assets/Rushikesh-Amrut-Chape-FlowCV-Resume-20240306.pdf";
import "./css/pdf.css";
const downloadPDF = () => {
  const download = () => {
    window.open(myPDF);
  };
  const githubopen = () => {
    window.open("https://github.com/rushikeshchape", "_blank");
  };
  return (
    <>
      <div className="pdfmain">
        <div className="pdfsection">
          <h1>
            Download <span className="highlight">Resume</span>
          </h1>
          <button onClick={download}>Download PDF</button>
        </div>
        <div className="githubsection">
          <h1>
            Github <span className="highlight">Profile</span>
          </h1>
          <button onClick={githubopen}>Visit</button>
        </div>
      </div>
    </>
  );
};
export default downloadPDF;
