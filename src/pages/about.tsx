import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor'; // カスタムフックをインポート
import commonStyles from '../styles/commonStyle.module.css';

type AboutProps = {
  data: string | null;
};

const descriptions = [
  '氏名を入力します。',
  '生年月日を入力します。',
  '大学・学部を入力します。',
  '希望職種を入力します。',
  '趣味・特技を入力します。',
  '自己PRを入力します。',
];

const About: React.FC<AboutProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor(); // カスタムフックを使用
  const [hovered, setHovered] = useState<boolean[]>(new Array(6).fill(false));

  const handleMouseEnter = (index: number) => {
    setHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header}>
          {['氏名', '生年月日', '大学・学部', '希望職種', '趣味・特技', '自己PR'].map(
            (text, index) => (
              <div
                key={index}
                className={`${commonStyles.button} ${commonStyles.type1} ${hovered[index] ? commonStyles.hovered : ''} ${index % 2 === 0 ? commonStyles.left : commonStyles.right}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <h2>{text}</h2>
                <div className={commonStyles.description}>{descriptions[index]}</div>
              </div>
            ),
          )}
        </div>
        <div className={commonStyles.content}>
          {data !== null && data !== '' ? data : 'No data available'}
        </div>
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
