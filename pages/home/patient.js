import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CliniChristy Medical Clinic</title>
        <meta name="description" content="Medical clinic website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>CliniChristy</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="#about-us">About Us</Link></li>
            <li><Link href="#medical-specializations">Medical Specializations</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#contact-us">Contact Us</Link></li>
            <li><Link href={`/login`}>Login</Link></li>
            <li><Link href={`/register`}>Register</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
          </ul>
        </nav>
        {/* Add social media icons here */}
      </header>

      <main className={styles.main}>
        <section id="about-us" className={styles.section}>
          <h2>About Us</h2>
          <p>Insert a brief paragraph about the medical clinic, its history and mission.</p>
        </section>

        <section id="medical-specializations" className={styles.section}>
          <h2>Medical Specializations</h2>
          <ul>
            <li>Specialization 1</li>
            <li>Specialization 2</li>
            <li>Specialization 3</li>
            <li>Specialization 4</li>
          </ul>
        </section>

        <section id="services" className={styles.section}>
          <h2>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
        </section>

        <section id="contact-us" className={styles.section}>
          <h2>Contact Us</h2>
          <p>Insert a contact form or contact details here.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        {/* Insert footer content here, such as copyright information */}
      </footer>
    </div>
  );
}