import "./header.css";
import headerImage from "../assets/cover-pic.jpg";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={headerImage} alt="" className="headerImage" />
    </div>
  );
};

export default Header;
