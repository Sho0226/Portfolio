import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const Contact: React.FC<{ data: string }> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Contact</div>
        <div className={styles.contactInfo}>
          <div>{data}</div>
          <div>
            Email: <a href="mailto:s1f102201616@toyo.jp">s1f102201616@toyo.jp</a>
          </div>
          <div>Phone: 090-1413-0226</div>
          <div>
            GitHub: <a href="https://github.com/0226">https://github.com/0226</a>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3000/api/data');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();

    return { props: { data: data.contact } };
  } catch (error) {
    console.error(error);
    return { props: { data: 'Error loading data' } };
  }
}

export default Contact;
