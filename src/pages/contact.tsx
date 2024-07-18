import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

type ContactProps = {
  data: string | null;
};

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Contact</div>
        {/* <div className={styles.contactInfo}> */}
        <div>{data}</div>
        {/* <div>
            Email: <a href="mailto:s1f102201616@toyo.jp">s1f102201616@toyo.jp</a>
          </div>
          <div>Phone: 090-1413-0226</div>
          <div>
            GitHub: <a href="https://github.com/0226">https://github.com/0226</a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  let data: string | null = null;

  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    data = typeof parsedData.contact === 'string' ? parsedData.contact : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Contact;
