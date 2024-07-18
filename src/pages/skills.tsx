import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

type SkillsProps = {
  data: string | null;
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Skills</div>
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
    data = typeof parsedData.skills === 'string' ? parsedData.skills : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Skills;
