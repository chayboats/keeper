import styles from "./internals/styles/login.css";
import Link from "next/link";
import { inputInfo } from "./internals/data/inputInfo";
import LabeledInput from "./internals/components/LabeledInput";
import { useState, useEffect } from "react";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const [user, setUser] = useState("")

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
    if (id != "checkbox") {
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
    console.log(users.find)
  }

  return (
    <div className="login-page">
      <div className="form-container">
        <form className="container">
          <i className="fa-solid fa-list-check"></i>

          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          {inputInfo.map((input) => (
            <LabeledInput
              id={input.id}
              key={input.id}
              divClass={input.divClass}
              type={input.type}
              inputClass={input.inputClass}
              placeholder={input.placeholder}
              labelClass={input.labelClass}
              labelFor={input.labelFor}
              labelText={input.labelText}
              onChange={updateLogin}
            />
          ))}

          {/* <Link href="/home">
            
          </Link> */}

          <button
              onClick={authenticate}
              className="btn btn-dark w-100 py-2"
              type="submit"
            >
              Sign in
            </button>

          <a className="center mt-3" href="">
            Create an account
          </a>

          <p className="center mt-3 text-body-secondary">©2023</p>
        </form>
      </div>
    </div>
  );
}
