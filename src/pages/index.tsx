import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>自己紹介</div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>氏名</div>
        <div>勝間田翔</div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>出身大学</div>
        <div>東洋大学 情報連携学部 情報連携学科</div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>スキル</div>
        <ul>
          <li className={styles.listItem}>HTML, CSS, React</li>
        </ul>
        <div className={styles.subSectionHeader}>バックエンド</div>
        <ul>
          <li className={styles.listItem}>Node.js, vue.ls, Fastify</li>
        </ul>
        <div className={styles.subSectionHeader}>データベース</div>
        <ul>
          <li className={styles.listItem}>PostgreSQL, Prisma</li>
        </ul>

        <div className={styles.subSectionHeader}>API開発</div>
        <ul>
          <li className={styles.listItem}>Aspida</li>
        </ul>
        <div className={styles.subSectionHeader}>その他</div>
        <ul>
          <li className={styles.listItem}>Git, Docker, Linux</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>受賞歴</div>
        <ul>
          <li className={styles.listItem}>【技育CAMP】ハッカソン Vol.8 努力賞</li>
        </ul>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>自己PR</div>
        <div>
          私は常に新しい技術や知識を学ぶことに情熱を持ち、困難な問題にも挑戦する姿勢を持っています。大学のプロジェクトでは、チームリーダーとしてメンバーを統率し、大規模なシステム開発を成功させました。この経験から、リーダーシップと問題解決能力を培いました。例えば、あるプロジェクトでは、システムの性能問題に直面しましたが、新しいアルゴリズムを導入することで解決し、プロジェクトを無事完了させました。
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>入社後のビジョン</div>
        <div>
          貴社でエンジニアとして働くことで、さらに高度な技術を習得し、貴社のプロジェクトに貢献したいと考えています。特に、クラウド技術やAI分野での開発に興味があり、これらの分野でリーダーシップを発揮し、チームと共に革新的なプロジェクトを推進していきたいです。
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>連絡先</div>
        <div className={styles.contactInfo}>
          <div>
            Email: <a href="s1f102201616@toyo.jp">s1f102201616@toyo.jp</a>
          </div>
          <div>電話番号: 090-1413-0226</div>

          <div>
            GitHub: <a href="https://github.com/0226">https://github.com/0226</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
