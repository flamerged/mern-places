import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <button className="header-menu">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </button>
      <h1 className="header-title">
        <Link to="/">Your Placees</Link>
      </h1>
      <nav>...</nav>
    </div>
  );
};

export default Header;
