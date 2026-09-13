import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { skills } from '../data/skills';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const allSkills = Object.values(skills).flatMap(Object.entries);

const data = {
  labels: allSkills.map(([name]) => name),
  datasets: [
    {
      label: 'Skill Level',
      data: allSkills.map(([, level]) => level),
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      borderColor: 'rgba(0, 0, 0, 0.8)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderWidth: 1.5,
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: { color: 'rgba(0,0,0,0.1)' },
      grid: { color: 'rgba(0,0,0,0.1)' },
      pointLabels: { color: 'rgba(0,0,0,0.7)', font: { size: 11 } },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        stepSize: 20,
        backdropColor: 'rgba(0, 0, 0, 0)',
        color: 'rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: {
    legend: { display: false },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-black/10 bg-black/[0.02]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">Skills</p>
        <h2 className="mb-12 text-3xl font-semibold">Skill Chart</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="mx-auto w-full max-w-sm">
            <Radar data={data} options={options} />
          </div>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold tracking-widest uppercase">
                  {category}
                </h3>
                <div className="space-y-3">
                  {Object.entries(categorySkills).map(([skill, level]) => (
                    <div key={skill}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{skill}</span>
                        <span className="text-black/50">{level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-black/10">
                        <div className="h-1.5 bg-black" style={{ width: `${level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
