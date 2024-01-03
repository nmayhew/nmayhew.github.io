import "./intro.css";
import linkedIn from '../../assets/logos/LinkedIn.png';
import GitHub from '../../assets/logos/GitHub.png';
import { Animator, ScrollPage, batch, Fade, Move } from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';
import { Avatar } from 'antd';
import me from "../../assets/me/me.JPG";
import { rowingPhoto, carousal2, carousal3, carousal4, carousal5, carousal } from '../../assets/backdrop';

import ImageCarousel from "../imgCarousel/ImageCarousel";

function Intro() {
  const images = [rowingPhoto, carousal, carousal2, carousal3, carousal4, carousal5]; // Add the paths to your images
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 450px) and (max-width: 790px) ' })

  return (
    <ScrollPage>
      <div id="intro" className="intro">
        <div id="intro" className="intro-text">
          <h1>Hi, I'm Nick Mayhew</h1>
          <br></br>
          <p>
            I'm a <mark>&nbsp;Product Engineer&nbsp;</mark> at Opvia.
            <br></br><br></br>
            I completed my Master's in Management at <mark>&nbsp;Cambridge&nbsp;</mark> where I won the <mark>&nbsp;2023 Men's Boat Race&nbsp;</mark>.
            <br></br><br></br>
            My bachelor's was in <mark>&nbsp;Computer Science&nbsp;</mark> from <mark>&nbsp;Stanford&nbsp;</mark>, where I won the <mark>&nbsp;highest GPA (4.05 GPA)&nbsp;</mark> of a male graduating Student-Athlete and captained Men's Varsity Rowing.
            <br></br><br></br>
            My work at startups, <mark>&nbsp;Amazon&nbsp;</mark>, <mark>&nbsp;AB InBev&nbsp;</mark> have created a diverse skillset including programming, product and leadership.
          </p>
          <br></br><br></br>
          <br></br>
          {(isMobile) && <p>This website's mobile version is in Beta, please use a larger screen for the full experience<br></br><br></br> </p>}
          {(isTablet) && <p>This website's tablet version is in Beta, please use a larger screen for the full experience<br></br><br></br> </p>}
          <a href='https://www.linkedin.com/in/nicholas-mayhew/'><img src={linkedIn} alt="linkedIn-logo" className="intro-logo" /></a>
          <a href='https://github.com/nmayhew'><img src={GitHub} alt="GitHub-logo" className="intro-logo" /></a>
          {isMobile && <Avatar size={70} src={me} alt="Logo" shape="circle" />}
        </div>
        <div className="intro-photo">
          <Animator className="intro-photo" animation={batch(Fade(), Move(400, 0, 400, 0))}>
            <ImageCarousel images={images} />
          </Animator>
        </div>
      </div>

    </ScrollPage>

  );
}


export default Intro;


