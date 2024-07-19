import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor';
import commonStyles from '../styles/commonStyle.module.css';

interface AchievementsProps {
  data: string | null;
}

const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor();

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header} />
        <span className={commonStyles.headerText}>
          <h1>受賞歴</h1>
          <div className={commonStyles.achievementsSection}>
            <div className={commonStyles.achievementItem}>
              <h2>【技育CAMP】ハッカソン Vol.8 努力賞</h2>
            </div>{' '}
          </div>{' '}
          <div className={commonStyles.achievementpadding} />
        </span>
        {data !== null && data !== '' ? data : 'No data available'}
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
    data = typeof parsedData.achievements === 'string' ? parsedData.achievements : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Achievements;
