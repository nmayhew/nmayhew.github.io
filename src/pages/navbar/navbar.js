import "./navbar.css";
import { Link } from "react-scroll";
import { Avatar } from 'antd';
import me from "../../assets/me/me.JPG";

function scroll(scrollDistanceInPx) {
  return Math.abs(scrollDistanceInPx*2);
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
      <Avatar size={60} src={me} alt="Logo" shape="circle"/>
        <Link
          to="intro"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          spy={true}
          offset={-100}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Intro</p>
        </Link>
        <Link
          to="education"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          spy={true}
          offset={-100}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Education</p>
        </Link>
        <Link
          to="work"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          spy={true}
          offset={-100}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Work</p>
        </Link>
        <Link
          to="project"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          offset={-100}
          spy={true}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Projects</p>
        </Link>
        <Link
          to="programming"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          spy={true}
          offset={-80}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Programming</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
