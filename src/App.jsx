import './App.css';
import Navbar from "./pages/navbar/navbar";
import Intro from "./pages/intro/intro";
import Education from "./pages/education/education";
import Work from "./pages/work/work";
import Project from "./pages/projects/projects";
import Programming from "./pages/programming/programming";
import { ScrollContainer } from "react-scroll-motion";

function App() {
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
