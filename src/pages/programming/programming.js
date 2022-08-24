import "./programming.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import MaterialIcon from 'material-icons-react';
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import Resume from '../../assets/cv/CV.pdf';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, MoveIn} from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';

function Programming() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <ScrollContainer snap="none">
    <ScrollPage page={4}>
    <div id="programming" className="programming">
        <div className="programming-overHead">
        {isMobile && <MaterialIcon icon="code" size={40} color='#FFFFFF'/>}
        {!isMobile && <MaterialIcon icon="code" size={55} color='#FFFFFF'/>}
            <h1 >
            <a className="programming-header"
            href="https://docs.google.com/document/d/e/2PACX-1vQlo58VwXoxyS-fTVbCtztSdIDBOUDKOmLqn_7gl1Un2MXAtkcf7Zn6tPAms8tFo0mflQRUW48-KcKZ/pub">
                Resume
            </a>
            </h1>
        </div>
        <div className="programming-content">
              <iframe
              marginwidth="0"
              marginheight="0"
              className="programming-progress"
              title="cv"
              frameBorder="0"
                src="https://docs.google.com/document/d/e/2PACX-1vQlo58VwXoxyS-fTVbCtztSdIDBOUDKOmLqn_7gl1Un2MXAtkcf7Zn6tPAms8tFo0mflQRUW48-KcKZ/pub?embedded=true">  
                </iframe>
                <Animator className="programming-photo" animation={batch(FadeIn(), MoveIn(400, 0, 0, 0))}>
                <img src={rowingPhoto} alt="Racing at Stanford" className="programming-photo"/>    
              </Animator>
        </div> 

    </div>
    </ScrollPage>
    </ScrollContainer>
  );
}

export default Programming;

