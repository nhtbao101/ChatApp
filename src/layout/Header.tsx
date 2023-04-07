import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <header>
    <div>
      {/* <video autoPlay muted loop id="myVideo">
        <source
          src="Media/y2mate.com - high tech digital earth background 4 k KWC32SJ_1080p.mp4"
          type="video/mp4"
        />
      </video> */}
      <header>
        <Link to="/">
          <h2 className="logo">
            ST
            <img src="https://i.postimg.cc/FHW3Lsf0/Group-4287-1.png" />
            RK PROTOCOL
          </h2>
        </Link>
        <ul>
          <li>Features</li>
          <li>Token</li>
          <li>Roadmap</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      {/* <div>
        <div className="title">
          Stark <span>Protocol</span>
        </div>
        <div className="text1">
          <span>Built on Near and Solana</span>
        </div>
        <div className="text1 text2">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
      </div> */}
    </div>
    // </header>
  );
};

export default Header;
