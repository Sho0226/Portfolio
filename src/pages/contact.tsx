import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor';
import commonStyles from '../styles/commonStyle.module.css';

type ContactProps = {
  data: string | null;
};

const Contact: React.FC<ContactProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor();

  // データを直接コンポーネント内に記述
  const phone = '090-1413-0226';
  const github = 'https://github.com/Sho0226';
  const email = 's1f102201616@toyo.jp';

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header}>
          <span className={commonStyles.headerText}>
            <h1>連絡先等</h1>

            <h2>
              <div className={commonStyles.contactRow}>
                <strong>電話番号:</strong> {phone}
              </div>
            </h2>
            <h2>
              <div className={commonStyles.contactRow}>
                <strong>GitHub:</strong>
              </div>
              <a href={github} className={commonStyles.contactLink}>
                {github}
              </a>
            </h2>
            <h2>
              <div className={commonStyles.contactRow}>
                <strong>メールアドレス:</strong>
              </div>
              {email}
            </h2>
          </span>
        </div>
        <div className={commonStyles.contactpadding} />
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
    data = typeof parsedData.contact === 'string' ? parsedData.contact : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Contact;
