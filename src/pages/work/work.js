import "./work.css";
import Amazon from '../../assets/work/amazonWhite.png';
import fullMeasure from '../../assets/work/fullMeasure.png';
import Latymer from '../../assets/work/latymerWhite.png';
import workLogo from '../../assets/work/Briefcase.png'
import React, {useState} from 'react';
import { Modal } from 'antd';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Zoom} from "react-scroll-motion";

function Work() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };


  return (
    <ScrollContainer snap="none">
    <ScrollPage page={2}>
    <div id="work" className="work">
        <div className="work-overHead">
        <img src={workLogo} alt="Briefcase Logo" className="work-logo"/>
            <h1 className="work-header">
                Work
            </h1>
        </div>

        <div className="work-row">
            <div className="job" onClick={showModal}>
            <Animator animation={batch(Fade(), Move(-400, -100, -400, -100), Zoom(0.1,1))}>
            <img src={Amazon} alt="Amazon Logo" className="job-image-amazon"></img> 
            </Animator>
            </div>
            <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible} footer={null} onCancel={handleCancel} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>
        
            <div className="job" onClick={showModal2}>
            <Animator animation={batch(Fade(), Move(400, -100, 400, -100), Zoom(0.1,1))}>
            <img src={Latymer} alt="Latymer Logo" className="job-image"></img>
            </Animator>

            </div>
            <Modal title={<h1>Latymer Upper School - Computing TA</h1>} width={700} visible={isModalVisible2} footer={null} onCancel={handleCancel2} > 
            <div>
          <p>For 6 months in 2017, I developed, adapted and taught Computer Science classes in Python and Java to 200 students. I also tutored Computer Science 
          and Maths in 2017/18, resulting in predicted C grade becoming an A. Finally, I volunteered as a Teaching Assistant at Addison Primary School. </p>
            </div>
            </Modal>
       
        </div>
        <div className="work-row">

        <div className="job" onClick={showModal3}>
        <Animator animation={batch(Fade(), Move(0, -200, 0, 200), Zoom(0.1,1))}>
            <img src={fullMeasure} alt="FullMeasure Logo" className="job-image"></img> 
        </Animator>

            </div>
            <Modal title={<h1>FullMeasure - Adora Experiences</h1>} width={700} visible={isModalVisible3} footer={null} onCancel={handleCancel3} > 
            <div>
            <p>From June to September of 2021, I maintained and upgraded all 8 iOS apps for Full Measure’s Campus Visit Experience resulting in a 200% increase of usage over their iOS apps, with on 4,200 tours taken a week.</p>
            <br></br>
            <p>This involved programming stability improvements to see a 5 times reduction in crashes across all apps; overhauling navigation UI for on-campus and off-campus tours across all apps, and implementing accessibility features to all apps.</p>
            </div>
            </Modal>
        </div>
    </div>
    </ScrollPage>
    </ScrollContainer>

  );
}

export default Work;