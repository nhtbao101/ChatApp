import React, { useState } from 'react';
// import GoogleSignin from '../img/btn_google_signin_dark_pressed_web.png';

const NavBar = () => {
  const [user, setUser] = useState(false);
  const googleSignIn = () => {
    setUser(true);
  };
  const signOut = () => {
    setUser(false);
  };
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951"
            alt="sign in with google"
            // type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;
