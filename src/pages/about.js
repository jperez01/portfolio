import React from "react";
import Experience from '../Components/experience';
import Header from '../Components/header';

/**
 * About page for bio and skills that I have along with a link to my resume
 */
export default function About() {
  const link = "https://drive.google.com/file/d/1eMpuTJ4xrurN7baj7SzRok4DKAINsFiV/view?usp=sharing";
  return (
    <div className="background">
      <Header />
      <div className="about-page">
        <h1 className="page-title"> About Me </h1>
        <div className="about-info">
          <p className="about-description">
            I'm currently a second year Computer Science major at Georgia Tech.
            I started learning web development the summer before my first year at Tech,
            and continued till now since I enjoyed it. I started with front end development
            with tools like React to create dynamic apps for people to use. Then I expanded
            my skills in the back end by working with MongoDB, Postgresql, and Express to
            create APIs and use them.
            <br/> <br/>
            My goal is to find an internship/co-op opportunity during the next school year to
            improve my skills as a developer. In addition, I also want to learn more of both sides
            of development and choose which one I want to focus on. My primary goal in this field
            is to contribute to apps and websites that I can be proud to be part of.

            When I'm not on my computer, I usually read novels, cook meals for my family,
            and play games.
          </p>
          <Experience />
          <p className="about-description" style={{ margin: '0', 'padding-right': '20px'}}> For more info: </p>
          <a href={link} target="_blank" rel="noreferrer" className="project-demo"> Resume </a>
        </div>
      </div>
    </div>
  )
}