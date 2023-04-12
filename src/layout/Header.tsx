import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'src/stores/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    if (user) {
      const tempUser = {
        id: user.uid,
        userName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      };
      dispatch(setUser(tempUser));
    }
  }, [user]);

  return (
    <header>
      <div className="container">
        <div className="content">
          <Link to="/">
            <h2 className="logo">
              ST
              <img src="" />
              BARO CHAT
            </h2>
          </Link>
          <ul className="menu-section">
            <li>Features</li>
            <li>Token</li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {user ? (
              <li className="avatar-section">
                <img className="avatar" src={user.photoURL} alt="avatar" />
                <ul>
                  <li>{user.displayName}</li>
                  <li onClick={signOut}>Logout</li>
                </ul>
              </li>
            ) : (
              <li className="login-section">
                <img
                  onClick={googleSignIn}
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png"
                  alt="Sign in with google"
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
