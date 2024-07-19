import fs from 'fs';
import path from 'path';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor';
import commonStyles from '../styles/commonStyle.module.css';

type AboutProps = {
  data: string | null;
};

const descriptions = [
  '<h1>名前 : 勝間田 翔</h1></br><h1>大学・学部 : 東洋大学 情報連携学部 情報連携学科</h1></br><h1>生年月日 : 2004 / 02 /26 </h1></>',
  '<h1>フロントエンドエンジニア</br>バックエンドエンジニア</br>プログラマー</br>Webエンジニア</h1>',
  '<h1>お菓子作り</h1><h1>ガジェット集め</h1><h1>楽器演奏</h1>',
  '<h1>私の強みは「あきらめないこと」です。これまでの経験で目標に向かって粘り強く取り組む姿勢を培いました。大学ではプログラミング開発に取り組み、様々な課題を克服し、期限内に開発を完成させることを意識しています。これらの経験から、問題解決力や計画力を身につけました。そしてこの粘り強さと挑戦する姿勢を活かし、貴社で価値を提供できる人材になりたいと考えています。ポートフォリオを通じて、これまでの成果やスキルをお伝えできれば幸いです。</h1>',
];

const About: React.FC<AboutProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor();
  const [hovered, setHovered] = useState<boolean[]>(new Array(4).fill(false));

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
          {['自己紹介', '希望職種', '趣味・特技', '自己PR'].map((text, index) => (
            <div
              key={index}
              className={`${commonStyles.button} ${commonStyles.type1} ${hovered[index] ? commonStyles.hovered : ''} ${index % 2 === 0 ? commonStyles.left : commonStyles.right}`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className={commonStyles.textcontainer}>
                <h2>{text}</h2>
              </div>
              <div
                className={commonStyles.descriptioncontainer}
                dangerouslySetInnerHTML={{ __html: descriptions[index] }}
              />
            </div>
          ))}
        </div>

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
    data = typeof parsedData.about === 'string' ? parsedData.about : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default About;
