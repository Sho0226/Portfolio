const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#works', label: 'Works' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-widest uppercase">
          Sho Katsumata
        </a>
        <nav
          aria-label="メインナビゲーション"
          className="flex gap-4 overflow-x-auto text-xs tracking-widest uppercase sm:gap-6 sm:text-sm"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-black/60 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
