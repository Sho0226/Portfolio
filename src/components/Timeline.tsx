import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-20 border-t border-black/10">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">Timeline</p>
        <h2 className="mb-12 text-3xl font-semibold">活動履歴</h2>
        <ol className="relative border-l border-black/15">
          {timelineData.map((item) => {
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
