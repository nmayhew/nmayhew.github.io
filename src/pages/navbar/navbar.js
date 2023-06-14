import "./navbar.css";
import { Link } from "react-scroll";
import { Avatar } from 'antd';
import me from "../../assets/me/me.JPG";
import { useMediaQuery } from 'react-responsive';

function scroll(scrollDistanceInPx) {
  return Math.abs(scrollDistanceInPx * 2);
}

function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <div className="navbar">
      <div className="navbar-links">
        {!isMobile && <Avatar size={60} src={me} alt="Logo" shape="circle" />}
        <Link
          to="intro"
          className="navbar-link"
          activeClass="navbar-active"
          smooth
          spy={true}
          offset={-70}
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
          offset={-70}
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
          offset={-70}
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
          offset={-70}
          spy={true}
          isDynamic={true}
          duration={scroll}
        >
          <p className="navbar-text">Projects</p>
        </Link>
        {!isMobile &&
          <Link
            to="programming"
            className="navbar-link"
            activeClass="navbar-active"
            smooth
            spy={true}
            offset={-70}
            isDynamic={true}
            duration={scroll}
          >
            <p className="navbar-text">Resume</p>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
