import Footer from '../Footer';
import Header from '../Header';
import Posts from '../Posts';
import Spinner from '../Spinner';
import './App.scss';
import { useApi } from './hooks';

// import categoriesData from '../../data/categories';
// import postsData from '../../data/posts';

function App() {
  // J'utilise un custom hook pour isoler la logique de composant (SOC),
  const { isZen, setIsZen, categories, posts, isLoading } = useApi();

  return (
    <div className="app">
      {isLoading ?
        <Spinner />
        :
        <>
          <Header categories={categories} isZen={isZen} setIsZen={setIsZen} />
          <Posts posts={posts} isZen={isZen} />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
