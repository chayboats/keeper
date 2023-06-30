import styles from "./styles/login.css";
import { inputInfo } from "./internals/data/inputInfo";
import LabeledInput from "./internals/components/LabeledInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const [signInError, setSignInError] = useState(false);
  const router = useRouter();

  async function getUsers() {
    const data = await fetch("https://dummyjson.com/users");
    const jsonData = await data.json();
    setUsers(jsonData.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (users.length == 0) {
    return <h1>Loading</h1>;
  }

  function updateLogin(e) {
    const { id, value } = e.target;
    if (id !== "checkbox") {
      setLogin((prevValue) => {
        if (id === "email") {
          return { email: value, password: prevValue.password };
        }

        return { email: prevValue.email, password: value };
      });
    }
  }

  function authenticate(e) {
    e.preventDefault();
    let successfulLogin = users.find((user) => {
      return login.email == user.email && login.password == user.password;
    });

    if (!successfulLogin) {
      setSignInError(true);
      return;
    }

    router.push("/home");
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <form onSubmit={authenticate} type="submit" className="container">
          <i className="fa-solid fa-list-check"></i>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {signInError && (
            <div className="alert alert-danger" role="alert">
              Incorrect email or password
            </div>
          )}

          {inputInfo.map((input) => (
            <LabeledInput key={input.id} {...input} onChange={updateLogin} />
          ))}

          <button
            onSubmit={authenticate}
            className="btn btn-dark w-100 py-2"
            type="submit"
          >
            Sign in
          </button>

          <a className="center" href="">
            Create an account
          </a>

          <p className="center text-dark">©2023</p>
        </form>
      </div>
    </div>
  );
}
