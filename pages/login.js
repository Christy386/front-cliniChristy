import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g. using API or backend
    if (username === 'admin' && password === 'password') {
      // Redirect to dashboard or home page
      window.location.href = '/';
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - CliniChristy Medical Clinic</title>
        <meta name="description" content="Login page for medical clinic website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>CliniChristy</h1>
      </header>

      <main className={styles.main}>
        <h2 className={styles.title}>Login</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label className={styles.myLabel} htmlFor="username">Username</label>
            <input className={styles.myInput} type="text" id="username" value={username} onChange={handleUsernameChange} required />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.myLabel} htmlFor="password">Password</label>
            <input className={styles.myInput} type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button className={styles.myButton} type="submit">Submit</button> 
          
          <a className={styles.answerOfRegister}>Don't have a account? </a><Link href="/register">Register</Link>
          
        </form>
      </main>

      <footer className={styles.footer}>
        {/* Insert footer content here, such as copyright information */}
      </footer>
    </div>
  );
}
