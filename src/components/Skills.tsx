import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 border-t border-black/10 bg-black/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">Skills</p>
        <h2 id="skills-heading" className="mb-12 text-3xl font-semibold">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase">{category}</h3>
              <div className="space-y-3">
                {Object.entries(categorySkills).map(([skill, level]) => (
                  <div key={skill}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{skill}</span>
                      <span className="text-black/50">{level}%</span>
                    </div>
                    <div aria-hidden="true" className="h-1.5 w-full bg-black/10">
                      <div className="h-1.5 bg-black" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
