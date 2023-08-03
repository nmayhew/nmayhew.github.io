import "./programming.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import MaterialIcon from 'material-icons-react';
import { Animator, ScrollPage, batch, FadeIn, MoveIn } from "react-scroll-motion";
import { useMediaQuery } from 'react-responsive';
import CV from '../../assets/cv/CVWebsitePublished.pdf'

function Programming() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <ScrollPage>
      <div id="programming" className="programming">
        <div className="programming-overHead">
          {isMobile && <MaterialIcon icon="code" size={40} color='#FFFFFF' />}
          {!isMobile && <MaterialIcon icon="code" size={55} color='#FFFFFF' />}
          <h1 >
            <a className="programming-header"
              href="https://docs.google.com/document/d/1NCGYl5js3ivfhzCUfKkWKveYvtpqMtz-RgT6pUw0JGo/edit?usp=sharing">
              Resume
            </a>
          </h1>
        </div>
        <div className="programming-content">
          <embed src={CV}
            type="application/pdf"
            className="programming-progress"
            marginWidth="0"
            marginHeight="0">

          </embed>

          <Animator className="programming-photo" animation={batch(FadeIn(), MoveIn(400, 0, 0, 0))}>
            <img src={rowingPhoto} alt="Racing at Stanford" className="programming-photo" />
          </Animator>
        </div>

      </div>
    </ScrollPage>
  );
}

export default Programming;

