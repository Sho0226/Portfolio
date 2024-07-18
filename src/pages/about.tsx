import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor'; // カスタムフックをインポート
import commonStyles from './commonStyle.module.css';

type AboutProps = {
  data: string | null;
};

const About: React.FC<AboutProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor(); // カスタムフックを使用

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header}>About</div>
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
    data = typeof parsedData.about === 'string' ? parsedData.about : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default About;
