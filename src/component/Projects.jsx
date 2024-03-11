import React from 'react'
import { Card } from './Card'
import './css/card.css'
export const Projects = () => {
  const urlPortfolio= 'https://img.freepik.com/premium-vector/coder-developer-concentrated-working-project-developing-programming-coding-technologies_569013-336.jpg';
  const urlEcommerce='https://img.freepik.com/premium-vector/e-commerce-vector-illustration-concept_95561-50.jpg';
  const urlStudent='https://img.freepik.com/free-vector/student-using-laptop-studying-desk_1262-21429.jpg';
  const urlHospital='https://img.freepik.com/free-vector/doctors-personalized-prescriptive-analytics_335657-1882.jpg';


  const dataEcommerce = 'I created a secure e-commerce platform using HTML, CSS, JavaScript, PHP, and MySQL. It includes user registration/login, profile updates, interactive shopping cart, detailed product pages, and admin controls for product and user management.';
  const dataHospital = 'Hospital Management System: Streamlining healthcare with Spring REST APIs, Java 8, Spring Boot, and MySQL. Demonstrating software development and healthcare management expertise';
  const dataStudent = 'The Spring MVC Student Management System facilitates smooth CRUD operations for student records, prioritizing modular, scalable, and maintainable software design for user-friendly administration.';
  const dataPortfolio = 'The ReactJS Portfolio Website is a dynamic and visually appealing platform designed to showcase individual or professional portfolios. Leveraging the power of ReactJS, this website offers a modern and responsive user experience, ensuring compatibility across various devices and screen sizes';

  const githubHospital = "https://github.com/rushikeshchape/Hospital-Management-System";
  const githubEcom = "";
  const githubStud = "";
  const githubPort = "https://github.com/rushikeshchape/";
  return (
    <>
      <div className='projecthead '>
        <h1 className='texttitle'>My Recent <span className='highlight'>Projects</span></h1>
        </div>

        <div className='cards'>
          <Card title='Hospital Management System' img={urlHospital} data={dataHospital} githuburl={githubHospital}/>       
          <Card title='E-commerce Website' img={urlEcommerce} data={dataEcommerce} githuburl={githubEcom}/>       
          <Card title='Student Management System' img={urlStudent} data={dataStudent} githuburl={githubStud}/>       
          <Card title='Portfolio Website' img={urlPortfolio} data={dataPortfolio} githuburl={githubPort}/>       

        </div>
    </>
  )
}
