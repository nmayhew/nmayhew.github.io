import "./education.css";
import MaterialIcon from 'material-icons-react';
import Stanford from '../../assets/schools/Stanford.png';
import Cambridge from '../../assets/schools/Cambridge.png';
import Latymer from '../../assets/schools/LatymerWhite.png';
import { Popover } from 'antd';

const CamHeader = (
<h1>Cambridge University</h1>
);
const Camcontent = (
    <div>
      <p>Cambridge University How long can this go, and in particular will it move the wrong way.
      </p>
      <p>Content...</p>
    </div>
  );
  const StanHeader = (
    <h1>Stanford University</h1>
    );
const Stancontent = (
    <div>
      <p>Stanford University How long can this go, and in particular will it move the wrong way.
      Comomasdfkja;lsdkjf;lakjsd;flajksd;lfkajsd;lfkjas;dlkfja;sldkjf;lk</p>
      <p>Content...</p>
    </div>
);

const LatyHeader = (
    <h1>Latymer Upper School</h1>
    );
const Latycontent = (
    <div>
      <p>Latymer Upper Schol. How long can this go, and in particular will it move the wrong way.
      Comomasdfkja;lsdkjf;lakjsd;flajksd;lfkajsd;lfkjas;dlkfja;sldkjf;lk</p>
      <p>Content...</p>
    </div>
  );

function Education() {
  return (
    <div id="education" className="education">
        <div className="education-overHead">
        <MaterialIcon icon="school" size={60} color='#FFFFFF'/>
            <h1 className="education-header">
                Education
            </h1>
        </div>
        <div className="education-row">
        <Popover placement="topLeft" title={CamHeader} content={Camcontent}>
            <div className="school">
            <img src={Cambridge} alt="Cambridge Logo" className="school-image"></img> 
            
            </div>
        </Popover>
        <Popover placement="top" title={StanHeader} content={Stancontent}> 
            <div className="school">
            <img src={Stanford} alt="Stanford Logo" className="school-image"></img> 
            
            </div>
        </Popover>
        <Popover placement="topRight" title={LatyHeader} content={Latycontent}>
            <div className="school">
            <img src={Latymer} alt="Latymer Logo" className="school-image"></img>
            
            </div>
        </Popover> 
        </div>
    </div>

  );
}

export default Education;