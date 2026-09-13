import { useState } from 'react';
import type { WorkCategory } from '../data/works';
import { works } from '../data/works';
import { filterWorksByCategory } from '../lib/filters';
import WorkModal from './WorkModal';

const TABS: { key: WorkCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'game', label: 'Games' },
  { key: 'hackathon', label: 'Hackathon' },
  { key: 'product', label: 'Product' },
];

export default function Works() {
  const [tab, setTab] = useState<WorkCategory | 'all'>('all');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = filterWorksByCategory(works, tab);
  const selected = works.find((w) => w.id === selectedId) ?? null;

  return (
    <section id="works" className="scroll-mt-20 border-t border-black/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">Works</p>
        <h2 className="mb-8 text-3xl font-semibold">Works</h2>

        <div className="mb-12 flex flex-wrap gap-2">
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((work) => (
            <button
              key={work.id}
              onClick={() => setSelectedId(work.id)}
              className="group text-left"
            >
              <div className="overflow-hidden border border-black/10">
                <img
                  src={work.image}
                  alt={work.name}
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold group-hover:underline">{work.name}</h3>
              <p className="mt-1 text-sm text-black/60">{work.description}</p>
            </button>
          ))}
        </div>
      </div>
      {selected && <WorkModal work={selected} onClose={() => setSelectedId(null)} />}
    </section>
  );
}
