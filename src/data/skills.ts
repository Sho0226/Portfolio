export type SkillCategories = Record<string, Record<string, number>>;

export const skills: SkillCategories = {
  Frontend: {
    TypeScript: 90,
    React: 85,
    'Next.js': 80,
    CSS: 80,
    Python: 70,
  },
  Backend: {
    Prisma: 70,
    'Node.js': 50,
    Django: 50,
    SQL: 50,
    Go: 40,
    Ruby: 30,
  },
  DevOps: { AWS: 50, Docker: 65, Git: 85 },
};
