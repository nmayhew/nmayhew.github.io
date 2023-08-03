import "./programming.css";
import rowingPhoto from '../../assets/backdrop/backdrop.JPG';
import programming from '../../assets/cv/programming.svg';
import { Animator, ScrollPage, batch, FadeIn, MoveIn } from "react-scroll-motion";
import CV from '../../assets/cv/CVWebsitePublished.pdf'

function Programming() {
  return (
    <ScrollPage>
      <div id="programming" className="programming">
        <div className="programming-overHead">
          <img src={programming} alt="Code Icon" />
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
            marginWidth="0">

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

