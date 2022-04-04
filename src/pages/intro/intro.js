import "./intro.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import linkedIn from '../../assets/logos/LinkedIn.png';
import GitHub from '../../assets/logos/GitHub.png';
function Intro() {
  return (
    <div id="intro" className="intro">
          <div id="intro" className="intro-text">
           <h1>Hi, I'm Nick Mayhew</h1>
           <br></br><br></br>
           <p>Born and raised in London, I graduated Stanford as Captain of the men’s varsity rowing team with a 4.0 GPA in Computer Science. 
           <br></br><br></br>
            I’m now studying a Master's in management at Cambridge University after completing a Software Engineering Internship at Amazon.
            <br></br><br></br>
            I'm always looking for new oppurtinities. <br></br>Reach out to me on Linkedin or check out my GitHub!</p>
            <br></br><br></br>
            <a href='https://www.linkedin.com/in/nicholas-mayhew/'><img src={linkedIn} alt="linkedIn-logo" className="intro-logo"/></a>
            <a href='https://github.com/nmayhew'><img src={GitHub} alt="GitHub-logo" className="intro-logo"/></a>
           </div> 
           <img src={rowingPhoto} alt="Me Racing in California" className="intro-photo"/>

    </div>
  );
}

export default Intro;

