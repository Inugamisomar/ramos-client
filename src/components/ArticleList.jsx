import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
      {articles.map((article, index) => (
        <div
          key={article.name}
          className="flex flex-col h-full rounded-3xl bg-[#0b2a30] border border-teal-900/30 p-4 shadow-[0_0_20px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] transition"
        >
          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl bg-[#081f24]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT WRAPPER */}
          <div className="flex flex-col flex-grow">

            {/* META */}
            <p className="mt-4 text-xs tracking-widest text-teal-400 uppercase">
              ARTICLE {String(index + 1).padStart(2, "0")}
            </p>

            {/* TITLE */}
            <h3 className="mt-2 text-lg font-bold text-white">
              {article.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm text-zinc-400">
              {article.content[0].substring(0, 60)}...
            </p>

            {/* BUTTON (FORCED TO BOTTOM) */}
            <div className="mt-auto">
              <Link to={`/articles/${article.name}`}>
                <button className="mt-4 w-full rounded-full bg-teal-400 text-black py-2 text-xs font-bold tracking-widest hover:bg-teal-300 transition">
                  READ MORE
                </button>
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;