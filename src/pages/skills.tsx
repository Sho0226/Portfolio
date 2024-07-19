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
        <div className={commonStyles.header}>スキルセット</div>
        <div>{data !== null && data !== '' ? data : 'No data available'}</div>
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
