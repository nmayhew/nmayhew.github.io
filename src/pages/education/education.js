import "./education.css";
import MaterialIcon from 'material-icons-react';
import Stanford from '../../assets/schools/Stanford.png';
import Cambridge from '../../assets/schools/Cambridge.png';
import Latymer from '../../assets/schools/LatymerWhite.png';
import { Popover } from 'antd';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Zoom} from "react-scroll-motion";
const CamHeader = (
<h1>Cambridge University</h1>
);
const Camcontent = (
    <div>
      <p>From October 2022 to June 2023, I'll be studying an MPhil in Management at the Judge Business School.
      </p>
      <p>I'll be a member of Peterhouse College, and studying Accounting, Finance and Organisational Behaviour.</p>
    </div>
  );
  const StanHeader = (
    <h1>Stanford University</h1>
    );
const Stancontent = (
    <div>
      <p>I'm graduating Stanford in June with a 4.05 GPA, majoring in CS and concentrating in Human Computer Interaction. </p>
      <p>During my time here, I've captain Men's Varsity Rowing and qualified for the Engineering Academic Honor Society. </p>
      <p></p>
      <p>Coursework includes Algorithmic Design, Product Design, Data Structures, Social Psychology and OOP.</p>
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
  return (
    <ScrollContainer snap="none">
    <ScrollPage page={1}>
    <div id="education" className="education">
        <div className="education-overHead">
        <MaterialIcon icon="school" size={60} color='#FFFFFF'/>
            <h1 className="education-header">
                Education
            </h1>
        </div>
        <div className="education-row">
        <Animator animation={batch(Fade(), Move(-400, 0, -400, 0), Zoom(0.1,1))}>
        <Popover placement="topLeft" title={CamHeader} content={Camcontent}>
            <div className="school">
            <img src={Cambridge} alt="Cambridge Logo" className="school-image"></img> 
            
            </div>
        </Popover>
        </Animator>
        <Animator animation={batch(Fade(), Zoom(0.1,1))}>
        <Popover placement="top" title={StanHeader} content={Stancontent}> 
            <div className="school">
            <img src={Stanford} alt="Stanford Logo" className="school-image"></img> 
            
            </div>
        </Popover>
        </Animator>
        <Animator animation={batch(Fade(), Move(400, 0, 400, 0), Zoom(0.1,1))}>
        <Popover placement="topRight" title={LatyHeader} content={Latycontent}>
        
            <div className="school">
            <img src={Latymer} alt="Latymer Logo" className="school-image"></img>
            
            </div>
        
        </Popover>
        </Animator> 
        </div>
    </div>
  </ScrollPage>
  </ScrollContainer>
  );
}

export default Education;