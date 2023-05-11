import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Register.module.css';
import Link from 'next/link';

export default function Login() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswd, setConfirmPasswd] = useState('');
    const [userType, setUserType] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleChange = {
        firstName:(event) => {
            setFirstName(event.target.value);
        },
        lastName:(event) => {
            setLastName(event.target.value);
        },
        username:(event) => {
            setUsername(event.target.value);
        },
        password:(event) => {
            setEmail(event.target.value);
        },
        password:(event) => {
            setPassword(event.target.value);
        },
        confirmPasswd:(event) => {
            setConfirmPasswd(event.target.value);
        },
        userType:(event) => {
            setUserType(event.target.value);
        },
        age:(event) => {
            setAge(event.target.value);
        },
        city:(event) => {
            setCity(event.target.value);
        },
        neighborhood:(event) => {
            setNeighborhood(event.target.value);
        },
        street:(event) => {
            setStreet(event.target.value);
        },
        houseNumber:(event) => {
            setHouseNumber(event.target.value);
        },
        complement:(event) => {
            setComplement(event.target.value);
        }

    }



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
                <input className={styles.myInput} type="text" id="username" value={username} onChange={handleChange.username} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="firstName">First Name</label>
                <input className={styles.myInput} type="text" id="firstName" value={firstName} onChange={handleChange.firstName} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="lastName">Last Name</label>
                <input className={styles.myInput} type="text" id="lastName" value={lastName} onChange={handleChange.lastName} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="email">Email</label>
                <input className={styles.myInput} type="text" id="Email" value={email} onChange={handleChange.email} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="password">Password</label>
                <input className={styles.myInput} type="password" id="password" value={password} onChange={handleChange.password} required />
            </div>
            <div className={styles.inputContainer}>
            <label className={styles.myLabel} htmlFor="confirmPassword">Confirm Password</label>
                <input className={styles.myInput} type="password" id="confirmPassword" value={confirmPasswd} onChange={handleChange.confirmPasswd} required />
            </div>
            <div className={styles.inputContainer}>
                <a>User Type</a>
                <select className={styles.mySelect} name="userType" id="userType" value={userType} onChange={handleChange.userType}>
                    <option className={styles.myOption} value="">Select a user type</option>
                    <option className={styles.myOption} value="doctor">Doctor</option>
                    <option className={styles.myOption} value="recepcionist">Recepcionist</option>
                    <option className={styles.myOption} value="patient">Patient</option>
                </select>
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="age">Age</label>
                <input className={styles.myInput} type="text" id="age" value={age} onChange={handleChange.age} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="city">City</label>
                <input className={styles.myInput} type="text" id="city" value={city} onChange={handleChange.city} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="neighborhood">Neighborhood</label>
                <input className={styles.myInput} type="text" id="neighborhood" value={neighborhood} onChange={handleChange.neighborhood} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="street">Street</label>
                <input className={styles.myInput} type="text" id="street" value={street} onChange={handleChange.street} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="">House Number</label>
                <input className={styles.myInput} type="text" id="houseNumber" value={houseNumber} onChange={handleChange.houseNumber} required />
            </div>
            <div className={styles.inputContainer}>
                <label className={styles.myLabel} htmlFor="complement">Complement</label>
                <input className={styles.myInput} type="text" id="complement" value={complement} onChange={handleChange.complement} required />
            </div>
            <button className={styles.myButton} type="submit">Register</button> 
            
            <a className={styles.answerOfRegister}> You have a account? </a><Link href="/login">Register</Link>
            
            </form>
        </main>

        <footer className={styles.footer}>
            {/* Insert footer content here, such as copyright information */}
        </footer>
        </div>
    );
}
