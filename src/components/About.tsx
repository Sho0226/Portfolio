export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[200px_1fr]">
        <img
          src="/imgs/profile.jpeg"
          alt="Sho Katsumata"
          className="grayscale-img mx-auto h-48 w-48 rounded-full object-cover ring-1 ring-black/10"
        />
        <div>
          <p className="mb-2 text-xs tracking-widest text-black/50 uppercase">About</p>
          <h2 className="mb-1 text-3xl font-semibold">Sho Katsumata</h2>
          <p className="mb-6 text-sm tracking-widest text-black/50 uppercase">
            Full-stack Developer
          </p>
          <div className="space-y-4 text-base leading-relaxed text-black/80">
            <p>
              株式会社PR TIMESに所属するソフトウェアエンジニア。Webのパフォーマンスや信頼性に関心があります。
            </p>
            <p>
              学生時代はプログラミングサークルでの活動、複数のハッカソン、長期インターンシップを通じて、TypeScriptを中心としたモダンなWeb開発の実践的スキルを磨きました。
            </p>
            <p>現在は、ユーザーに価値を届けるプロダクト開発に取り組んでいます。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
