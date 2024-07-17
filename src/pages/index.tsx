import React, { useState } from 'react';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Home</div>
      <div>Welcome to my portfolio website.</div>
    </div>
  );
};

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>About Me</div>
      <div>I am Sho Katsumata, a passionate software engineer.</div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Skills</div>
      <ul>
        <li>HTML, CSS, TypeScript, React</li>
        <li>TypeScript, Node.js, Vue.js, Fastify</li>
        <li>PostgreSQL, Prisma</li>
        <li>Aspida</li>
        <li>Git, Docker, Linux</li>
      </ul>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Projects</div>
      <div>Here are some of my projects.</div>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Achievements</div>
      <ul>
        <li>【Gakuiku CAMP】 Hackathon Vol.8 Effort Award</li>
      </ul>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Contact</div>
      <div className={styles.contactInfo}>
        <div>
          Email: <a href="mailto:s1f102201616@toyo.jp">s1f102201616@toyo.jp</a>
        </div>
        <div>Phone: 090-1413-0226</div>
        <div>
          GitHub: <a href="https://github.com/0226">https://github.com/0226</a>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'aboutMe' | 'skills' | 'projects' | 'achievements' | 'contact'
  >('home');

  return (
    <div>
      <div className={styles.navbar}>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('aboutMe')}>About Me</button>
        <button onClick={() => setCurrentPage('skills')}>Skills</button>
        <button onClick={() => setCurrentPage('projects')}>Projects</button>
        <button onClick={() => setCurrentPage('achievements')}>Achievements</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </div>
      {currentPage === 'home' && <Home />}
      {currentPage === 'aboutMe' && <AboutMe />}
      {currentPage === 'skills' && <Skills />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'achievements' && <Achievements />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
};

export default App;
