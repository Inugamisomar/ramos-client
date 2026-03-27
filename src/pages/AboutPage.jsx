import Button from '../components/Button';

import myProfilePic from '../assets/LEO GAMING (1).png'; 
import setupPic1 from '../assets/league.jpg';
import setupPic2 from '../assets/valor.jpg';
import setupPic3 from '../assets/mlbb.jpg';
import setupPic4 from '../assets/tekken.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900 hover:rotate-2 transition-transform shadow-xl">
              {/* 2. YOUR PICTURE IS NOW HERE */}
              <img 
                src={myProfilePic} 
                alt="Leovik Ramos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Player Profile
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Meet Leovik Ramos, the gamer behind the screen.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              What started as a hobby of breaking down patch notes has turned into a full-time obsession. Leo Gaming is built on the idea that gamers deserve honest, fluff-free content.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back to Home</Button>
              <Button to="/articles" variant="secondary">Read My Reviews</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Player Stats
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Lifetime Achievements
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Hours Played', val: '10k+' },
            { label: 'Games 100%', val: '45' },
            { label: 'Articles Written', val: '312' },
            { label: 'Energy Drinks', val: 'Too Many' }
          ].map((item, index) => (
            <div key={index} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:bg-zinc-200 transition-colors">
              <p className="text-2xl font-bold text-zinc-900">{item.val}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              The Mission
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Why Leo Gaming Exists</h2>
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">No Paid Bias</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  We don't inflate review scores for publishers. If a game runs poorly or has predatory microtransactions, we will be the first to tell you.
                </p>
              </article>
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Community First</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  This blog is for the players. We actively read comments, engage in Discord, and let the community decide which games we review next.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 hover:border-black transition-colors">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              The Battlestation
            </p>
            
           <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Replace the Unsplash links with your imported variables */}
                {[setupPic1, setupPic2, setupPic3, setupPic4].map((imgSrc, i) => (
                  <div key={i} className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
                    <img 
                      src={imgSrc} 
                      alt={`Setup piece ${i+1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            
            <Button className="mt-5 w-full" variant="primary">Join the Discord</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;