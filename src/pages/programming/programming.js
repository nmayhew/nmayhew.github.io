import "./programming.css";
import rowingPhoto from '../../assets/backdrop/rowing2.png';
import MaterialIcon from 'material-icons-react';
import { Progress } from 'antd';

function Intro() {
  return (
    <div id="programming" className="programming">
        <div className="programming-overHead">
        <MaterialIcon icon="code" size={60} color='#FFFFFF'/>
            <h1 className="programming-header">
                Programming
            </h1>
        </div>
        <div className="programming-content">
        <div className="programming-progress">
            <div className="programming-progress-headers">
            <p>Skill Level</p>
            <p>Language</p>
            </div>
            <div className="programming-progress-content">
            <Progress  percent={100} showInfo={false} trailColor='#000000' strokeColor='#0066FF'/>
            <p className="programming-bars-padding">Swift</p>
            </div>
            <div className="programming-progress-content">
            <Progress percent={100} showInfo={false} trailColor='#000000' strokeColor='#DE541E'/>
            <p className="programming-bars-padding">C/C++</p>
            </div>
            <div className="programming-progress-content">
            <Progress percent={65} showInfo={false} trailColor='#000000' strokeColor='#33FF00'/>
            <p className="programming-bars-padding">JavaScript</p>
            </div>
            <div className="programming-progress-content">
            <Progress percent={50} showInfo={false} trailColor='#000000' strokeColor='#0066FF'/>
            <p className="programming-bars-padding">HTML/C++</p>
            </div>
            <div className="programming-progress-content">
            <Progress percent={30} showInfo={false} trailColor='#000000' strokeColor='#DE541E'/>
            <p className="programming-bars-padding">Java</p>
            </div>
            <div className="programming-progress-content">
            <Progress percent={30} showInfo={false} trailColor='#000000' strokeColor='#33FF00'/>
            <p className="programming-bars-padding">Python</p>
            </div>
            
            
            
            
            
        </div>
        <img src={rowingPhoto} alt="Stroking at Stanford" className="programming-photo"/>
        </div> 
        

    </div>
  );
}

export default Intro;

