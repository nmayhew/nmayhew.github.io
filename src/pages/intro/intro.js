import "./intro.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import linkedIn from '../../assets/logos/LinkedIn.png';
import GitHub from '../../assets/logos/GitHub.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move} from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';
import { Avatar } from 'antd';
import me from "../../assets/me/me.JPG";

function Intro() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 450px) and (max-width: 768px) ' })
  
  return (
    <ScrollContainer snap="none">
    <ScrollPage page={0}>
    <div id="intro" className="intro">
          <div id="intro" className="intro-text">
           <h1>Hi, I'm Nick Mayhew</h1>
           <br></br>
           <p>I graduated Stanford University with Distinction in June in Computer Science (4.05 GPA), winning the Block S Honor for highest GPA of a male graduating Student-Athlete and captaining Men's Varsity Rowing. 
           <br></br><br></br>
            From October, I'll be studying a Master's in Management at Cambridge University after completing a Software Engineering Internship at Amazon this summer.
            <br></br><br></br>
            I'm always looking for new oppurtinities. Reach out to me on Linkedin or check out my GitHub!</p>
            <br></br>
            {(isMobile) && <p>This website's mobile version is in Beta, please use a larger screen for the full experience<br></br><br></br> </p> }
            {(isTablet) && <p>This website's tablet version is in Beta, please use a larger screenfor the full experience<br></br><br></br> </p> }
            <a href='https://www.linkedin.com/in/nicholas-mayhew/'><img src={linkedIn} alt="linkedIn-logo" className="intro-logo"/></a>
            <a href='https://github.com/nmayhew'><img src={GitHub} alt="GitHub-logo" className="intro-logo"/></a>
            {isMobile && <Avatar size={70} src={me} alt="Logo" shape="circle"/>}
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


