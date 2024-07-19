import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor';
import commonStyles from '../styles/commonStyle.module.css';

type SkillsProps = {
  data: string | null;
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor();

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header}>
          <span className={commonStyles.headerText}>
            <h1>スキル</h1>
            <br />
            <div className={commonStyles.skillSection}>
              <h2>フロントエンド</h2>
              <ul className={commonStyles.skillList}>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>TypeScript</span>
                  <span className={commonStyles.skillLevel}>★★★★☆</span>
                </li>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>HTML/CSS</span>
                  <span className={commonStyles.skillLevel}>★★★☆☆</span>
                </li>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>React</span>
                  <span className={commonStyles.skillLevel}>★★★☆☆</span>
                </li>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>Next.js</span>
                  <span className={commonStyles.skillLevel}>★★★☆☆</span>
                </li>
              </ul>
            </div>
            <div className={commonStyles.skillSection}>
              <h2>バックエンド</h2>
              <ul className={commonStyles.skillList}>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>TypeScript</span>
                  <span className={commonStyles.skillLevel}>★★★☆☆</span>
                </li>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>Prisma</span>
                  <span className={commonStyles.skillLevel}>★☆☆☆☆</span>
                </li>
                <li className={commonStyles.skillItem}>
                  <span className={commonStyles.skillName}>Fastify</span>
                  <span className={commonStyles.skillLevel}>★☆☆☆☆</span>
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div className={commonStyles.textcontainer} />
        <div className={commonStyles.descriptioncontainer} />
        {data !== null && data !== '' ? data : 'No data available'}{' '}
      </div>
      <div ref={cursorRef} className={commonStyles.cursor} />
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
