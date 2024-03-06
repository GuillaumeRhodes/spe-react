import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import NotFound from '../NotFound';
import Posts from '../Posts';
import Single from '../Single';
import Spinner from '../Spinner';
import './App.scss';
import { useApi } from './hooks';

// import categoriesData from '../../data/categories';
// import postsData from '../../data/posts';

function App() {
  // J'utilise un custom hook pour isoler la logique de composant (SOC),
  const { categories, posts, isLoading } = useApi();

  // Je reçois l'id d'une catégorie. Cet ID est fourni lors de l'exécution de ma fonction, au moment de la création de la Route (voir plus bas).
  const filterPosts = id => {
    // Je filtre mes posts, en comparant l'id que j'ai reçu et l'id de la catégorie auquelle appartient les posts.
    const filteredPosts = posts.filter(({ categoryId }) => categoryId === id)
    return filteredPosts
  }

  return (
    <div className="app">
      {isLoading ?
        <Spinner />
        :
        <>
          <Header categories={categories} />
          {/* Routes fonctionne comme un composant. Simplement, son contenu va changer selon la route sur laquelle on est. */}
          <Routes>
            <Route path="/" element={<Posts posts={posts} />} />
            {categories.map(({ id, slug }) => (
              // J'utilise ma fonction filterPosts pour trier au moment de la création des Route les posts que je voudrais affichés.
              <Route key={id} path={slug} element={<Posts posts={filterPosts(id)} />} />
            ))}
            <Route path="/post/:id" element={<Single posts={posts} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      }
    </div>
  );
}

export default App;