import './internals/create-account.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from './internals/components/Logo';
import LoginSection from './internals/components/LoginSection';
import SignUpButtons from './internals/components/SignUpButtons';
import InvalidAlert from './internals/components/InvalidAlert';

export default function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hideEmailAlert, setHideEmailAlert] = useState(true);
  const [hidePasswordAlert, setHidePasswordAlert] = useState(true);
  const [users, setUsers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const mockUsers = JSON.parse(localStorage.getItem('mockUsers'));
    mockUsers && setUsers(mockUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem('mockUsers', JSON.stringify(users));
  }, [users]);

  function authenticate(event) {
    event.preventDefault();

    if (isEmailExisting()) {
      setHideEmailAlert(false);
      return;
    }
    isPasswordValid() ? handleCreateAccount() : setHidePasswordAlert(false);
  }

  function isEmailExisting() {
    const emailFound = users.find((user) => user.email == email);
    return Boolean(emailFound);
  }

  function isPasswordValid() {
    const pattern = /^[a-zA-Z0-9]+$/;
    const match = password.match(pattern);
    return Boolean(match);
  }

  function handleCreateAccount() {
    setUsers((prevValue) => [...prevValue, { name: name, email: email, password: password }]);
    router.push('/home');
  }

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <Logo />
        <p className="heading">Create an account</p>
        <p>Streamline your organized life with Keeper</p>
        <form onSubmit={authenticate}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
                maxLength={20}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-describedby="emailHelpBlock"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <InvalidAlert
              className="email-alert"
              id="emailHelpBlock"
              isAlertHidden={hideEmailAlert}
              message="* Email belongs to an existing user"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-describedby="passwordHelpBlock"
              required
              minLength={8}
              maxLength={20}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <InvalidAlert
            className="password-alert"
            id="passwordHelpBlock"
            isAlertHidden={hidePasswordAlert}
            message="* Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
          />
          <SignUpButtons />
          <LoginSection />
        </form>
      </div>
      <div className="hero-section"></div>
    </div>
  );
}
