import "./work.css";
import Amazon from '../../assets/work/amazonWhite.png';
import fullMeasure from '../../assets/work/fullMeasure.png';
import Latymer from '../../assets/work/latymerWhite.png';
import workLogo from '../../assets/work/Briefcase.png'
import React from 'react';
import { Modal } from 'antd';

function infoAmazon() {
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

  function infoFullMeasure() {
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

  function infoLatymer() {
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
    <div id="work" className="work">
        <div className="work-overHead">
        <img src={workLogo} alt="Briefcase Logo" className="work-logo"/>
            <h1 className="work-header">
                Work
            </h1>
        </div>

        <div className="work-row">
            <div className="job" onClick={infoAmazon}>
            <img src={Amazon} alt="Amazon Logo" className="job-image-amazon"></img> 

            </div>
        
            <div className="job" onClick={infoLatymer}>
            <img src={Latymer} alt="Latymer Logo" className="job-image"></img>

            </div>
       
        </div>
        <div className="work-row">

        <div className="job" onClick={infoFullMeasure}>
            <img src={fullMeasure} alt="FullMeasure Logo" className="job-image"></img> 

            </div>

        </div>
    </div>

  );
}

export default Work;