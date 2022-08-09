
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, loginUser } from '../slices/userSlice';


function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ loginEmail, loginPassword }));
  }

  const handleSignupClick = async (e) => {
    e.preventDefault();
    dispatch(createUser({ signupEmail, signupPassword, signupUsername }));
  }

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  }

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  }

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  }

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
  }

  const handleSignupUsernameChange = (e) => {
    setSignupUsername(e.target.value);
  }

  return (
    <>
      <div className="login-btn-wrapper">
        <button className={`login-btn${!isSignIn ? ' active' : ''}`} onClick={() => { setIsSignIn(false) }}>Login</button>
        <button className={`login-btn${isSignIn ? ' active' : ''}`} onClick={() => { setIsSignIn(true) }}>Signup</button>
      </div>
      {!isSignIn &&
        <form>
          <input placeholder="Email" onChange={handleLoginEmailChange} value={loginEmail} />
          <input placeholder="Password" type="password" onChange={handleLoginPasswordChange} value={loginPassword} />
          <button className="submit-btn" onClick={handleLoginClick}>Login</button>
        </form>
      }
      {
        isSignIn &&
        <form>
          <input placeholder="Register username" onChange={handleSignupUsernameChange} value={signupUsername} />
          <input placeholder="Register email" onChange={handleSignupEmailChange} value={signupEmail} />
          <input placeholder="Register password" type="password" onChange={handleSignupPasswordChange} value={signupPassword} />
          <button className="submit-btn" onClick={handleSignupClick}>Register</button>
        </form>
      }
    </>)
}

export default Login;