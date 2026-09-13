import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { Work } from '../data/works';

type Props = {
  work: Work;
  onClose: () => void;
};

export default function WorkModal({ work, onClose }: Props) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-semibold">{work.name}</h3>
          <button onClick={onClose} aria-label="閉じる" className="text-black/50 hover:text-black">
            <X className="h-5 w-5" />
          </button>
        </div>
        <img
          src={work.image}
          alt={work.name}
          className="mb-4 h-48 w-full border border-black/10 object-cover"
        />
        <p className="mb-4 text-sm leading-relaxed text-black/80">{work.fullDescription}</p>

        <h4 className="mb-2 text-xs font-semibold tracking-widest uppercase">使用技術</h4>
        <ul className="mb-4 flex flex-wrap gap-2">
          {work.technologies.map((tech) => (
            <li key={tech} className="border border-black/15 px-2 py-1 text-xs">
              {tech}
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-sm">
          {work.sourceCode && (
            <p>
              <span className="text-black/50">ソースコード: </span>
              <a
                href={work.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.sourceCode}
              </a>
            </p>
          )}
          {work.deploy && (
            <p>
              <span className="text-black/50">デプロイ先: </span>
              <a
                href={work.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.deploy}
              </a>
            </p>
          )}
          {work.note && (
            <p>
              <span className="text-black/50">投稿記事: </span>
              <a
                href={work.note}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                {work.note}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
