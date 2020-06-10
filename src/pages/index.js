import React from "react";
import Header from '../Components/header';
import '../style.scss';
import SocialMedia from '../Components/socialmedia';

/**
 * Home page for links to social media and contact along with a unique background
 */
export default function Home() {
  return (
    <div className="background">
      <Header />
      <div className="home">
        <h2 className="home-greeting"> Hi, my name is</h2>
        <h2 className="home-name">> Juan_Perez</h2>
        <p className="home-description">
          I'm a first year Computer Science student from Alpharetta, GA.
          I have a passion for web development and would like to learn
          about both front and back end development.
        </p>
          <a className="project-demo" target="_blank" rel="noreferrer" href="mailto:jpablopm72@gmail.com"> Get in Touch </a>
          <SocialMedia />
      </div>
    </div>
  )
}
