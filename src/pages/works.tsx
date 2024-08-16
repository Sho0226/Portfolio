import fs from 'fs';
import path from 'path';
import React from 'react';
import Navbar from '../../components/Navbar';
import useCustomCursor from '../../hooks/useCustomCursor';
import commonStyles from '../styles/commonStyle.module.css';

type Game = {
  name: string;
  sourceUrl: string;
  deployUrl?: string;
};

type Work = {
  title: string;
  description: string;
  games: Game[];
  sourceUrl?: string;
  deployUrl?: string;
};

const worksData: Work[] = [
  {
    title: '個人開発',
    description: '{ゲームロジック}',
    games: [
      {
        name: 'オセロ',
        sourceUrl: 'https://github.com/Sho0226/NewOthello',
        deployUrl: 'https://sho0226.github.io/NewOthello/',
      },
      {
        name: 'マインスイーパー',
        sourceUrl: 'https://github.com/Sho0226/minesweeper',
        deployUrl: 'https://sho0226.github.io/minesweeper/',
      },
      {
        name: 'テトリス',
        sourceUrl: 'https://github.com/Sho0226/Tetris',
        deployUrl: 'https://sho0226.github.io/Tetris/',
      },
      {
        name: 'ブロック崩し',
        sourceUrl: 'https://github.com/Sho0226/Breaking-blocks',
        deployUrl: 'https://sho0226.github.io/Breaking-blocks/',
      },
      {
        name: 'ライツアウト',
        sourceUrl: 'https://github.com/Sho0226/LightsOut',
        deployUrl: 'https://sho0226.github.io/LightsOut/',
      },
      {
        name: 'チェス',
        sourceUrl: 'https://github.com/Sho0226/chess',
        deployUrl: 'https://sho0226.github.io/chess/',
      },
    ],
  },
  {
    title: '',
    description: '{web開発}',
    games: [
      {
        name: 'todoList',
        sourceUrl: 'https://github.com/Sho0226/todolist',
      },
    ],
  },
  {
    title: 'チーム開発',
    description: '',
    games: [
      {
        name: 'クロニクル',
        sourceUrl: 'https://github.com/Sho0226/Chronicle',
      },
    ],
  },
];

type WorksProps = {
  data: string | null;
};

const Works: React.FC<WorksProps> = ({ data }) => {
  const { cursorRef, navbarRef } = useCustomCursor();

  return (
    <>
      <Navbar ref={navbarRef} />
      <div className={commonStyles.container}>
        <div className={commonStyles.header}>
          <span className={commonStyles.headerText}>
            <h1>成果物</h1>
            <br />
            <div className={commonStyles.worksSection}>
              <ul className={commonStyles.worksList}>
                {worksData.map((work, index) => (
                  <li key={index} className={commonStyles.workItem}>
                    <span className={commonStyles.workTitle}>{work.title}</span>
                    {work.description && work.description !== '' && (
                      <span className={commonStyles.workDescription}>{work.description}</span>
                    )}
                    {work.games.length > 0 && (
                      <div className={commonStyles.gameLinks}>
                        {work.games.map((game, idx) => (
                          <div key={idx} className={commonStyles.gameLink}>
                            <span>{game.name}:</span>
                            <a
                              href={game.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={commonStyles.sourceLink}
                            >
                              ソースコード
                            </a>{' '}
                            |
                            {game.deployUrl !== undefined && (
                              <a
                                href={game.deployUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={commonStyles.deployLink}
                              >
                                プレイ
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {work.sourceUrl !== undefined && (
                      <a
                        href={work.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonStyles.sourceLink}
                      >
                        ソースコードリンク
                      </a>
                    )}
                    {work.deployUrl !== undefined && (
                      <a
                        href={work.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonStyles.deployLink}
                      >
                        デプロイリンク
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </span>
        </div>
        <div className={commonStyles.textcontainer} />
        <div className={commonStyles.descriptioncontainer} />
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
    data = typeof parsedData.works === 'string' ? parsedData.works : null;
  } catch (error) {
    console.error('Error reading data.json:', error);
  }

  return { props: { data } };
}

export default Works;
