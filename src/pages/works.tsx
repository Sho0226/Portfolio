import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

type WorksProps = {
  data: string;
};

const Works: React.FC<WorksProps> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Works</div>
        <div>{data}</div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return { props: { data: data.works } };
}

export default Works;
