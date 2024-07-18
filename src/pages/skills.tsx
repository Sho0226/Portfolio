import React from 'react';
import Navbar from '../../components/Navbar';
import styles from './index.module.css';

const Skills: React.FC<{ data: string }> = ({ data }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>Skills</div>
        <ul>
          <li>HTML, CSS, TypeScript, React</li>
          <li>TypeScript, Node.js, Vue.js, Fastify</li>
          <li>PostgreSQL, Prisma</li>
          <li>Aspida</li>
          <li>Git, Docker, Linux</li>
        </ul>
        <div>{data}</div>
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

    return { props: { data: data.works } };
  } catch (error) {
    console.error(error);
    return { props: { data: 'Error loading data' } };
  }
}

export default Skills;
