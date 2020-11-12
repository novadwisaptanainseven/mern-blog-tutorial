import React from "react";
import "./header.scss";
import { useHistory } from "react-router-dom";
// import { Link } from "../../atoms";

const Header = () => {
  const history = useHistory();

  const handleClick = (e, path) => {
    e.preventDefault();

    history.push(path);
    // history.push(path);
  };
  return (
    <div className="header">
      <p className="logo">Riptcode</p>
      <ul className="list-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create-blog">Create Blog</a>
        </li>
        <li>
          <a href="/login" onClick={(e) => handleClick(e, "/login")}>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
