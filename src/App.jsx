import './App.css';
import LayoutPage from "./components/LayoutPage"; // Fixed: Changed 'Layout' to 'LayoutPage'
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage'; // Fixed: Corrected the path to ArticlePage
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

const routes = [{
  path: '/',
  element: <LayoutPage />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/articles',
      element: <ArticleListPage />
    },
    {
      path: '/articles/:name', 
      element: <ArticlePage />
    }
  ]
}];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;