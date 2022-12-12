import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../components/auth/auth";
import { setErrorMessage } from "../components/auth/setErrorMessage";

const Login = () => {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event, email, password) => {
    event.preventDefault();

    auth
      .signIn(email, password)
      .then(() => {
        router.push("/movie");
      })
      .catch((error) => {
        let { title, description } = setErrorMessage(error);
        // do something with error title and description here
        alert(title + ": " + description);
      });
  };

  // loading state
  if (auth.loading) {
    return <p>Loading...</p>;
  }

  // if a user is logged in, redirect to a page of your liking
  if (auth.user) {
    router.push("/index");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
      return (
          <div className={styles.container}>
              <main className="">
                  <h1>Unlimited films, TV programmes and more</h1>
                  <form onSubmit={(event) => signIn(event, email, password)}>
                      <label htmlFor="email">Email Address</label>
                      <input
                          type="email"
                          name="email"
                          value={email} onChange={(event) => setEmail(event.target.value)} />
                      <label htmlFor="password">Password</label>
                      <input
                          type="password"
                          name="password"
                          value={password} onChange={(event) => setPassword(event.target.value)} />
                      <button type="submit">Submit</button>
                  </form>
              </main>
          </div>);
  }
};

export default Login;