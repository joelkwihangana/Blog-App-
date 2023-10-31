import "./Topbar.css";
import profilepic from "../../assets/user-1.jpg";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topIcon topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-x-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistItem">Home</li>
          <li className="toplistItem">About</li>
          <li className="toplistItem">Contact</li>
          <li className="toplistItem">Write</li>
          <li className="toplistItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={profilepic} alt="" className="topImg" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
