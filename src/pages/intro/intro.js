import "./intro.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import linkedIn from '../../assets/logos/LinkedIn.png';
import GitHub from '../../assets/logos/GitHub.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move} from "react-scroll-motion";

function Intro() {
  return (
    <ScrollContainer snap="none">
    <ScrollPage page={0}>
    <div id="intro" className="intro">
          <div id="intro" className="intro-text">
           <h1>Hi, I'm Nick Mayhew</h1>
           <br></br>
           <p>Born and raised in London, I'm graduating Stanford University as Captain of the men’s varsity rowing team with a 4.0 GPA in Computer Science in June. 
           <br></br><br></br>
            From October, I'll be studying a Master's in Management at Cambridge University after completing a Software Engineering Internship at Amazon this summer.
            <br></br><br></br>
            I'm always looking for new oppurtinities. <br></br>Reach out to me on Linkedin or check out my GitHub!</p>
            <br></br><br></br>
            <a href='https://www.linkedin.com/in/nicholas-mayhew/'><img src={linkedIn} alt="linkedIn-logo" className="intro-logo"/></a>
            <a href='https://github.com/nmayhew'><img src={GitHub} alt="GitHub-logo" className="intro-logo"/></a>
           </div> 
           <Animator className="intro-photo" animation={batch(Fade(), Move(400, 0, 400, 0))}>
           <img src={rowingPhoto} alt="Me Racing in California" className="intro-photo"/>
           </Animator>
      </div>
      
      </ScrollPage>
    </ScrollContainer>
    
  );
}


export default Intro;

