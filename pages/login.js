import Head from "next/head";
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
    router.push("/");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
      return (
        <div className={styles.container}>
          <Head>
            <title>Sign in</title>
            <meta
              name="description"
            />
            <link rel="icon" href="/logo.ico" />
          </Head>
              <main className="">
            <h1>Sign in below</h1>
            <br/>
                  <form onSubmit={(event) => signIn(event, email, password)}>
                      <label htmlFor="email">Email Address</label><br/>
                      <input
                          type="email"
                          name="email"
                value={email} onChange={(event) => setEmail(event.target.value)} /><br />
              <label htmlFor="password">Password</label><br />
                      <input
                          type="password"
                          name="password"
                value={password} onChange={(event) => setPassword(event.target.value)} /><br /><br />
                      <button type="submit">Submit</button>
                  </form>
              </main>
          </div>);
  }
};

export default Login;