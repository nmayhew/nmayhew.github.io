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
        
            <Modal title={<h1>Vahana - Mercedes-Benz</h1>} width={700} visible={isModalVisible} footer={null} onCancel={handleCancel} > 
            <div>
              <p>Sponsored by Mercedes-Benz, myself and my 3 cofounders are building a Full-Stack React app (with firebase backend) that tracks drives, providing safety scores.</p>
              <p>We believe that safety for new drivers can be engaging and interesting. Find out more at our<a href='https://github.com/cs210/2022-Daimler1/'> GitHub</a>! </p>
            </div>
            </Modal>

            <div className="job" onClick={showModal2}>
            <img src={SmartRow} alt="Smart Row Logo" className="project-image-smart"></img>
            <p className="white">
                Smart Row
            </p>
            </div>
        
            <Modal title={<h1>Smart Row - iOS App</h1>} width={700} visible={isModalVisible2} footer={null} onCancel={handleCancel2} > 
            <div>
              <p>After my first year at Stanford, I created Smart Row by myself. This was a rowing coaches' assistant app programmed in Swift with online services and GPS capability. </p>
              <p>This built upon my first iOS App, Time Trialer, that I built while at Latymer, which involved me teaching myself Swift and was downloaded over 2,400 times.</p>
              <p>Find my code on<a href='https://github.com/nmayhew/row-smartV2'> GitHub</a>!</p>
            </div>
            </Modal>
        
            <div className="job" onClick={showModal3}>
            <img src={Luna} alt="Luna Logo" className="project-image"></img>
            <p className="white">
                Luna
            </p>
            </div>

            <Modal title={<h1>Luna - Sleep Explainer and Card game</h1>} width={700} visible={isModalVisible3} footer={null} onCancel={handleCancel3} > 
            <div>
              <p>Over one term, me and my a small group of classmates created a sleep <a href='https://tassicalim.github.io/sleep/'>informational website</a>.</p>
              <p>After this website, we created a blind-accessible board game (<a href='https://docs.google.com/document/d/1xt_OrjJDWTLGygboBy12Z5b_-f_LVyNn7Rz9tp2vtFg/edit?usp=sharing'>rules</a>, <a href='https://docs.google.com/document/d/1wbrr4RIOKAaNojwPt5kQaxpy93YTNO_KRarzhaJAeTc/edit?usp=sharing'>print and play</a>). Our work for this can be found <a href='https://docs.google.com/document/d/10h4WhCnpwOVXILrbvDAa_wfIkIp3RCUA/edit?usp=sharing&ouid=102420426563333766957&rtpof=true&sd=true'>here</a>! </p>
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

        <Modal title={<h1>This Website!</h1>} width={700} visible={isModalVisible4} footer={null} onCancel={handleCancel4} > 
            <div>
              <p>I built this website from scratch in my last year at Stanford. Planned on <a href='https://www.figma.com/file/ai4aHoK5gOxt0zluTiN3ZF/Personal-CV?node-id=2%3A2'>Figma</a>; coded in React and hosted on <a href='https://github.com/nmayhew/nmayhew.github.io'>GitHub</a>, this project served a role in my career development and software engineering skills. </p>
            </div>
            </Modal>

        <div className="job" onClick={showModal5}>
            <img src={Flickr} alt="Flickr Logo" className="project-image"></img> 
            <p className="white">
                Mini Flickr
            </p> 
        </div>

        <Modal title={<h1>Mini Flicker - Stanford Class Project</h1>} width={700} visible={isModalVisible5} footer={null} onCancel={handleCancel5} > 
            <div>
              <p>While studying web applications, I built a React front-end and Javascript back-end web app. Find out more in the repo on my <a href='https://github.com/nmayhew/miniFlickr'>GitHub</a>! </p>
            </div>
            </Modal>

        </div>
    </div>

  );
}

export default Work;