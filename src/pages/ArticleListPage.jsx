import Button from "../components/Button";
import ArticleList from "../components/ArticleList";
import articles from "../assets/article-content.js";

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HEADER */}
      <section className="border-y border-teal-900/30 bg-[#081f24] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        <p className="mb-3 text-[22px] font-semibold uppercase tracking-[0.28em] text-teal-400">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight !text-white sm:text-3xl">
          Featured articles
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white sm:text-base">
          Live and breathe gaming content. From in-depth guides to honest
          reviews, we cover it all. Dive into our latest articles and level up
          your gaming experience.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-y border-teal-900/30 bg-[#081f24] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        
        <div className="mb-6">
          <p className="text-[22px] font-semibold uppercase tracking-[0.28em] text-teal-400">
            Featured Articles
          </p>

          <h2 className="mt-2 text-2xl font-semibold !text-white">
            Latest Topic
          </h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;