import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article 
          key={article.name} 
          // 1. ADDED: flex, flex-col, and h-full to make the card a full-height column
          className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4"
        >
          <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
             <img 
              src={article.image} 
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Article {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {article.content[0].substring(0, 150)}...
          </p>
          
          {/* 2. ADDED: mt-auto to the Link wrapper to push it to the bottom */}
          <Link to={`/articles/${article.name}`} className="mt-auto pt-4">
            <Button className="w-full">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;