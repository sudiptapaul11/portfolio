import React, { useState } from "react";
import "./navbar.css";
import img1 from "./images/SP.png"
import img2 from "./images/mainpic.png"
import img3 from "./images/mynewpic1.jpg"
import img4 from "./images/resumeSP2.jpg"






const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);


  
  
    return(
        <>
        <nav className="main-nav">
          <div className="logo">
          <img src={img1} />
          </div>
    

        <div className={showMediaIcons ? "mobile-menu" :"menu-link"} >
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#works">Work</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <button className="mobile-menu"
        onClick ={ () =>  setShowMediaIcons(!showMediaIcons)}>
          {showMediaIcons ? (<i className="fa fa-times"></i>) : (<i className="fa fa-bars" aria-hidden="true"></i>) }
        </button>



        </nav> 
        <section id="home">
    <div>
    <div className="intro">
    <img className="mainpic" src={img2}/>
      <h1 className="introduction name1">Sudipta Paul</h1>
      <h3 className="introduction name2">Designer and Developer.</h3>
       
    </div>
    </div>
    </section>

    <section id="about-me">
      <div>
        <h2 className="about-me1">About me...</h2>
        <img className="profile-picture" src={img3}/>
        <h4 className="about-me2">Hello, I am Sudipta Paul, I hold a B.Tech degree in Computer Science, which I earned in the year 2019. After completing my education, I took on the role of a Tea Estate manager at my family estate for a period of two years, before joining Genpact as an Operations Associate. I worked with Genpact for 8 months until June 2022. My desire to grow and develop as a software developer led me to join Scaler Academy in November 2021. I have a passion for designing and developing technology solutions. </h4>
      </div>

    </section>

    <section id="skills">
      <div>
        <h2 className="skill" >Skills</h2>
        <div className="skill-head">
        <h4 className="skill-heads">
          Programming Languages:
        </h4>
        <h4 className="skill-heads">
          Other Languages:
        </h4>
        <h4 className="skill-heads">
          Frameworks:
        </h4>
        <h4 className="skill-heads">
          Other Skills:
        </h4>
        </div>
        <div className="skill-sets">
        <h4 className="skill-set">
          C++, JavaScript, Java, SQL.
        </h4>
        <h4 className="skill-set">
          HTML, CSS.
        </h4>
        <h4 className="skill-set">
          ReactJS.
        </h4>
        <h4 className="skill-set">
        Data Structures, Algorithms, Problem Solving, Figma, UI/UX design, Prototyping.
        </h4>
        </div>
      </div>
    </section>

    <section id="works">
    <div>
        <h2 className="work" >Work</h2>
        <div className="work1" >
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#ui-ux">UI/UX design & Digital Arts</a></li>
          </ul>
        </div>
       
        <div id="projects">
          <div className="proj1">Projects</div>
          <ol className="projects1">
            <li><a href="">Quiz Website:</a> An website for playing Quiz online, made using JavaScript, HTML, CSS. </li>
            <li><a href="">JSONFormatter:</a> An website that prettifies JSON data, made using JavaScript, HTML, CSS. </li>
            <li><a href="">Responsive Portfolio:</a> A portfolio, made using ReactJS, CSS. </li>
            <li><a href="">Image similarity Recommendation System:</a> A system that tells the similarity between two images using Siamese Network. </li>
            <li><a href="">Railway Reservation Sytem:</a> A system that allows passengers on a train to book tickets, made using Java. </li>
          </ol>
        </div>

        
        <div id="ui-ux">
          <div className="uiux">UI-UX Designs & Digital Arts</div>
          
          
            <h4 className="uiuxx">To view UI-UX design and Digital arts please click :<a href="https://www.behance.net/sudiptapaul2">here</a>.</h4>
            
          

        </div>

        

    </div>
    </section>

    <section id="certifications">
      <div>
        <h2 className="cert" >Certifications</h2>
        <ul className="cert1">
        <li> <a href="">UX Design-Beginner to Professional Designer, Udemy.</a> </li>
        <li> <a href=""> FIGMA-UI/UX Design, Udemy.</a></li>
        <li> <a href="">HTML Course, Codecademy.</a></li>
        <li> <a href="">SQL Course, Codecademy.</a></li>
        <li> <a href="">JAVA 8, Ardent Computech Pvt Ltd.</a></li>
        <li> <a href=""> Cambridge Entry Level Certificate in ESOL International, Business English Certificate Preliminary Council of Europe Level B1.</a></li>
          

        </ul>
        
          

      </div>
    </section>
      <section id="resume">
        <h2 className="resume1">Resume</h2>
      <a href={img4} download="image-name">
      <img  className="resum" src={img4} alt="image-name"/>
      </a>

     
      </section>

      <section id="contact">
        <h2 className="contact1" >Contact</h2>
        <ul className="contact2">
          <li className="cont1">sudii.paul@gmail.com</li>
          <li className="cont2">+918100669156</li>
        </ul>


      </section>



      <footer>
        <div className="footer">
         <h6 className="foot1">© Sudipta Paul</h6>

        </div>

      </footer>
        
    </>
    );
};

export default Navbar;




