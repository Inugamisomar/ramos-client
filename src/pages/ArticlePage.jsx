import Button from '../components/Button';

const ArticlePage = () => {
  const articles = [
    {
      id: "01",
      title: "How to Optimize Your PC for Max FPS in 2026",
      desc: "Stop dropping frames in team fights. Here is our ultimate guide to tweaking your Windows and GPU settings.",
      img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=600",
      category: "Guides"
    },
    {
      id: "02",
      title: "The Next-Gen Console War: What We Know",
      desc: "Rumors are swirling about the next hardware drops. Are we getting a mid-gen refresh or something entirely new?",
      img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600",
      category: "Hardware"
    },
    {
      id: "03",
      title: "Top 10 Indie Games You Missed This Year",
      desc: "Take a break from the massive open worlds and check out these incredible, story-driven indie titles.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
      category: "Reviews"
    },
    {
      id: "04",
      title: "Understanding the New Ranked Meta",
      desc: "The latest patch completely flipped the tier list. Here is who you should be locking in to climb the ranks.",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
      category: "Esports"
    }
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          News & Updates
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          The Latest Drops from the Gaming World
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Patch notes, deep-dive reviews, and competitive analysis. Everything you need to stay ahead of the game.
        </p>
        <div className="mt-6">
          <Button to="/" variant="secondary">Back to Lobby</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feed
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Recent Articles
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="relative flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-zinc-900 text-zinc-50 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  Post {article.id}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-3 mb-4 text-sm leading-6 text-zinc-600 flex-grow">
                  {article.desc}
                </p>
                <div className="mt-auto">
                   <Button className="w-full" variant="secondary">Read More</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;