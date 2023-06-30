import './internals/styles/login.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('atuny0@sohu.com');
  const [password, setPassword] = useState('9uQFF1Lh');

  const [signInError, setSignInError] = useState(false);

  async function getUsers() {
    const data = await fetch('https://dummyjson.com/users');
    const jsonData = await data.json();
    setUsers(jsonData.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (users.length == 0) {
    return <h1>Loading</h1>;
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function authenticate(e) {
    e.preventDefault();
    let successfulLogin = users.find((user) => {
      return email == user.email && password == user.password;
    });

    if (!successfulLogin) {
      setSignInError(true);
      return;
    }

    router.push('/home');
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <form
          onSubmit={authenticate}
          className="container"
        >
          <i className="fa-solid fa-list-check"></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {signInError && (
            <div
              className="alert alert-danger"
              role="alert"
            >
              Incorrect email or password
            </div>
          )}

          <div className="form-floating">
            <input
              type="email"
              className="form-control login-input"
              id="email"
              placeholder="name@example.com"
              onChange={updateEmail}
              required
              value={email}
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control login-input"
              id="password"
              placeholder="Password"
              onChange={updatePassword}
              required
              value={password}
            />
            <label>Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              type="form-check text-start my-3"
              className="form-check-input"
              id="checkbox"
            />
            <label
              htmlFor="checkbox"
              className="form-check-label"
            >
              Remember me
            </label>
          </div>

          <button
            onSubmit={authenticate}
            className="btn btn-dark w-100 py-2"
            type="submit"
          >
            Sign in
          </button>

          <a
            className="center"
            href=""
          >
            Create an account
          </a>

          <p className="center text-dark">©{new Date().getFullYear()}</p>
        </form>
      </div>
    </div>
  );
}
