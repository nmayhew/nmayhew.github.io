import './App.css';
import Navbar from "./pages/navbar/navbar";
import Intro from "./pages/intro/intro";
import Education from "./pages/education/education";
import Work from "./pages/work/work";
import Project from "./pages/projects/projects";
import Programming from "./pages/programming/programming";
import ReactGA from 'react-ga';
import { ScrollContainer } from "react-scroll-motion";
function App() {
  ReactGA.initialize('UA-232337955-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
      // alpha: rotation around z-axis
      var rotateDegrees = event.alpha;
      // gamma: left to right
      var leftToRight = event.gamma;
      // beta: front back motion
      var frontToBack = event.beta;

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
  }

  var handleOrientationEvent = function (frontToBack, leftToRight, rotateDegrees) {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="content">
        <ScrollContainer >
          <Intro />
          <Education />
          <Work />
          <Project />
          <Programming />
        </ScrollContainer>
      </div>
      <Navbar />

    </div>
  );
}

export default App;
