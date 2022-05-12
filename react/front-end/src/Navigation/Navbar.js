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
              <form action="http://localhost:4005/search" method="post">
              <input type="text" name="input" placeholder="Search Term" />
              <button onClick="submit">SEARCH</button>
              </form>
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="/">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

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
                <a href="http://localhost:3000/booking">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Bookings</span>
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
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="http://localhost:3000/login">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Login</span>
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