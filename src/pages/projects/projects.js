import "./projects.css";
import Flickr from '../../assets/projects/flickr.png';
import Luna from '../../assets/projects/Luna.png';
import MB from '../../assets/projects/mercedes.png';
import reactLogo from '../../assets/projects/react.png';
import SmartRow from '../../assets/projects/SmartRow.png';
import projectLogo from '../../assets/projects/projects.png'
import React, { useState } from 'react';
import { Modal } from 'antd';


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
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const showModal4 = () => {
    setIsModalVisible4(true);
  };

  const handleCancel4 = () => {
    setIsModalVisible4(false);
  };

  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const showModal5 = () => {
    setIsModalVisible5(true);
  };
  const handleCancel5 = () => {
    setIsModalVisible5(false);
  };


  return (
    <div id="project" className="project">
    
        <div className="project-overHead">
        <img src={projectLogo} alt="Project Logo" className="project-logo"/>
            <h1 className="project-header">
                Projects
            </h1>
        </div>

        <div className="project-row">
            <div className="job" onClick={showModal}>
            <img src={MB} alt="Mercedes-Benz-Logo" className="project-image"></img> 
            <p className="white">
                Vahana 
            </p>
            </div>
        
            <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible} footer={null} onCancel={handleCancel} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>

            <div className="job" onClick={showModal2}>
            <img src={SmartRow} alt="Smart Row Logo" className="project-image-smart"></img>
            <p className="white">
                Smart Row
            </p>
            </div>
        
            <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible2} footer={null} onCancel={handleCancel2} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>
        
            <div className="job" onClick={showModal3}>
            <img src={Luna} alt="Luna Logo" className="project-image"></img>
            <p className="white">
                Luna
            </p>
            </div>

            <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible3} footer={null} onCancel={handleCancel3} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>

        </div>
        <div className="work-row">

        <div className="job" onClick={showModal4}>
            <img src={reactLogo} alt="React Logo" className="project-image"></img> 
            <p className="white">
                Resume Website
            </p> 
        </div>

        <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible4} footer={null} onCancel={handleCancel4} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>

        <div className="job" onClick={showModal5}>
            <img src={Flickr} alt="Flickr Logo" className="project-image"></img> 
            <p className="white">
                Mini Flickr
            </p> 
        </div>

        <Modal title={<h1>Amazon - Alexa Shopping</h1>} width={700} visible={isModalVisible5} footer={null} onCancel={handleCancel5} > 
            <div>
              <p>This summer from July to the end of August, I'll be working as a Software Engineering Intern in Amazon's Shoreditch office in London.</p>
            </div>
            </Modal>

        </div>
    </div>

  );
}

export default Work;