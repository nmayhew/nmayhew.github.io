import './App.css';
import Navbar from "./pages/navbar/navbar";
import Intro from "./pages/intro/intro";
import Education from "./pages/education/education";
import Work from "./pages/work/work";
import Project from "./pages/projects/projects";
import Programming from "./pages/programming/programming";
import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize('UA-232337955-1');
ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="app">
    <div className="content">
        <Intro />
        <Education />
        <Work />
        <Project />
        <Programming />
    </div>
      <Navbar />
      
    </div>
  );
}

export default App;
