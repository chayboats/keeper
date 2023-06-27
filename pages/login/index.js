import styles from './internals/styles/login.css';
import Link from 'next/link';
import { inputInfo } from './internals/data/inputInfo';
import LabeledInput from './internals/components/LabeledInput';
import { useState, useEffect } from 'react';

export default function Login() {
  // Put in separate file to study

  // const [users, setUsers] = useState([]);

  // function callbackFetch() {
  //   fetch('https://dummyjson.com/users') // returns promise
  //     .then((res) => res.json()) // returns promise
  //     .then((data) => setUsers(data.users));
  // }

  // useEffect(() => {
  //   callbackFetch();
  // }, []);

  // async function asyncFetch() {
  //   try {
  //     const response = await fetch('https://dummyjson.com/users');
  //     const jsonResp = await response.json();
  //     setUsers(jsonResp.users);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(async () => {
  //   await asyncFetch();
  // }, []);

  // if (users.length == 0) {
  //   return <div>NO DATA</div>;
  // }

  console.log(users);
  return (
    <div class="login-page">
      <div class="form-container">
        <form class="container">
          <i class="fa-solid fa-list-check"></i>

          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          {inputInfo.map((input) => (
            <LabeledInput
              key={input.id}
              divClass={input.divClass}
              type={input.type}
              inputClass={input.inputClass}
              placeholder={input.placeholder}
              labelClass={input.labelClass}
              labelFor={input.labelFor}
              labelText={input.labelText}
            />
          ))}

          <Link href="/home">
            <button
              class="btn btn-dark w-100 py-2"
              type="submit"
            >
              Sign in
            </button>
          </Link>

          <a
            className="center mt-3"
            href=""
          >
            Create an account
          </a>

          <p class="center mt-3 text-body-secondary">©2023</p>
        </form>
      </div>
    </div>
  );
}
