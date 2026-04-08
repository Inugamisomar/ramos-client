import { useParams, Link } from 'react-router-dom';
import articles from '../assets/article-content';
import Button from '../components/Button';

const ArticlePage = () => {
  // Grab the article name from the URL (e.g., /articles/optimize-pc-max-fps)
  const { name } = useParams();
  
  // Find the matching article in our data array
  const article = articles.find(a => a.name === name);

  // If the user types a random URL, show a fallback
  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-4xl font-bold text-zinc-900">Article not found</h1>
        <p className="mt-4 text-zinc-600">The article you are looking for doesn't exist.</p>
        <Button to="/articles" className="mt-8">Back to Articles</Button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link 
        to="/articles" 
        className="mb-8 inline-block text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900"
      >
        &larr; Back to Articles
      </Link>

      {/* Header Image */}
      <div className="mb-10 overflow-hidden rounded-[2rem] bg-zinc-200 shadow-md">
        <img 
          src={article.image} 
          alt={article.title} 
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mb-8 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl lg:text-6xl">
        {article.title}
      </h1>

      {/* Content */}
      <div className="prose prose-lg prose-zinc max-w-none text-zinc-700">
        {article.content.map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default ArticlePage;