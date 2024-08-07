import './internals/styles/login.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInError, setSignInError] = useState(false);

  async function getUsers() {
    const data = await fetch('https://dummyjson.com/users');
    const jsonData = await data.json();
    return jsonData.users;
  }

  useEffect(() => {
    const mockUsersValue = localStorage.getItem('mockUsers');

    if (mockUsersValue == null) {
      async function fetchUsers() {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
        localStorage.setItem('mockUsers', JSON.stringify(fetchedUsers));
      }

      fetchUsers();
    } else {
      const mockUsers = JSON.parse(mockUsersValue);
      setUsers(mockUsers);
    }
  }, []);

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
    localStorage.setItem('user', JSON.stringify(email));
  }

  if (users.length == 0) {
    return <h1 className="loading-screen">Loading...</h1>;
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

          <div className="form-floating">
            <input
              type="email"
              name="login-email"
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
              name="login-password"
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
              name="form-check"
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

          {signInError && (
            <div
              style={{ marginTop: '1rem' }}
              className="alert alert-danger"
              role="alert"
            >
              Incorrect email or password
            </div>
          )}
          <Link
            className="center"
            href="/create-account"
          >
            Create an account
          </Link>

          <p className="center text-dark">©{new Date().getFullYear()}</p>
        </form>
      </div>
    </div>
  );
}
