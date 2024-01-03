import "./education.css";
import school from '../../assets/schools/school.svg';
import Stanford from '../../assets/schools/Stanford.png';
import Cambridge from '../../assets/schools/Cambridge.png';
import Latymer from '../../assets/schools/LatymerWhite.png';
import { Popover } from 'antd';
import { Animator, ScrollPage, batch, Fade, Move, Zoom } from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';

const CamHeader = (
  <h1>Cambridge University</h1>
);
const Camcontent = (
  <div>
    <p>I obtained an MPhil in Management at the Judge Business School while winning the 2023 Boat Race.
    </p>
    <p>I was a student of Peterhouse college, studying Management Consultancy, Strategy, Finance and Economics.</p>
  </div>
);
const StanHeader = (
  <h1>Stanford University</h1>
);
const Stancontent = (
  <div>
    <p>I graduated Phi Beta Kappa (Academic Honour Society) from Stanford in June with a 4.05 GPA, majoring in CS and concentrating in Human Computer Interaction. </p>
    <p>During my time here, I won the Block S Honors For Men for the highest Graduating Male GPA for Student-Athletes. I've also captained Men's Varsity Rowing and been Coaches' Association National Scholar-Athlete. </p>
    <p></p>
    <p>My coursework includes Algorithmic Design, Product Design, Data Structures, Social Psychology and OOP.</p>
    <p></p>
  </div>
);

const LatyHeader = (
  <h1>Latymer Upper School</h1>
);
const Latycontent = (
  <div>
    <p>I graduated Latymer in 2017 with 3 A*s in Maths, Physics and Computer Science.</p>
    <p>I was boat house captain of Latymer Rowing and got 8 A*s and 2As in GCSEs.</p>
    <p>Finally, I had perfect scores in the ACT and SAT Subject Tests (Maths and Physics).</p>
  </div>
);

function Education() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <ScrollPage>
      <div id="education" className="education">
        <div className="education-overHead">
          <img src={school} alt="School Icon" />
          <h1 className="education-header">
            Education
          </h1>
        </div>
        <div className="education-row">
          <Animator animation={batch(Fade(), Move(-400, 0, -400, 0), Zoom(0.1, 1))}>
            {isMobile && <Popover overlayStyle={{ width: "40vw" }} placement="top" title={CamHeader} content={Camcontent}>
              <div className="school">
                <img src={Cambridge} alt="Cambridge Logo" className="school-image"></img>

              </div>
            </Popover>
            }
            {!isMobile && <Popover overlayStyle={{ width: "40vw" }} placement="topLeft" title={CamHeader} content={Camcontent}>
              <div className="school">
                <img src={Cambridge} alt="Cambridge Logo" className="school-image"></img>

              </div>
            </Popover>
            }

          </Animator>
          <Animator animation={batch(Fade(), Zoom(0.1, 1))}>
            <Popover overlayStyle={{ width: "40vw" }} placement="top" title={StanHeader} content={Stancontent}>
              <div className="school">
                <img src={Stanford} alt="Stanford Logo" className="school-image"></img>
              </div>
            </Popover>
          </Animator>
          <Animator animation={batch(Fade(), Move(400, 0, 400, 0), Zoom(0.1, 1))}>
            {!isMobile && <Popover overlayStyle={{ width: "40vw" }} placement="topRight" title={LatyHeader} content={Latycontent}>

              <div className="school">
                <img src={Latymer} alt="Latymer Logo" className="school-image"></img>

              </div>

            </Popover>
            }
            {isMobile && <Popover overlayStyle={{ width: "40vw" }} placement="top" title={LatyHeader} content={Latycontent}>
              <div className="school">
                <img src={Latymer} alt="Latymer Logo" className="school-image"></img>
              </div>

            </Popover>
            }
          </Animator>
        </div>
      </div>
    </ScrollPage>
  );
}

export default Education;