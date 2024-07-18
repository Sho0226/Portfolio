import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

type AchievementsProps = {
  data: string | null;
};

const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Achievements</div>
        <div>{data}</div>
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
    data = typeof parsedData.achievements === 'string' ? parsedData.achievements : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Achievements;
