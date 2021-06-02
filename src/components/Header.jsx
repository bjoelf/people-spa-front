import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <a
        className="navbar-brand"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer">
        React
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://create-react-app.dev/docs/documentation-intro/"
            target="_blank"
            rel="noopener noreferrer">
            Dev Docs
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react"
            target="_blank"
            rel="noopener noreferrer">
            Digital Ocean
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.w3schools.com/react/default.asp"
            target="_blank"
            rel="noopener noreferrer">
            W3Schools
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
