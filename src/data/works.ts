export type WorkCategory = 'game' | 'hackathon' | 'product';

export type Work = {
  id: number;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  technologies: string[];
  category: WorkCategory;
  deploy?: string;
  sourceCode?: string;
  note?: string;
};

export const works: Work[] = [
  {
    id: 1,
    name: 'Othello',
    description: 'Next.jsで作成したオフラインオセロ',
    image: '/imgs/othello.png',
    fullDescription:
      'このオセロゲームは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/NewOthello/',
    sourceCode: 'https://github.com/Sho0226/NewOthello/',
  },
  {
    id: 2,
    name: 'Minesweeper',
    description: 'Next.jsで作成したマインスイーパー',
    image: '/imgs/minesweeper.png',
    fullDescription:
      'このマインスイーパーは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/minesweeper/',
    sourceCode: 'https://github.com/Sho0226/minesweeper/',
  },
  {
    id: 3,
    name: 'Tetris',
    description: 'Next.jsで作成したテトリス',
    image: '/imgs/tetris.png',
    fullDescription:
      'このテトリスは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/Tetris/',
    sourceCode: 'https://github.com/Sho0226/Tetris/',
  },
  {
    id: 4,
    name: 'Breaking-Blocks',
    description: 'Next.jsで作成したブロック崩し',
    image: '/imgs/block.png',
    fullDescription:
      'このブロック崩しは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/Breaking-blocks/',
    sourceCode: 'https://github.com/Sho0226/Breaking-blocks/',
  },
  {
    id: 5,
    name: 'Chess',
    description: 'Next.jsで作成したチェス',
    image: '/imgs/chess.png',
    fullDescription:
      'このチェスは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/Chess/',
    sourceCode: 'https://github.com/Sho0226/Chess/',
  },
  {
    id: 6,
    name: 'LightsOut',
    description: 'Next.jsで作成した点灯ゲーム',
    image: '/imgs/lightsout.png',
    fullDescription:
      'このライツアウトは、TypeScriptとReactを実践的に学ぶために開発を始めました。ゲームのロジックを構築することで、プログラミングの基礎と応用力を身につけることを目指します。',
    technologies: ['TypeScript', 'Next.js', 'React', 'CSS Modules'],
    category: 'game',
    deploy: 'https://sho0226.github.io/LightsOut/',
    sourceCode: 'https://github.com/Sho0226/LightsOut/',
  },
  {
    id: 7,
    name: 'TodoList',
    description: 'Full-Stack TypeScriptを用いたTodoList',
    image: '/imgs/todo.png',
    fullDescription:
      'このTodoListは、TypeScriptをフルスタックで活用するための学習プロジェクトとして作成しました。フロントエンドからバックエンドまで、幅広い技術を実践的に習得することを目的としています。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    category: 'product',
    deploy: 'https://todolist-6aet.onrender.com/',
    sourceCode: 'https://github.com/Sho0226/TodoList/',
  },
  {
    id: 8,
    name: 'AIHeadlines',
    description: 'AIを用いて最適化されたNEWSを提供するPlatform',
    image: '/imgs/AIHeadlines.png',
    fullDescription:
      'AIHeadlinesは、AIを活用して個人に最適化されたニュースを提供するプラットフォームとして開発しました。ユーザーの好みに基づいたキーワード検索やおすすめ記事を通じて、よりパーソナライズされたニュース体験を提供します。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    category: 'product',
    deploy: 'https://aiheadlines.onrender.com/',
    sourceCode: 'https://github.com/Sho0226/AIHeadlines',
  },
  {
    id: 9,
    name: 'Chronicle',
    description: '【7月_Vol.8】ハッカソン技育CAMP2024の出場作品',
    image: '/imgs/Chronicle.png',
    fullDescription:
      '【7月_Vol.8】ハッカソン技育CAMP2024の出場作品、努力賞受賞。青空文庫の名作小説を、新しい形で体験できるアプリ。AIが各シーンにぴったりの情景を描写し、合成音声で物語を読み上げます。視覚と聴覚を融合した、没入感のある読書体験を提供します。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    category: 'hackathon',
    sourceCode: 'https://todolist-6aet.onrender.com/',
  },
  {
    id: 10,
    name: '花火大会オンライン',
    description: '【9月_Vol.14】ハッカソン技育CAMP2024の出場作品',
    image: '/imgs/hanabi.png',
    fullDescription:
      '【9月_Vol.14】ハッカソン技育CAMP2024の出場作品、最優秀賞受賞。ユーザーがオンライン上で花火玉を自作し、共有されたルームで自分の作った花火を打ち上げ、仮想空間で楽しむことができます。リアルタイムで他の参加者と共に、独自の花火を通じた一体感を体験できます。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'CSS Modules',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Aspida',
    ],
    category: 'hackathon',
    sourceCode: 'https://github.com/Sho0226/Fireworks-Display-Online',
  },
  {
    id: 11,
    name: 'ポケモン図鑑',
    description: 'PokéAPIを用いたReact開発',
    image: '/imgs/pokemon.png',
    fullDescription: 'PokéAPIを用いてアウトプット中心にReact開発をしました。',
    technologies: ['TypeScript', 'Vite', 'PokéAPI'],
    category: 'product',
    deploy: 'https://sho0226.github.io/pokemon-app/',
    sourceCode: 'https://github.com/Sho0226/Fireworks-Display-Online',
    note: 'https://qiita.com/Sho0226/items/c6d497c6f62ff68399fa',
  },
  {
    id: 12,
    name: 'Fullstack Template',
    description: 'モダンな技術を使ったフルスタックフレームワーク',
    image: '/imgs/template.png',
    fullDescription: 'モダンな技術を採用した自分好みのフルスタックフレームワークを作成しました。',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Hono',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Vercel',
    ],
    category: 'product',
    deploy: 'https://next-hono-template.vercel.app',
    sourceCode: 'https://github.com/Sho0226/Next-Hono-Template',
    note: 'https://zenn.dev/sho0226/articles/8f8e130371b117',
  },
  {
    id: 13,
    name: 'TsDaily',
    description: '習慣的に学習するための勉強アプリ',
    image: '/imgs/daily.png',
    fullDescription:
      'TsDailyは、習慣的に学習するための勉強アプリです。毎日の学習を記録し、進捗を可視化することで、モチベーションを維持しやすくします。また、学習内容を振り返ることで、より深い理解を促進します。',
    technologies: ['TypeScript', 'Next.js', 'React'],
    category: 'product',
  },
];
