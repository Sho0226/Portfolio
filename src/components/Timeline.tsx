import { useState } from 'react';
import type { TimelineCategory } from '../data/timeline';
import { timelineData } from '../data/timeline';
import { filterTimelineByCategory } from '../lib/filters';

const TABS: { key: TimelineCategory; label: string }[] = [
  { key: 'student', label: '学生' },
  { key: 'professional', label: '社会人' },
];

export default function Timeline() {
  const [tab, setTab] = useState<TimelineCategory>('student');
  const items = filterTimelineByCategory(timelineData, tab);

  return (
    <section id="timeline" className="scroll-mt-20 border-t border-black/10">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">Timeline</p>
        <h2 className="mb-8 text-3xl font-semibold">活動履歴</h2>

        <div className="mb-12 flex gap-2">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 text-sm tracking-widest uppercase transition-colors ${
                tab === key
                  ? 'bg-black text-white'
                  : 'border border-black/15 text-black/60 hover:border-black hover:text-black'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <ol className="relative border-l border-black/15">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="mb-10 ml-6 last:mb-0">
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-black">
                  <Icon className="h-2.5 w-2.5 text-white" />
                </span>
                <span className="text-xs tracking-widest text-black/50 uppercase">
                  {item.date}
                </span>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-black/70">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
