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
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search Term" />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Now Showing</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Upcomming</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Bookings</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Places to go</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Getting there</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Forum</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Screens</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Classifications</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
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