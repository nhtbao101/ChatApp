import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <i className="bx bx-menu menu-icon"></i>
          <span className="logo-name">CodingLab</span>
        </Link>
      </div>
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <i className="bx bx-menu menu-icon"></i>
            <span className="logo-name">CodingLab</span>
          </Link>
        </div>

        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-home-alt icon"></i>
                <span className="link">Dashboard</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="link">Revenue</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-bell icon"></i>
                <span className="link">Notifications</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-message-rounded icon"></i>
                <span className="link">Messages</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-pie-chart-alt-2 icon"></i>
                <span className="link">Analytics</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-heart icon"></i>
                <span className="link">Likes</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/about" className="nav-link">
                <i className="bx bx-folder-open icon"></i>
                <span className="link">About</span>
              </Link>
            </li>
          </ul>
          <div className="bottom-content">
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-cog icon"></i>
                <span className="link">Settings</span>
              </Link>
            </li>
            <li className="list">
              <Link to="#" className="nav-link">
                <i className="bx bx-log-out icon"></i>
                <span className="link">Logout</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
