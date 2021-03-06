import "./Navbar.css";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggleNavBar = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="App">
      <nav className={isOpen ? "sidebar" : "sidebar close"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">QA Cinemas</span>
              <span className="profession">Films for you</span>
            </div>
          </div>
          <i
            className="bx bx-chevron-right toggle"
            onClick={handleToggleNavBar}
          />
        </header>

        <div className="menu-bar">
          <div className="menu">
            

            <ul className="menu-links">

              <li className="nav-link">
                <a href="http://localhost:3000/listings">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Now Showing</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="http://localhost:3000/newReleases">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Upcoming</span>
                </a>
              </li>


              <li className="nav-link">
                <a href="http://localhost:3000/placesToGo">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Places to go</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="http://localhost:3000/gettingThere">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Getting there</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://localhost:3000/discussionBoard">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Forum</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://localhost:3000/screens">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Screens</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://localhost:3000/classifications">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Classifications</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://localhost:3000/openingTimes">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Opening Times</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://localhost:3000/contact">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Contact Us</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="http://localhost:3000/aboutUs">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">About Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="http://localhost:4005/logout">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;