import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Welcome Player One</p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Your Ultimate Hub for Gaming News & Reviews
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Dive into the latest meta shifts, hardware drops, and honest reviews. Leo Gaming brings you front-row coverage of everything happening in the gaming world.
            </p>
            <div className="mt-6 flex gap-3">
              <Button to="/articles" variant="primary">Latest Drops</Button>
              <Button to="/about" variant="secondary">Meet the Team</Button>
            </div>
          </div>
          
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-2 overflow-hidden shadow-lg">
            <div className="flex min-h-60 h-full w-full items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" 
                alt="High-end Gaming Setup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Our Stats</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Leveling Up Daily</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { num: '300+', label: 'Games Reviewed' },
            { num: '50k', label: 'Active Readers' },
            { num: '24/7', label: 'Esports Coverage' },
            { num: '05', label: 'Years Online' }
          ].map((stat, i) => (
            <div key={i} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-200 transition-colors">
              <p className="text-2xl font-bold text-zinc-900">{stat.num}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Content Hub</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">What We Cover</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Honest Game Reviews',
              desc: 'From AAA blockbusters to hidden indie gems, we score games based on gameplay, story, and performance.',
              img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600'
            },
            {
              title: 'Hardware & Tech',
              desc: 'Looking for a new GPU or mechanical keyboard? Read our benchmark tests before you spend your cash.',
              img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600'
            },
            {
              title: 'Esports Updates',
              desc: 'Roster changes, tournament brackets, and live event coverage from the biggest competitive scenes.',
              img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=600'
            }
          ].map((feature, i) => (
            <article key={i} className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 overflow-hidden">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="mt-4 text-lg font-bold text-zinc-900">{feature.title}</h3>
                <p className="mt-3 mb-4 text-sm leading-6 text-zinc-600 flex-grow">
                  {feature.desc}
                </p>
                <div className="mt-auto">
                  <Button className="w-full" variant="primary">Explore</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;