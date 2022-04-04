import "./projects.css";
import MaterialIcon from 'material-icons-react';
import Flickr from '../../assets/projects/flickr.png';
import Luna from '../../assets/projects/Luna.png';
import MB from '../../assets/projects/mercedes.png';
import reactLogo from '../../assets/projects/react.png';
import SmartRow from '../../assets/projects/SmartRow.png';
import projectLogo from '../../assets/projects/projects.png'
import React, { useState } from 'react';
import { Modal } from 'antd';

function infoMB() {
    Modal.info({
      title: (<h1>Header</h1> ),
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function infoSR() {
    Modal.info({
      title: (<h1>Header</h1> ),
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function infoLuna() {
    Modal.info({
      title: (<h1>Header</h1> ),
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function infoWeb() {
    Modal.info({
      title: (<h1>Header</h1> ),
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  function infoFlickr() {
    Modal.info({
      title: (<h1>Header</h1> ),
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

function Work() {

  return (
    <div id="project" className="project">
    
        <div className="project-overHead">
        <img src={projectLogo} alt="Project Logo" className="project-logo"/>
            <h1 className="project-header">
                Projects
            </h1>
        </div>

        <div className="project-row">
            <div className="job" onClick={infoMB}>
            <img src={MB} alt="Mercedes-Benz-Logo" className="project-image"></img> 
            <p className="white">
                Vahana 
            </p>
            </div>
        
            <div className="job" onClick={infoSR}>
            <img src={SmartRow} alt="Smart Row Logo" className="project-image-smart"></img>
            <p className="white">
                Smart Row
            </p>
            </div>
        
        
            <div className="job" onClick={infoLuna}>
            <img src={Luna} alt="Luna Logo" className="project-image"></img>
            <p className="white">
                Luna
            </p>
            </div>
       
        </div>
        <div className="work-row">

        <div className="job" onClick={infoWeb}>
            <img src={reactLogo} alt="React Logo" className="project-image"></img> 
            <p className="white">
                Resume Website
            </p> 
        </div>
        <div className="job" onClick={infoFlickr}>
            <img src={Flickr} alt="Flickr Logo" className="project-image"></img> 
            <p className="white">
                Mini Flickr
            </p> 
        </div>

        </div>
    </div>

  );
}

export default Work;